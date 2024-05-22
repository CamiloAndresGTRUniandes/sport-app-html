import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ReceiveTrackingDetailPage from '../../../src/pages/ReceiveTracking/Pages/ReceiveTrackingDetailPage';

// Crear un mock store de Redux
const mockStore = configureMockStore();
const store = mockStore({
    sessionUser: {
        userInfo: {
            token: 'mock-token', // Token simulado para pruebas
        },
    },
});

// Función para envolver el componente con Redux Provider y MemoryRouter
const renderWithReduxAndRouter = (route = '/tracking/1') => {
    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[route]}>
                <ReceiveTrackingDetailPage />
            </MemoryRouter>
        </Provider>
    );
};

describe('ReceiveTrackingDetailPage Component', () => {
    


    it('muestra "Cargando..." cuando se está cargando', () => {
        renderWithReduxAndRouter();

        const loadingText = screen.getByText('Cargando...');
        expect(loadingText); // Verificar que muestra "Cargando..."
    });
});
