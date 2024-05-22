import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import { useSubscriptionTable } from '../../../src/pages/Subscriptions/Hooks/useSubscriptionTable';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock de axios y Alerts
jest.mock('axios');

const mockPlanData = {
    id: '1',
    name: 'Premium',
    price: 50,
};

describe('useSubscriptionTable', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        sessionStorage.setItem('userLogin', JSON.stringify({ id: 'user1' }));
        
    });

    test('should fetch and set plan data', async () => {
        axios.get.mockResolvedValueOnce({ data: mockPlanData });

        const { result, waitForNextUpdate } = renderHook(() => useSubscriptionTable(), {
            wrapper: ({ children }) => <Router>{children}</Router>,
        });

        expect(result.current.plan).toEqual({});
        expect(result.current.productsLoading).toBe(true);

        act(() => {
            result.current.GetDataAsync({ planId: '1' });
        });

        await waitForNextUpdate({ timeout: 2000 });

        expect(result.current.plan).toEqual(mockPlanData);
        expect(result.current.productsLoading).toBe(false);
    });

    test('should handle fetch error', async () => {
        axios.get.mockRejectedValueOnce(new Error('Error fetching data'));

        const { result, waitForNextUpdate } = renderHook(() => useSubscriptionTable(), {
            wrapper: ({ children }) => <Router>{children}</Router>,
        });

        act(() => {
            result.current.GetDataAsync({ planId: '1' });
        });

        expect(result.current.plan).toEqual({});
        expect(result.current.productsLoading).toBe(true);
       
    });

    test('should format currency correctly', () => {
        const { result } = renderHook(() => useSubscriptionTable(), {
            wrapper: ({ children }) => <Router>{children}</Router>,
        });

        const formattedCurrency = result.current.formatCurrency(50);
        expect(formattedCurrency).toBe('$50.00');
    });

    
    
});
