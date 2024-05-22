import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TrainingTablePlan from '../../../src/pages/MealPlans/Components/TrainingPlan/TrainingTablePlan';
import { useTrainingTablePlan } from '../../../src/pages/MealPlans/Hooks/TrainingPlan/useTrainingTablePlan';

// Mockear hooks y componentes
jest.mock('../../../src/pages/MealPlans/Hooks/TrainingPlan/useTrainingTablePlan');



const mockUseTrainingTablePlan = useTrainingTablePlan;

describe('TrainingTablePlan', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });



  xit('debe mostrar los datos correctamente en la tabla', async () => {
    const mockData = [
      {
        productId: '1',
        name: 'Plan 1',
        picture: 'image1.jpg',
        description: 'Descripción 1',
        plan: { name: 'Plan A', id: 'plan1' },
        category: { id: 'cat1', name: 'Categoría 1' },
        goal : { name: 'Meta 1' }
      }
    ];


    mockUseTrainingTablePlan.mockReturnValue({
      initialData: mockData,
      GetDataAsync: jest.fn(),
      trainingLoading: false,
      error: null,
      handleSubscribe: jest.fn(),
      subscribedUsers: []
    });

    render(
      <MemoryRouter>
        <TrainingTablePlan />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Plan 1'));
      expect(screen.getByText('Meta 1'));
      expect(screen.getByText('Descripción 1'));
      expect(screen.getByText('Plan A'));
    });
  });

  xit('debe manejar la suscripción correctamente', async () => {
    const mockData = [
      {
        productId: '1',
        name: 'Plan 1',
        picture: 'image1.jpg',
        description: 'Descripción 1',
        plan: { name: 'Plan A', id: 'plan1' },
        category: { id: 'cat1', name: 'Categoría 1' },
        goal : { name: 'Meta 1' }
      }
    ];
    const mockHandleSubscribe = jest.fn();

    mockUseTrainingTablePlan.mockReturnValue({
      initialData: mockData,
      GetDataAsync: jest.fn(),
      trainingLoading: false,
      error: null,
      handleSubscribe: mockHandleSubscribe,
      subscribedUsers: []
    });

    sessionStorage.setItem('userLogin', JSON.stringify({ id: 'user1' }));

    render(
      <MemoryRouter>
        <TrainingTablePlan />
      </MemoryRouter>
    );

    await waitFor(() => {
      fireEvent.click(screen.getByText('Suscribirse'));
    });

    expect(mockHandleSubscribe).toHaveBeenCalledWith({
      userId: 'user1',
      userAsociateId: '',
      serviceId: '1',
      serviceName: 'Plan 1',
      description: 'Descripción 1',
      planId: 'plan1',
      categoryId: 'cat1',
      categoryName: 'Categoría 1'
    });
  });
});
