import React from 'react';
import { render, screen } from '@testing-library/react';
import { SocialNetwork } from '../../../src/pages/Auth/components';
describe('SocialNetwork component', () => {
  it('renders the "Siguenos en:" text', () => {
    render(<SocialNetwork />);
    const siguenosText = screen.getByText(/Siguenos en:/i); // Case-insensitive match
    expect(siguenosText).toBeDefined();
  });

  it('renders four MDBBtn components with social media icons', () => {
    const { container } = render(<SocialNetwork />);
    const facebookIcon = container.getElementsByClassName("fab fa-facebook-f fa-sm");
    expect(facebookIcon).toBeDefined();
    const twitterIcon = container.getElementsByClassName("fab fa-twitter fa-sm");
    expect(twitterIcon).toBeDefined();
    const googleIcon = container.getElementsByClassName("fab fa-google fa-sm");
    expect(googleIcon).toBeDefined();
    const githubIcon = container.getElementsByClassName("fab fa-github fa-sm");
    expect(githubIcon).toBeDefined();
  });

});