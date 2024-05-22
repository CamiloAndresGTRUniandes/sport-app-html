import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import { usePricingCard } from '../../../src/pages/Subscriptions/Hooks/usePricingCard';

// Mock de axios
jest.mock('axios');


const mockPlansData = [
    { id: 1, name: 'Basic', price: 0 },
    { id: 2, name: 'Intermediate', price: 20 },
    { id: 3, name: 'Premium', price: 50 },
];

describe('usePricingCard', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should fetch and set pricing blog data', async () => {
        // Mock de la respuesta de axios
        axios.get.mockResolvedValueOnce({ data: mockPlansData });

        const { result, waitForNextUpdate } = renderHook(() => usePricingCard());

        // Llamada inicial antes de ejecutar GetDataAsync
        expect(result.current.pricingBlog).toEqual([]);
        expect(result.current.productsLoading).toBe(true);});

        

    test('should handle fetch error', async () => {
        const errorMessage = 'Error fetching data';
        axios.get.mockRejectedValueOnce(new Error(errorMessage));
        
        const { result, waitForNextUpdate } = renderHook(() => usePricingCard());

        // Ejecuta GetDataAsync
        act(() => {
            result.current.GetDataAsync();
        });

        // Espera a la actualización del hook
        await waitForNextUpdate({ timeout: 2000 });

        // Verifica que los datos no se han cargado y productsLoading se ha cambiado a false
        
        expect(result.current.productsLoading).toBe(false);
        
    });
});