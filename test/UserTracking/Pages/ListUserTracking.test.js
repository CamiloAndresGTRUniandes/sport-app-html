import React from 'react';
import 'intersection-observer';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ListUserTracking from '../../../src/pages/UserTracking/Pages/ListUserTracking'; // Import the component
import { useListUsersEnroll } from '../../../src/pages/UserTracking/Hooks/useListUsersEnroll';
jest.useFakeTimers();

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: jest.fn(() => jest.fn()),
  };
});
jest.mock('../../../src/pages/UserTracking/Hooks/useListUsersEnroll');
describe('ListUserTracking component', () => {
  test('renders loading state while users are being fetched', async () => {
    const mockData = [
      {
        id: 1,
        user: { name: 'John', lastName: 'Doe' },
        serviceName: 'Service 1',
        categoryName: 'Category A',
        plan: { name: 'Plan 1' },
        wasPayed: true,
        endSuscription:new Date("2024-01-01") ,
        startSuscription:new Date("2029-01-01") 
      }]

    useListUsersEnroll.mockReturnValue({
      listAllUsers: mockData,
      loadingUserList: false,
      nameAsociate: 'Test Association',
      getListUsersEnroll: jest.fn(() => jest.fn())
    });

    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <ListUserTracking />
      </MemoryRouter>
    );
    //await new Promise((resolve) => setTimeout(resolve, 0));

    expect(getByText("Test Association")).toBeDefined();
    expect(screen.getByRole('table')).toBeDefined();
    const userRows = screen.getAllByRole('row');
    expect(userRows.length).toBe(mockData.length + 1);
    const searchInput = getByPlaceholderText('Buscar por usuario');
    fireEvent.change(searchInput, { target: { value: 'John' } });
    const filteredRows = screen.getAllByRole('row');
    expect(filteredRows.length).toBe(2); // Header + 1 matching row (John Doe)
  });
});
