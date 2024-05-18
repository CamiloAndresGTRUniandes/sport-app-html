import { renderHook, act } from "@testing-library/react-hooks"; // Para pruebas de hooks
import axios from "axios"; // Axios para simular llamadas a la API
import useDetailTrainingTable from "../../../src/pages/MealPlans/Hooks/TrainingPlan/useDetailTrainingTable";

// Mockear axios
jest.mock('axios');

describe('useDetailTrainingTable', () => {
    const urlAPI = process.env.REACT_APP_API_URL_SERVICE;
    const id = '123';

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('debe inicializarse con valores predeterminados', () => {
        const { result } = renderHook(() => useDetailTrainingTable(id));
        expect(result.current.initialData).toBeNull();
        expect(result.current.trainingLoading).toBe(false);
        expect(result.current.error).toBeNull();
    });

    it('debe establecer loading a true mientras carga los datos', async () => {
        axios.get.mockResolvedValueOnce({ data: { some: 'data' } });

        const { result, waitForNextUpdate } = renderHook(() => useDetailTrainingTable(id));
        act(() => {
            result.current.GetDataAsync();
        });

        expect(result.current.trainingLoading).toBe(true);

        await waitForNextUpdate();

        expect(result.current.trainingLoading).toBe(false);
    });

    it('debe establecer initialData después de una carga exitosa', async () => {
        const mockData = { some: 'data' };
        axios.get.mockResolvedValueOnce({ data: mockData });

        const { result, waitForNextUpdate } = renderHook(() => useDetailTrainingTable(id));
        act(() => {
            result.current.GetDataAsync();
        });

        await waitForNextUpdate();

        expect(result.current.initialData).toEqual(mockData);
        expect(result.current.trainingLoading).toBe(false);
        expect(result.current.error).toBeNull();
    });

    it('debe establecer error después de una carga fallida', async () => {
        axios.get.mockRejectedValueOnce(new Error('Error fetching data'));

        const { result, waitForNextUpdate } = renderHook(() => useDetailTrainingTable(id));
        act(() => {
            result.current.GetDataAsync();
        });

        await waitForNextUpdate();

        expect(result.current.error).toBe('Ocurrió un error al cargar datos.');
        expect(result.current.initialData).toBeNull();
        expect(result.current.trainingLoading).toBe(false);
    });

    it('no debe intentar cargar datos si id es indefinido', async () => {
        const { result } = renderHook(() => useDetailTrainingTable(undefined));

        act(() => {
            result.current.GetDataAsync();
        });

        expect(result.current.trainingLoading).toBe(false);
        expect(result.current.initialData).toBeNull();
        expect(result.current.error).toBeNull();
        expect(axios.get).not.toHaveBeenCalled();
    });
});