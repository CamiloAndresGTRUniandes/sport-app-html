import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import { useEditUserProfile } from '../../../src/pages/User/Hooks';
import { Provider } from 'react-redux';

// Mock axios
jest.mock('axios');

// Mock del store de Redux
const mockStore = {
  getState: jest.fn(() => ({
    // Simula el estado de Redux que necesites para tus pruebas
    sessionUser: {
      userInfo: {
        token: 'mockToken'
      }
    }
  })),
  subscribe: jest.fn(),
  dispatch: jest.fn()
};

describe('useEditUserProfile', () => {
  xtest('should fetch user profile and referential data', async () => {
    const mockedUser = {
      id: '123',
      countryId: '1',
      stateId: '2',
      cityId: '3',
    };

    const mockedUserProfile = {
      ...mockedUser,
      // Other user profile properties
    };

    const mockedResponseData = {
      data: mockedUserProfile,
    };

    const mockedReferentialData = {
      genres: [{ id: '1', name: 'Genre 1' }],
      countries: [{ id: '1', name: 'Country 1' }],
      states: [{ id: '1', name: 'State 1' }],
      cities: [{ id: '1', name: 'City 1' }],
      id: '01',
      userId: "9aaf3e4a-5929-44cc-9fe5-49143a86e4be",
      name: "Yonathan",
      lastName: "Beltran Romero",
      email: "natanbelt23@gmail.com",
      phoneNumber: "3102711918",
      dateOfBirth: "1983-10-08T17:25:51.051",
      genreId: '1',
      age: 30,
      countryId: '1',
      stateId: '1',
      cityId: '1',
      nutrionalProfile: {
        id: 20,
        hasAllergies: false,
        hasMedicalAllergies: false,
        typeOfNutritionId: 1,
        averagesCaloriesPerDay: 0.00
      },
      nutricionalAllergies: [
        1
      ],
      activities: [
        1
      ],
      goals: [
        1
      ],
      sportProfile: {
        id: 1,
        excerciseByWeek: 10,
        physicalLevelId: 1,
        hasInjuries: true,
        whatInjuries: "None",
        weight: 180.00,
        heigth: 85.00
      }
      // Other referential data properties
    };

    // Mock Axios.get to return user profile and referential data
    axios.get
      .mockResolvedValueOnce(mockedResponseData) // Mock user profile response
      .mockResolvedValueOnce(mockedReferentialData); // Mock referential data response

    // Render the hook
    /*
      <Provider store={storeTest}>

        <EditUserProfile />

      </Provider>
    */

    const { result, waitForNextUpdate } = renderHook(() =>  useEditUserProfile());

    // Wait for hook to finish fetching data
    //await waitForNextUpdate();

    // Assertions
    expect(result.current.userProfile).toEqual(mockedUserProfile);
    expect(result.current.userLoading).toBe(false);
    expect(result.current.genresUP).toEqual(mockedReferentialData.genres);
    expect(result.current.countriesUP).toEqual(mockedReferentialData.countries);
    expect(result.current.statesUP).toEqual(mockedReferentialData.states);
    expect(result.current.citiesUP).toEqual(mockedReferentialData.cities);
    // Additional assertions for other referential data properties

    // Verify Axios.get calls
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/api/V1/UserSportProfile/123'));
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/api/V1/Genres'));
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/api/Geography/AllCountries'));
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/api/V1/PhysicalLevel'));
    // Additional assertions for other referential data API calls
  });

  // Add more test cases for updateUser, changeNewCountry, changeNewState, etc.
});
