import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ServiceTypePage from '../../../src/pages/MealPlans/Pages/ServiceTypePage';
import { Alerts } from '../../../src/pages/Utils/Alerts';

jest.mock('axios'); // Simular axios
jest.mock('../../../src/pages/Utils/Alerts', () => ({
  Alerts: jest.fn(() => ({
    showAlertSuccess: jest.fn(),
    showAlertError: jest.fn(),
  })),
}));

const renderWithRouter = (route = '/service/01b50f0d-3226-4df2-b912-4da4b37d9bd9') => {
    return render(
        <MemoryRouter initialEntries={[route]}>
            <Routes>
                <Route path="/service/:serviceTypeId" element={<ServiceTypePage />} />
            </Routes>
        </MemoryRouter>
    );
};



describe('ServiceTypePage Component', () => {
    beforeEach(() => {
        jest.clearAllMocks(); // Limpiar mocks antes de cada prueba
    });

   
    it('muestra el título correcto para Otros Planes', () => {
        renderWithRouter('/service/other');
        const elementos = screen.getAllByText('Otros Planes'); // Puede haber múltiples elementos
        expect(elementos.length).toBe(2); 
    });

    
});
