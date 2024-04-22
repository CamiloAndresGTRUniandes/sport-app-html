import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import RecommendationPage from '../Pages/RecommendationPage';
import useRecommendation from '../Hooks/useRecommendation';

// Simulación del hook useRecommendation
jest.mock('../Hooks/useRecommendation', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('RecommendationPage Tests', () => {
  beforeEach(() => {
    // Simulación de los datos del hook
    useRecommendation.mockReturnValue({
      recommendation: [
        { id: 1, name: 'Recomendación 1' },
        { id: 2, name: 'Recomendación 2' },
      ],
      hover: 0,
      setHover: jest.fn(),
      totalPages: 2,
      loading: false,
    });
  });

  test('should render RecommendationPage with correct elements', () => {
    render(
      <BrowserRouter>
        <RecommendationPage />
      </BrowserRouter>
    );

    // Verificar si los elementos básicos están presentes
    expect(screen.getByText('Tus Recomendaciones')).toBeInTheDocument();
    expect(screen.getByText('Recomendaciones')).toBeInTheDocument();
    expect(screen.getAllByText(/Recomendación/).length).toBe(2); // Dos recomendaciones
  });

  test('should call setHover with the correct page on pagination click', () => {
    const { getByText } = render(
      <BrowserRouter>
        <RecommendationPage />
      </BrowserRouter>
    );

    const setHover = useRecommendation().setHover;

    // Simular clic en el segundo elemento de paginación
    const paginationItem = getByText('2');
    fireEvent.click(paginationItem);

    // Verificar que se llamó a setHover con el número de página correcto
    expect(setHover).toHaveBeenCalledWith(1); // Páginas son cero-indexed
  });

  test('should display SpinnerSportApp when loading is true', () => {
    useRecommendation.mockReturnValue({
      recommendation: [],
      hover: 0,
      setHover: jest.fn(),
      totalPages: 0,
      loading: true, // loading está en verdadero
    });

    render(
      <BrowserRouter>
        <RecommendationPage />
      </BrowserRouter>
    );

    // Verificar si el spinner está presente cuando loading es true
    expect(screen.getByText(/Spinner/)).toBeInTheDocument(); // Supuesto texto del Spinner
  });
});
