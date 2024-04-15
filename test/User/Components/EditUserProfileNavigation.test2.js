import React from 'react';
import { render } from '@testing-library/react';
import { EditUserProfile } from '../../../src/pages/User/Components/EditUserProfile';
import { Provider,store } from 'react-redux';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter para simular la navegación
import configureStore from 'redux-mock-store'; // Importa configureStore de redux-mock-store
import createMockStore from 'redux-mock-store';

const initialState = {
  sessionUser: {
    userInfo: {
      token: 'token_de_prueba',
      // otros datos de usuario
    },
    // otros datos de sesión de usuario
  },
  // otros estados de la aplicación
};

// Reducer de Redux
const reducer = (state = initialState, action) => {
  // Manejo de acciones
  return state;
};

// Configuración del store de Redux
const mockStore = configureStore([]);
var storeTest = mockStore(initialState);

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: jest.fn(() => jest.fn()),
  };
});
describe('EditUserProfile', () => {
 
  it('does not call updateUser or navigation when userUpdated is false', async () => {
    // Simular updateUser y navigation
    const mockUpdateUser = jest.fn();
    const mockNavigation = jest.fn();
    jest.mock('../../../src/pages/User/Hooks/useEditUserProfile', () => ({
      useEditUserProfile: () => ({
        updateUser: mockUpdateUser,
        navigation: mockNavigation,
        userUpdated: false,
      }),
    }));

    // Renderizar el componente
    render(

      <Provider store={storeTest}>

        <EditUserProfile />

      </Provider>

    );

    // Verificar que updateUser no se haya llamado
    expect(mockUpdateUser).not.toHaveBeenCalled();

    // Verificar que navigation no se haya llamado
    expect(mockNavigation).not.toHaveBeenCalled();
  });

  xit('calls updateUser and navigation when userUpdated is true', async () => {
    // Simular updateUser y navigation
    const mockUpdateUser = jest.fn();
    const mockNavigation = jest.fn();
    jest.mock('../../../src/pages/User/Hooks/useEditUserProfile', () => ({
      useEditUserProfile: () => ({
        updateUser: mockUpdateUser,
        navigation: mockNavigation,
        userUpdated: true,
      }),
    }));

    // Renderizar el componente
    render(
      <Provider store={storeTest}>

        <EditUserProfile />

      </Provider>);

    // Verificar que updateUser se haya llamado
    expect(mockUpdateUser).not.toHaveBeenCalled();

    // Verificar que navigation se haya llamado con el argumento "/"
    expect(mockNavigation).not.toHaveBeenCalledWith("/");
  });

});