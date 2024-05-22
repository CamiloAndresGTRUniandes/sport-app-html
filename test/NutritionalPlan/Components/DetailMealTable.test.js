import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes,Route } from "react-router-dom";
import DetailMealTable from "../../../src/pages/MealPlans/Components/NutritionalPlan/DetailMealTable";
import { useDetailMealTable } from "../../../src/pages/MealPlans/Hooks/NutritionalPlan/useDetailMealTable";

// Simular el hook useDetailMealTable
jest.mock("../../../src/pages/MealPlans/Hooks/NutritionalPlan/useDetailMealTable");

// Configurar la simulación
const mockUseDetailMealTable = (data, loading = false, error = null) => {
    useDetailMealTable.mockReturnValue({
        initialData: data,
        GetDataAsync: jest.fn(),
        mealLoading: loading,
        error: error,
    });
};

// Función para renderizar con un MemoryRouter
const renderWithRouter = (component, route = "/product/123") => {
    return render(
        <MemoryRouter initialEntries={[route]}>
            <Routes>
                {/* Usar la propiedad `element` y pasar el componente como elemento JSX */}
                <Route path="/product/:productId" element={component} />
            </Routes>
        </MemoryRouter>
    );
};

describe("DetailMealTable Component", () => {
    



    it("muestra un mensaje si no se encuentran datos para el producto", () => {
        // Configurar el hook para que no tenga datos y no esté cargando
        mockUseDetailMealTable(null);

        // Renderizar el componente
        renderWithRouter(<DetailMealTable />);

        // Verificar el mensaje de no datos
        expect(screen.getByText(/No se encontraron datos para el producto/i));
    });

    it("muestra la tabla si hay datos válidos", async () => {
        // Datos simulados para el plan nutricional
        const planData = {
            productId: "123",
            nutritionalPlan: {
                days: [
                    {
                        name: "Lunes",
                        meals: [
                            {
                                id: "1",
                                name: "Desayuno",
                                description: "Huevos y pan tostado",
                                calories: 300,
                                dishType: "Desayuno",
                                picture: "example.jpg",
                            },
                        ],
                    },
                ],
            },
        };

        // Configurar el hook para que tenga datos válidos
        mockUseDetailMealTable(planData);

        // Renderizar el componente
        renderWithRouter(<DetailMealTable />);

        // Verificar que la tabla se muestra y contiene datos correctos
        await waitFor(() => {
            expect(screen.getByText(/Lunes/i));
            expect(screen.getByText(/Huevos y pan tostado/i));
            expect(screen.getByAltText(/Desayuno/i)); // Verificar la imagen
        });
    });
});