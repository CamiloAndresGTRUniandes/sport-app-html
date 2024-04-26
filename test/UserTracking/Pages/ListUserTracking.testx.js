import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListUserTracking from '../../../src/pages/UserTracking/Pages/ListUserTracking'; // Import the component
//import { useListUsersEnrollMock } from './__mocks__/useListUsersEnrollMock'; // Mock the hook (explained later)

jest.mock('../../../src/pages/UserTracking/Hooks/useListUsersEnroll'); // Apply the mock

describe('ListUserTracking component', () => {
  test('renders loading state while users are being fetched', () => {
    const { getByText } = render(<ListUserTracking />);
    screen.debug();
  });

  // it('renders user data and search functionality when data is available', async () => {
  //   const mockData = [
  //     {
  //       id: 1,
  //       user: { name: 'John', lastName: 'Doe' },
  //       serviceName: 'Service 1',
  //       categoryName: 'Category A',
  //       plan: { name: 'Plan 1' },
  //       wasPayed: true,
  //     },
  //     // Add more mock data for testing search
  //   ];
  //   useListUsersEnrollMock.mockReturnValue({
  //     listAllUsers: mockData,
  //     loadingUserList: false,
  //     nameAsociate: 'Test Association',
  //   });

  //   const { getByText, getByPlaceholderText } = render(<ListUserTracking />);

  //   // Wait for async data fetching (if applicable)
  //   await new Promise((resolve) => setTimeout(resolve, 0));

  //   expect(getByText(/Test Association/i)).toBeInTheDocument();
  //   expect(screen.getByRole('table')).toBeInTheDocument();

  //   const userRows = screen.getAllByRole('row');
  //   expect(userRows.length).toBe(mockData.length + 1); // Account for header row

  //   // Test search functionality
  //   const searchInput = getByPlaceholderText('Buscar por usuario');
  //   fireEvent.change(searchInput, { target: { value: 'Doe' } });

  //   // Wait for search results to update (if applicable)
  //   await new Promise((resolve) => setTimeout(resolve, 0));

  //   const filteredRows = screen.getAllByRole('row');
  //   expect(filteredRows.length).toBe(2); // Header + 1 matching row (John Doe)
  // });

  // it('displays "Al dia" for paid users and "Pendiente" for unpaid users', async () => {
  //   const mockData = [
  //     { id: 1, user: { name: 'John' }, wasPayed: true },
  //     { id: 2, user: { name: 'Jane' }, wasPayed: false },
  //   ];
  //   useListUsersEnrollMock.mockReturnValue({
  //     listAllUsers: mockData,
  //     loadingUserList: false,
  //     nameAsociate: 'Test Association',
  //   });

  //   const { getByText } = render(<ListUserTracking />);

  //   // Wait for async data fetching (if applicable)
  //   await new Promise((resolve) => setTimeout(resolve, 0));

  //   expect(getByText(/Al dia/i)).toBeInTheDocument();
  //   expect(getByText(/Pendiente/i)).toBeInTheDocument();
  // });

  // Add more tests for other functionalities (e.g., error handling, edge cases)
});
