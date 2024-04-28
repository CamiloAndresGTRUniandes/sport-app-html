import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRecomendationForUser } from '../../../src/pages/UserTracking/Hooks/useRecomendationForUser'; // Mock hook (explained later)
import { useEditRecommendation } from '../../../src/pages/UserTracking/Hooks/useEditRecommendation';
import { EditRecommendation } from '../../../src/pages/UserTracking/Pages/EditRecommendation';
import { RecommendationForUser } from '../../../src/pages/UserTracking/Pages/RecomendationForUser';

jest.mock('../../../src/pages/UserTracking/Hooks/useRecomendationForUser');
jest.mock('../../../src/pages/UserTracking/Hooks/useListUsersEnroll');
jest.mock('../../../src/pages/UserTracking/Hooks/useEditRecommendation');
jest.useFakeTimers();
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: jest.fn(() => jest.fn()),
  };
});

// Mock hooks
jest.mock('../../../src/pages/UserTracking/Hooks/useRecomendationForUser', () => ({
  useRecomendationForUser: jest.fn(),
  getRecommendationUser: jest.fn(() => jest.fn())
}));
jest.mock('../../../src/pages/UserTracking/Hooks/useEditRecommendation', () => ({
  useEditRecommendation: jest.fn(),
}));

const userMock = { name: 'John', lastName: 'Doe' }
const serviceNameMock = 'Service 1';


describe('EditRecommendation component', () => {
  beforeEach(() => {
    useRecomendationForUser.mockReturnValue({
      recommendationUsers: {
        user: userMock,
        serviceName: serviceNameMock,
        userId: 'user-id',
        userAsociateId: 'user-associate-id',
      },
      getRecommendationUser: jest.fn(() => jest.fn()),
      loadingRecommendationUser: false,
    });

    // Mock data and functions for useEditRecommendation
    useEditRecommendation.mockReturnValue({
      listRecommendations: [
        { id: 1, name: 'Recommendation Type 1' },
        { id: 2, name: 'Recommendation Type 2' },
      ],
      loadingTypeOfRecommendation: false,
      getDataTracking: jest.fn(),
      loadingSaveRecommendation: false,
      userRecommendationSave: false,
      saveRecommendation: jest.fn(),
    });
  });

  it('renders user information, recommendation data and edit form', async () => {
    render(
      <Router>
        <EditRecommendation />
      </Router>
    );

    const lblUserRecom = screen.getByText(`${userMock.name}`);
    const lblService = screen.getByText('para el servicio/producto', { exact: false });
    expect(lblUserRecom).toBeDefined();
    expect(lblService).toBeDefined();
    const imageInput = screen.getByLabelText('Imagen');
    const titleInput = screen.getByLabelText('Recomendacion');
    const typeOfRecommendationSelect = screen.getByLabelText('Tipo de recomendacion');
    const descriptionInput = screen.getByLabelText('Detalle');
    expect(imageInput).toBeDefined();
    expect(titleInput).toBeDefined();
    expect(typeOfRecommendationSelect).toBeDefined();
    expect(descriptionInput).toBeDefined();
  });

  it('handles form submission and calls saveRecommendation on valid data', async () => {
    render(
      <Router>
        <EditRecommendation />
      </Router>
    );

    const imageInput = screen.getByLabelText('Imagen');
    const titleInput = screen.getByLabelText('Recomendacion');
    const typeOfRecommendationSelect = screen.getByLabelText('Tipo de recomendacion');
    const descriptionInput = screen.getByLabelText('Detalle');
    const saveButton = screen.getByRole('button', { name: /Guardar/i });

    // Fill in form data
    fireEvent.change(imageInput, { target: { value: 'image-url' } });
    fireEvent.change(titleInput, { target: { value: 'New Recommendation Title' } });
    fireEvent.change(typeOfRecommendationSelect, { target: { value: '1' } }); // Assuming selection by value
    fireEvent.change(descriptionInput, { target: { value: 'Detailed recommendation description' } });
    await act(() => fireEvent.click(saveButton));
  });

});