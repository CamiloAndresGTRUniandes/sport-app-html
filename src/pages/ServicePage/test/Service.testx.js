import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Services from '../Pages/Service';

describe('Services component', () => {
  it('renders service cards correctly', () => {
    render(
      <Router>
        <Services />
      </Router>
    );

    // Verificar que el título "Servicios" esté presente
    expect(screen.getByText('ServiciosNew')).toBeInTheDocument();


  });
});
