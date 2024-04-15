import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserState } from '../../../src/store/sessionUser';
import { Alerts } from '../../../src/pages/Utils/Alerts';
import useLogin from '../../../src/pages/Auth/hooks/useLogin';

jest.mock('axios');
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('../../../src/pages/Utils/Alerts', () => ({
  Alerts: jest.fn(() => ({
    showAlertSuccess: jest.fn(),
    showAlertError: jest.fn(),
  })),
}));

describe('useLogin', () => {
  let dispatchMock;
  let showAlertSuccessMock;
  let showAlertErrorMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
    showAlertSuccessMock = jest.fn();
    showAlertErrorMock = jest.fn();
    Alerts.mockReturnValue({
      showAlertSuccess: showAlertSuccessMock,
      showAlertError: showAlertErrorMock,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  const sessionStorageMock = (() => {
    let store = {};

    return {
      getItem: jest.fn((key) => store[key]),
      setItem: jest.fn((key, value) => {
        store[key] = value.toString();
      }),
      removeItem: jest.fn((key) => {
        delete store[key];
      }),
      clear: jest.fn(() => {
        store = {};
      }),
    };
  })();

  Object.defineProperty(window, 'sessionStorage', {
    value: sessionStorageMock,
  });

  it('should login user successfully', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLogin());
    const formCredentials = { email: 'test@example.com', password: 'password' };
    const responseData = { name: 'Test User' };

    axios.post.mockResolvedValueOnce({ data: responseData });

    await act(async () => {
      result.current.LoginUser(formCredentials);
      await waitForNextUpdate();
    });

    expect(axios.post).toHaveBeenCalledWith(`${process.env.REACT_APP_API_URL}/api/V1/Account/Login`, formCredentials);
    expect(dispatchMock).toHaveBeenCalledWith(setUserState(responseData));
    expect(sessionStorage.setItem).toHaveBeenCalledWith('userLogin', JSON.stringify(responseData));
    expect(result.current.loadingUser).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.userLogged).toBe(true);
    expect(showAlertSuccessMock).toHaveBeenCalledWith('Bienvenido a sport App :)!', 'Hola Test User');
    expect(showAlertErrorMock).not.toHaveBeenCalled();
  });

  it('should handle login error', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useLogin());
    const formCredentials = { email: 'test@example.com', password: 'password' };
    const error = new Error('Login failed');

    axios.post.mockRejectedValueOnce(error);

    await act(async () => {
      result.current.LoginUser(formCredentials);
      await waitForNextUpdate();
    });

    expect(result.current.loadingUser).toBe(false);
    expect(result.current.error).toBe(error);
    expect(result.current.userLogged).toBe(false);
    expect(showAlertErrorMock).toHaveBeenCalledWith('Inicio de session sport App', ':( Credenciales erradas, trata de nuevo!');
    expect(showAlertSuccessMock).not.toHaveBeenCalled();
  });
});
