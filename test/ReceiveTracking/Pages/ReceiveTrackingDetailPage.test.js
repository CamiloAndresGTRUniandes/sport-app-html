import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ReceiveTrackingDetailPage from '../../../src/pages/ReceiveTracking/Pages/ReceiveTrackingDetailPage';
import useReceiveTrackingDetail from '../../../src/pages/ReceiveTracking/Hooks/useReceiveTrackingDetail';

// Mockear `useReceiveTrackingDetail`
jest.mock('../../../src/pages/ReceiveTracking/Hooks/useReceiveTrackingDetail', () => jest.fn());

// Simular `useParams`
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
  }));
  
  describe('ReceiveTrackingDetailPage Component Tests', () => {
    beforeEach(() => {
      jest.clearAllMocks(); // Limpiar mocks antes de cada prueba
    });
  
    it('muestra los datos cuando están disponibles', () => {
      const mockId = '12345';
      require('react-router-dom').useParams.mockReturnValue({ id: mockId });
  
      const mockData = {
        title: 'Detalle de Recepción',
        createdAt: '2023-05-01T10:00:00Z', // Valor válido para `createdAt`
      };
  
      useReceiveTrackingDetail.mockReturnValue({
        receiveTrackingDetail: mockData,
        loading: false, // No está cargando
      });
  
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<ReceiveTrackingDetailPage />} />
          </Routes>
        </MemoryRouter>
      );
  

      // Verificar que muestra la fecha formateada correctamente
      expect(screen.getByText('May 01, 2023')); // Verificar formato de fecha
    });
  });