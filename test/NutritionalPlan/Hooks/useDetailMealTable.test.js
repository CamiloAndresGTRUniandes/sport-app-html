import { renderHook, act } from "@testing-library/react-hooks"; // Para pruebas de hooks
import axios from "axios"; // Axios para simular llamadas a la API
import useDetailMealTable from "../../../src/pages/MealPlans/Hooks/NutritionalPlan/useDetailMealTable";

// Simular `axios` para controlar respuestas
jest.mock("axios");

describe("useDetailMealTable Hook", () => {
    const urlAPI = "http://mock-api"; // URL de la API simulada para pruebas

    beforeAll(() => {
        process.env.REACT_APP_API_URL_SERVICE = urlAPI; // Configurar la URL de la API
    });

   
    it("maneja errores correctamente al obtener datos", async () => {
        const errorMessage = "Error al obtener datos"; // Mensaje de error esperado

        // Configurar `axios` para simular un error
        axios.get.mockRejectedValue(new Error(errorMessage)); // Simular error

        const { result, waitForNextUpdate } = renderHook(() => useDetailMealTable("123"));

        // Llamar a la función para obtener datos
        act(() => {
            result.current.GetDataAsync();
        });

        // Esperar a la siguiente actualización
        await waitForNextUpdate();

        // Verificar que se manejó el error correctamente
        expect(result.current.mealLoading).toBe(false); // Ya no está cargando
        expect(result.current.error).toBe("Ocurrió un error al cargar datos."); // Mensaje amigable para el usuario
    });

    it("no intenta obtener datos si el ID es indefinido", () => {
        const { result } = renderHook(() => useDetailMealTable(undefined));

        // Llamar a la función con un ID indefinido
        act(() => {
            result.current.GetDataAsync();
        });

        // Verificar que el estado no cambió porque el ID es indefinido
        expect(result.current.mealLoading).toBe(false); // No debería cargar
        expect(result.current.initialData).toBeNull(); // No debería cambiar
        expect(result.current.error).toBeNull(); // No debería haber error
    });
});
