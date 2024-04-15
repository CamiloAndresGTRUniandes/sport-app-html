import React from 'react';
import 'intersection-observer';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';

import Login from '../../../src/pages/Auth/Pages/Login'; // Assuming Login is the export name
import useLogin from '../../../src/pages/Auth/hooks/useLogin';


jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: jest.fn(() => jest.fn()),
  };
});
jest.mock('../../../src/pages/Auth/hooks/useLogin');
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  render: jest.fn(),
}))

jest.useFakeTimers();



describe('Login component', () => {
  test('should render email and password fields and display errors on invalid input', async () => {
    useLogin.mockReturnValue({
      LoginUser: jest.fn(), // Mocked function for LoginUser
      loadingUser: false, // Initial state for loadingUser
      userLogged: null,   // Initial state for userLogged
    });
    const { getByLabelText, getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Iniciar sesion');


    await act(() => {
      fireEvent.click(submitButton);
    });

    expect(getByText('El email es requerido')).toBeDefined();
    expect(getByText('La contraseña es requerida.')).toBeDefined();
    await act(() => {
      fireEvent.change(emailInput, { target: { value: 'invalidEmail' } });
    });

    await act(() => {
      fireEvent.change(passwordInput, { target: { value: 'password123' } });
    });

    await act(() => {
      fireEvent.click(submitButton);
    });



    expect(getByText('El email tiene un formato errado')).toBeDefined();
    const mockUseClientRect = jest.mocked(useLogin).mockImplementation
      ({
        
          LoginUser: jest.fn(), // Mocked function for LoginUser
          loadingUser: false, // Initial state for loadingUser
          userLogged: null,   // Initial state for userLogged
        

      })
    ;

    await act(() => {
      fireEvent.change(emailInput, { target: { value: 'valid@email.com' } });
      fireEvent.change(passwordInput, { target: { value: '' } });
      fireEvent.click(submitButton);
    });

    expect(getByText('La contraseña es requerida.')).toBeDefined();
  })
   

})



