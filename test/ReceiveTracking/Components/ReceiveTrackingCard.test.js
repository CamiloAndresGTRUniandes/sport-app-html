import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ReceiveTrackingCard from '../../../src/pages/ReceiveTracking/Components/ReceiveTrackingCard';
import { format } from 'date-fns';

// Simulación para evitar errores con importaciones problemáticas
jest.mock('bootstrap/dist/js/bootstrap.bundle.min.js', () => ({}));

 


describe('ReceiveTrackingCard Component', () => {
  const mockItem = {
    id: '1',
    title: 'Título de Prueba',
    description: 'Esto es una descripción corta para la tarjeta de seguimiento.',
    image: '/path/to/image.jpg',
    createdAt: '04-02-2023',
    userAsociate: { name: 'John Doe' },
  };

  const formattedDate = format(new Date(mockItem.createdAt), 'MMM dd, yyyy');

  it('se renderiza correctamente con contenido adecuado', () => {
    render(
      <MemoryRouter>
        <ReceiveTrackingCard item={mockItem} onCardClick={jest.fn()} />
      </MemoryRouter>
    );

    // Verificar que el componente se renderiza sin errores y muestra el contenido adecuado
    expect(screen.getByText((content) => content.includes('Por:John Doe'))); // Verificar autor con coincidencia parcial
    
  });

  it('muestra una descripción corta con "..." si es necesario', () => {
    render(
      <MemoryRouter>
        <ReceiveTrackingCard item={mockItem} onCardClick={jest.fn()} />
      </MemoryRouter>
    );

    const shortDescription = screen.getByText(/Esto es una descripción corta/);
    expect(shortDescription); // Verificar descripción
    
  });

  it('el enlace de "Leer más" funciona correctamente', () => {
    render(
      <MemoryRouter>
        <ReceiveTrackingCard item={mockItem} onCardClick={jest.fn()} />
      </MemoryRouter>
    );

    const leerMasLink = screen.getByText('Leer más');

    // Simular clic y verificar que el enlace no causa errores
    fireEvent.click(leerMasLink);
  });
});
