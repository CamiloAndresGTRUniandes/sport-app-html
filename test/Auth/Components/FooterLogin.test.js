import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { FooterLogin } from '../../../src/pages/Auth/components';


describe('FooterLogin component', () => {
  it('renders the registration link with correct text and href', () => {
    render(<MemoryRouter>
      <FooterLogin />
    </MemoryRouter>);

     const registerLink = screen.getByRole('link', { name: /Registrarse aquí/i }); // Case-insensitive match
     expect(registerLink).toBeDefined();
     expect(registerLink.getAttribute('href')).toBe('/register');
  });

  it('renders the Terms of Use and Privacy Policy links with correct text and href', () => {
    render(
      <MemoryRouter>
        <FooterLogin />
      </MemoryRouter>
    );

     const termsLink = screen.getByText(/Términos de uso/i); // Case-insensitive match
     expect(termsLink).toBeDefined();
      expect(termsLink.getAttribute('href')).toBe('#!');

      const privacyLink = screen.getByText(/Política de privacidad/i); // Case-insensitive match
      expect(privacyLink).toBeDefined();
      expect(privacyLink.getAttribute('href')).toBe('#!');
     });


});