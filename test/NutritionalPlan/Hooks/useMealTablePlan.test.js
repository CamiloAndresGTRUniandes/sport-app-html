import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios"; // Para simular llamadas a la API
import useMealTablePlan from "../../../src/pages/MealPlans/Hooks/NutritionalPlan/useMealTablePlan";
import { Alerts, GetUserInfo } from "../../../src/pages/Utils";

// Simular `axios`
jest.mock("axios");
jest.mock("../../../src/pages/Utils", () => ({
    Alerts: jest.fn().mockReturnValue({
        showAlertSuccess: jest.fn(),
        showAlertError: jest.fn(),
    }),
    GetUserInfo: jest.fn().mockReturnValue({
        getToken: jest.fn().mockReturnValue("mocked-token"), // Simular el token
    }),
}));

describe("useMealTablePlan Hook", () => {
    const goalId = "12345"; // ID simulado
    const urlAPI = "http://mock-api"; // URL de la API simulada para pruebas

    let consoleSpy; // Variable para guardar la referencia del espionaje de consola

    beforeAll(() => {
        process.env.REACT_APP_API_URL_SERVICE = urlAPI; // Configurar la URL de la API
        process.env.REACT_APP_API_URL = urlAPI;
    });

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {}); // Silenciar console.error
    });

    afterEach(() => {
        consoleSpy.mockRestore(); // Restaurar el comportamiento original de console.error
    });

    it("carga datos correctamente tras llamada a GetDataAsync", async () => {
        const expectedProductServices = [{ productId: "123", name: "Plan Básico" }];
        const expectedGoal = { name: "Pérdida de peso" };

        axios.post.mockResolvedValueOnce({ data: expectedProductServices }); // Simular respuesta del POST
        axios.get.mockResolvedValueOnce({ data: expectedGoal }); // Simular respuesta del GET

        const { result, waitForNextUpdate } = renderHook(() => useMealTablePlan(goalId));

        act(() => {
            result.current.GetDataAsync();
        });

        await waitForNextUpdate();

        expect(result.current.mealLoading).toBe(false); // Verificar que terminó de cargar
        expect(result.current.initialData).toEqual(expectedProductServices); // Datos correctos
        expect(result.current.goal).toEqual(expectedGoal); // Objetivo correcto
        expect(result.current.error).toBeNull(); // Sin error
    });

    it("maneja errores correctamente al cargar datos", async () => {
        const errorMessage = "Error simulado";

        axios.post.mockRejectedValueOnce(new Error(errorMessage)); // Simular error en el POST
        axios.get.mockRejectedValueOnce(new Error(errorMessage)); // Simular error en el GET

        const { result, waitForNextUpdate } = renderHook(() => useMealTablePlan(goalId));

        act(() => {
            result.current.GetDataAsync();
        });

        await waitForNextUpdate();

        expect(result.current.mealLoading).toBe(false); // Ya no está cargando
        expect(result.current.error).toBe("Ocurrió un error al cargar datos."); // Mensaje amigable para el usuario
        expect(consoleSpy).toHaveBeenCalled(); // Verificar que `console.error` fue llamado
    });

    
});
