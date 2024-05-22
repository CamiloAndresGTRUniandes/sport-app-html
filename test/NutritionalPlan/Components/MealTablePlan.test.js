import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import MealTablePlan from "../../../src/pages/MealPlans/Components/NutritionalPlan/MealTablePlan";
import { useMealTablePlan } from "../../../src/pages/MealPlans/Hooks/NutritionalPlan/useMealTablePlan";
import { Alerts } from "../../../src/pages/Utils/Alerts";

// Simular el hook useMealTablePlan
jest.mock("../../../src/pages/MealPlans/Hooks/NutritionalPlan/useMealTablePlan");

// Simular las alertas
jest.mock("../../../src/pages/Utils/Alerts", () => ({
    Alerts: jest.fn().mockReturnValue({
        showAlertError: jest.fn(),
    }),
}));

// Simulación de datos para pruebas
const initialData = [
    {
        productId: "123",
        name: "Plan de comidas 1",
        description: "Plan nutricional para mejorar rendimiento",
        picture: "example.jpg",
        plan: {
            name: "Plan Básico",
            id: "plan1",
        },
        goal : {
            name: "Pérdida de peso",
        }
    },
];


const subscribedUsers = [
    { userId: "user1", serviceId: "123" },
];

// Función para renderizar con un MemoryRouter
const renderWithRouter = (component, route = "/") => {
    return render(
        <MemoryRouter initialEntries={[route]}>
            <Routes>
                <Route path="/" element={component} />
            </Routes>
        </MemoryRouter>
    );
};

describe("MealTablePlan Component", () => {
 
    xit("muestra datos en la tabla cuando están disponibles", () => {
        // Configurar el hook para tener datos válidos
        useMealTablePlan.mockReturnValue({
            initialData,
            mealLoading: false,
            GetDataAsync: jest.fn(),
            subscribedUsers,
            handleSubscribe: jest.fn(),
            error: null,
        });

        // Renderizar el componente
        renderWithRouter(<MealTablePlan />);

        // Verificar que los datos se muestran en la tabla
        expect(screen.getByText("Plan de comidas 1")); // Verificar texto
        expect(screen.getByText("Plan Básico")); // Verificar texto del plan
        expect(screen.getByText("Pérdida de peso"));// Verificar texto del objetivo
        expect(screen.getByAltText("Plan de comidas 1")); // Verificar la imagen
    });

    // it("interacción con el botón de suscripción", () => {
    //     // Configurar el hook para tener datos válidos y el método handleSubscribe
    //     useMealTablePlan.mockReturnValue({
    //         initialData,
    //         mealLoading: false,
    //         GetDataAsync: jest.fn(),
    //         subscribedUsers,
    //         handleSubscribe: jest.fn(),
    //         error: null,
    //     });

    //     const { showAlertError } = Alerts(); // Acceder a la función simulada para alertas

    //     // Renderizar el componente
    //     renderWithRouter(<MealTablePlan />);

    //     // Encontrar el botón de suscripción
    //     const subscribeButton = screen.getByText("Suscribirse");

    //     // Disparar el evento de clic
    //     fireEvent.click(subscribeButton);

       
    // });
});
