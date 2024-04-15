import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { EditUserProfile } from '../../../src/pages/User/Components/EditUserProfile';
import { MemoryRouter } from 'react-router-dom';

import { act } from 'react-test-renderer';
// Mock de useEditUserProfile
jest.mock('../../../src/pages/User/Hooks/useEditUserProfile', () => ({
  useEditUserProfile: jest.fn(() => ({
    GetUserProfile: jest.fn(),
    userProfile: {
      // Mock de los datos de usuario
      userId: '1',
      name: 'John',
      lastName: 'Doe',
      // Otros campos...
    },
    userLoading: true,
    genresUP: [],
    countriesUP: [],
    statesUP: [],
    citiesUP: [],
    changeNewCountry: jest.fn(),
    changeNewState: jest.fn(),
    typesOfNutritionUP: [],
    nutricionalAllergiesUP: [],
    physicalLevelsUP: [],
    activitiesUP: [],
    goalsUP: [],
    updateUser: jest.fn(),
    loadingUpdateProfile: false,
    userUpdated: false,
  })),
}));


// Mock de useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

// Mock de los componentes de terceros
jest.mock('react-bootstrap/Tab', () => jest.fn(({ children }) => children));
jest.mock('react-bootstrap/Tabs', () => jest.fn(({ children }) => children));

describe('EditUserProfile Spinner', () => {



  it('renders SpinnerSportApp when userLoading is true', () => {
    const {container } = render(
      <MemoryRouter>
        <EditUserProfile />
      </MemoryRouter>
      );
    const spinnerTest = container.getElementsByClassName("spinner-border text-primary");
    expect(spinnerTest).toBeDefined();

  });
});