import { renderHook, act } from "@testing-library/react-hooks"; // Para pruebas de hooks
import axios from "axios"; // Axios para simular llamadas a la API
import useDetailMealTable from "../../../src/pages/MealPlans/Hooks/NutritionalPlan/useDetailMealTable";

// Simular `axios` para controlar respuestas
jest.mock("axios");

describe("useDetailMealTable Hook", () => {
    const urlAPI = "http://mock-api"; // URL de la API simulada para pruebas
    let consoleSpy;

    beforeAll(() => {
        process.env.REACT_APP_API_URL_SERVICE = urlAPI; // Configurar la URL de la API
    });

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {}); // Silenciar console.error
    });

    afterEach(() => {
        consoleSpy.mockRestore(); // Restaurar comportamiento original de console.error
    });

    it("carga datos correctamente", async () => {
        // Simular la respuesta de la API
        const data = { meal: "Chicken Sandwich" };
        axios.get.mockResolvedValueOnce({ data });

        const { result, waitForNextUpdate } = renderHook(() => useDetailMealTable("123"));

        act(() => {
            result.current.GetDataAsync();
        });

        await waitForNextUpdate();

        expect(result.current.mealLoading).toBe(false); // Verificar que terminó de cargar
        expect(result.current.initialData).toEqual(data); // Verificar que los datos son correctos
        expect(result.current.error).toBeNull(); // No debería haber errores
    });

    it("maneja errores correctamente al obtener datos", async () => {
        const errorMessage = "Error al obtener datos"; // Mensaje de error esperado

        axios.get.mockRejectedValueOnce(new Error(errorMessage)); // Simular error

        const { result, waitForNextUpdate } = renderHook(() => useDetailMealTable("123"));

        act(() => {
            result.current.GetDataAsync();
        });

        await waitForNextUpdate();

        expect(result.current.mealLoading).toBe(false); // Ya no está cargando
        expect(result.current.error).toBe("Ocurrió un error al cargar datos."); // Mensaje amigable para el usuario
    });

    it("no intenta obtener datos si el ID es indefinido", () => {
        const { result } = renderHook(() => useDetailMealTable(undefined));

        act(() => {
            result.current.GetDataAsync();
        });

        expect(console.error).toHaveBeenCalledWith("ID is undefined"); // Mensaje de error esperado
        expect(result.current.mealLoading).toBe(false); // No debería cargar
        expect(result.current.initialData).toBeNull(); // No debería cambiar
        expect(result.current.error).toBeNull(); // No debería haber error
    });
});
