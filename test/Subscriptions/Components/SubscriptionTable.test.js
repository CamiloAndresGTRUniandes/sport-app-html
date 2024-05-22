import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, useParams } from 'react-router-dom';
import SubscriptionTable from '../../../src/pages/Subscriptions/Components/SubscriptionTable';
import { useSubscriptionTable } from '../../../src/pages/Subscriptions/Hooks/useSubscriptionTable';

// Mock para useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}));

// Mock para useSubscriptionTable
jest.mock('../../../src/pages/Subscriptions/Hooks/useSubscriptionTable');

const mockPlan = {
    name: 'Premium',
    price: 50
  };
  
  const mockUseParams = {
    planId: '1'
  };
  
  describe('SubscriptionTable', () => {
    beforeEach(() => {
      useParams.mockReturnValue(mockUseParams);
      useSubscriptionTable.mockReturnValue({
        plan: mockPlan,
        GetDataAsync: jest.fn(),
        productsLoading: false,
        formatCurrency: jest.fn().mockReturnValue('$50'),
        pagar: jest.fn()
      });
    });
  
    test('renders the SubscriptionTable component', () => {
      render(
        <Router>
          <SubscriptionTable />
        </Router>
      );
  
      // Verifica que el nombre del plan, costo y botón de pago estén presentes
      expect(screen.getByText('Premium'));
      expect(screen.getByText('$50'));
      
      // Verifica que el botón de pago esté presente usando getByRole para evitar confusión con el texto en el <th>
      expect(screen.getByRole('button', { name: /pagar/i }));
    });
  
    test('calls pagar function when pay button is clicked', () => {
      render(
        <Router>
          <SubscriptionTable />
        </Router>
      );
  
      // Simula hacer clic en el botón de pagar
      fireEvent.click(screen.getByRole('button', { name: /pagar/i }));
  
      // Verifica que la función pagar haya sido llamada
      expect(useSubscriptionTable().pagar).toHaveBeenCalledWith(mockPlan);
    });
  });