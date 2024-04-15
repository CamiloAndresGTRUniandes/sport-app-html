import React from 'react';
import { render } from '@testing-library/react';
import { SpinnerSportApp } from '../../src/pages/Utils/SpinnerSportApp';

describe('SpinnerSportApp', () => {
  it('renders correctly', () => {
    const { container } = render(<SpinnerSportApp />);
    const spinnerElement = container.querySelector('.spinner-border');
    expect(spinnerElement).toBeDefined();
  });
});
