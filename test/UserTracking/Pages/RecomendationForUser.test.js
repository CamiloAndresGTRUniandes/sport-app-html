import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Required for Link components
import { useRecomendationForUser } from '../../../src/pages/UserTracking/Hooks/useRecomendationForUser'; // Mock hook (explained later)
import { RecommendationForUser } from '../../../src/pages/UserTracking/Pages/RecomendationForUser';
import { useListUsersEnroll } from '../../../src/pages/UserTracking/Hooks/useListUsersEnroll';
jest.mock('../../../src/pages/UserTracking/Hooks/useRecomendationForUser');
jest.mock('../../../src/pages/UserTracking/Hooks/useListUsersEnroll');
jest.useFakeTimers();
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    useNavigate: jest.fn(() => jest.fn()),
  };
});
describe('RecommendationForUser component', () => {


  it('renders user information and recommendations when data is available', async () => {
    const mockData = {
      user: { name: 'John', lastName: 'Doe' },
      serviceName: 'Service 1',
      plan: { name: 'Plan A' },
      userRecommendations: [
        { id: 1, title: 'Recommendation 1', createdAt: new Date('2024-04-25'), description: 'Detailed recommendation' },
      ],
    };
    useRecomendationForUser.mockReturnValue({
      recommendationUsers: mockData,
      loadingRecommendationUser: false,
      getRecommendationUser: jest.fn(() => jest.fn())
    });

    const mockDataEmroll = [
      {
        id: 1,
        user: { name: 'John', lastName: 'Doe' },
        serviceName: 'Service 1',
        categoryName: 'Category A',
        plan: { name: 'Plan 1' },
        wasPayed: true,
      }]

    useListUsersEnroll.mockReturnValue({
      listAllUsers: mockDataEmroll,
      loadingUserList: false,
      nameAsociate: 'Test Association',
      getListUsersEnroll: jest.fn(() => jest.fn())
    });

    const { getByText, getByLabelText, getByRole, getById } = render(
      <BrowserRouter>
        <RecommendationForUser />
      </BrowserRouter>
    );

    expect(getByText(`${mockData.user?.name} ${mockData.user?.lastName}`)).toBeDefined();
    const createRecommendationLink = screen.getByText('Crear Recomendación');
    expect(createRecommendationLink).toBeDefined();
    expect(createRecommendationLink.getAttribute('href')).toBe(`/edit-recommendation/${mockData.user.id}`);

    const recommendationTitle = screen.getByText(mockData.userRecommendations[0].title);
    const recommendationDescription = screen.getByText(mockData.userRecommendations[0].description);
    expect(recommendationTitle).toBeDefined();
    expect(recommendationDescription).toBeDefined();
  });

});
