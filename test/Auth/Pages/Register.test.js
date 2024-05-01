import React from 'react';
import 'intersection-observer';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import Registro from '../../../src/pages/Auth/Pages/Register';
import useRegisterUser from '../../../src/pages/Auth/Hooks/useRegisterUser';
import useEmailExists from '../../../src/pages/Auth/Hooks/useEmailExists';

jest.mock('../../../src/pages/Auth/Hooks/useRegisterUser',
  () => {
    return {
      createUser: jest.fn(),
      loading: false,
      userCreated: false,
      __esModule: true,
      default: jest.fn(() => jest.fn())
    }
  }
);
jest.mock('../../../src/pages/Auth/Hooks/useEmailExists', () => ({
  useEmailExists: jest.fn(() => ({
    validateEmail: jest.fn(),
    emailExists: false,
    __esModule: true,
    default: jest.fn(() => jest.fn())
  })),
  __esModule: true,
  default: jest.fn(() => jest.fn())
}));

jest.useFakeTimers();

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: jest.fn(() => jest.fn()),
  };
});


describe('Registro component', () => {
  test('renders the registration form with basic elements', async () => {
    const { getByLabelText, container } = render(
      <MemoryRouter>
        <Registro />
      </MemoryRouter>
    );

    expect(getByLabelText('Nombre(s)')).toBeDefined();
    expect(getByLabelText('Apellidos(s)')).toBeDefined();
    expect(getByLabelText('Email')).toBeDefined();
    expect(getByLabelText('Contraseña')).toBeDefined();
    expect(getByLabelText('Validar Contraseña')).toBeDefined();
    const checkIsUser = container.getElementsByClassName("form-check-input");
    expect(checkIsUser).toBeDefined();


  });

  test('validates password complexity on submit (weak password)', async () => {
    const createUserMock = jest.fn();
    useRegisterUser.mockReturnValueOnce({ createUser: createUserMock, loading: false, userCreated: false });
    useEmailExists.mockReturnValueOnce({
      validateEmail: jest.fn(),
      emailExists: true

    });
  render(<MemoryRouter>
      <Registro />
    </MemoryRouter>);

    const firstNameInput = screen.getByLabelText(/Nombre\(s\)/i);
    const lastNameInput = screen.getByLabelText(/Apellidos\(s\)/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText('Contraseña');
    const confirmPasswordInput = screen.getByLabelText(/Validar Contraseña/i);
    const submitButton = screen.getByRole('button', { name: 'Registrarse' });

    await act(() => {
      fireEvent.click(submitButton);
    });


    await act(() => {

      fireEvent.change(firstNameInput, { target: { value: 'John' } });
      fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
      fireEvent.change(passwordInput, { target: { value: 'weakpassword' } }); // Weak password
      fireEvent.change(confirmPasswordInput, { target: { value: 'weakpassword' } });
    });


    await act(() => {
      fireEvent.click(submitButton);
    });
    await expect(createUserMock).not.toHaveBeenCalled();

  });

});
