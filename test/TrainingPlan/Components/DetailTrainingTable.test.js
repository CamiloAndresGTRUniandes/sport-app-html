import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import DetailTrainingTable from "../../../src/pages/MealPlans/Components/TrainingPlan/DetailTrainingTable";
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
                <Route path="/detail/:productId" element={component} />
            </Routes>
        </MemoryRouter>
    );
};

describe("DetailTrainingTable Component", () => {
    it("muestra un mensaje si no se encuentran datos para el producto", () => {
        // Configurar el hook para que no tenga datos y no esté cargando
        mockUseDetailMealTable(null);

        // Renderizar el componente
        renderWithRouter(<DetailTrainingTable />, '/detail/123');

        // Verificar el mensaje de no datos
        expect(screen.getByText('No se encontraron datos para el producto'));
    });

    it("muestra la tabla si hay datos válidos", async () => {
        // Datos simulados para el plan nutricional
        const mockData = {
            productId: '123',
            trainingPlan: {
                trainings: [
                    {
                        name: 'Entrenamiento 1',
                        exercises: [
                            {
                                id: 'e1',
                                name: 'Ejercicio 1',
                                description: 'Descripción 1',
                                sets: 3,
                                repeats: 10,
                                weight: '20kg',
                                picture: 'image1.jpg'
                            }
                        ]
                    }
                ]
            }
        };

        // Configurar el hook para que tenga datos válidos
        mockUseDetailMealTable(mockData);

        // Renderizar el componente
        renderWithRouter(<DetailTrainingTable />, '/detail/123');
  
        // Verificar que la tabla se muestra y contiene datos correctos
        await waitFor(() => {
            expect(screen.getByText('Entrenamiento'));
            expect(screen.getByText('Ejercicio'));
            expect(screen.getByText('Descripción'));
            expect(screen.getByText('Sets'));
            expect(screen.getByText('Repeticiones'));
            expect(screen.getByText('Peso'));
            expect(screen.getByText('Imagen'));
    
            expect(screen.getByText('Entrenamiento 1'));
            expect(screen.getByText('Ejercicio 1'));
            expect(screen.getByText('Descripción 1'));
            expect(screen.getByText('3'));
            expect(screen.getByText('10'));
            expect(screen.getByText('20kg'));
        });
    });
});