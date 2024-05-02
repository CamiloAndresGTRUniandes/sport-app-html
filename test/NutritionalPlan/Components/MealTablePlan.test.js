import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import MealTablePlan from "../../../src/pages/MealPlans/Components/NutritionalPlan/MealTablePlan";
import { useMealTablePlan } from "../../../src/pages/MealPlans/Hooks/NutritionalPlan/useMealTablePlan";
import { Alerts } from "../../../src/pages/Utils/Alerts";

// Configurar el estado simulado para el store de Redux
const mockStore = configureStore([]);
const initialState = {
  sessionUser: {
    userInfo: {
      token: 'mock-token', // Simular un token de usuario
    },
  },
};

// Mockear `useMealTablePlan`
jest.mock("../../../src/pages/MealPlans/Hooks/NutritionalPlan/useMealTablePlan");

// Mockear `Alerts`
jest.mock("../../../src/pages/Utils/Alerts", () => ({
    Alerts: jest.fn().mockReturnValue({
        showAlertError: jest.fn(),
        showAlertSuccess: jest.fn(),
    }),
}));

const renderWithProviderAndRouter = (component, store, route = "/") => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        {component}
      </MemoryRouter>
    </Provider>
  );
};

describe("MealTablePlan Component Tests", () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState); // Inicializar el store simulado
    jest.clearAllMocks(); // Limpiar mocks antes de cada prueba
  });

  it("muestra el spinner mientras se cargan datos", () => {
    useMealTablePlan.mockReturnValue({
      initialData: [],
      mealLoading: true,
      GetDataAsync: jest.fn(),
      error: null,
      goal: null,
      handleSubscribe: jest.fn(),
      subscribedUsers: [],
    });

    renderWithProviderAndRouter(<MealTablePlan />, store);

    expect(screen.getByRole("status")); // Verificar el spinner
  });

  it("muestra datos cuando están disponibles", () => {
    const initialData = [
      {
        productId: "123",
        name: "Plan de comidas 1",
        description: "Plan nutricional para mejorar rendimiento",
        plan: { name: "Plan Básico" },
      },
    ];

    useMealTablePlan.mockReturnValue({
      initialData,
      mealLoading: false,
      GetDataAsync: jest.fn(),
      error: null,
      goal: { name: "Pérdida de peso" },
      subscribedUsers: [],
      handleSubscribe: jest.fn(),
    });

    renderWithProviderAndRouter(<MealTablePlan />, store);

    expect(screen.getByText("Plan de comidas 1")); // Verificar el nombre del plan
    expect(screen.getByText("Plan Básico")); // Verificar el tipo de plan
    expect(screen.getByText("Pérdida de peso")); // Verificar el objetivo
  });

  it("muestra mensaje de error cuando hay un error", () => {
    useMealTablePlan.mockReturnValue({
      initialData: [],
      mealLoading: false,
      GetDataAsync: jest.fn(),
      error: "Ocurrió un error al cargar datos.",
    });

    renderWithProviderAndRouter(<MealTablePlan />, store);

    expect(screen.getByText("Ocurrió un error al cargar datos.")); // Verificar el mensaje de error
  });

  
});
