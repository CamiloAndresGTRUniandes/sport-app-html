import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PricingCard from '../../../src/pages/Subscriptions/Components/PricingCard';
import { usePricingCard } from '../../../src/pages/Subscriptions/Hooks/usePricingCard';

// Mock the usePricingCard hook
jest.mock('../../../src/pages/Subscriptions/Hooks/usePricingCard');

const mockPricingBlog = [
    {
        id: 1,
        name: 'Basic',
        price: 0,
    },
    {
        id: 2,
        name: 'Intermediate',
        price: 20,
    },
    {
        id: 3,
        name: 'Premium',
        price: 50,
    }
];

describe('PricingCard', () => {
    beforeEach(() => {
        usePricingCard.mockReturnValue({
            GetDataAsync: jest.fn(),
            pricingBlog: mockPricingBlog
        });
    });

    test('renders the PricingCard component', () => {
        render(
            <Router>
                <PricingCard />
            </Router>
        );

        // Check if the pricing plans are rendered
        expect(screen.getByText('Basic'));
        expect(screen.getByText('Intermediate'));
        expect(screen.getByText('Premium'));
    });

    test('renders price correctly', () => {
        render(
            <Router>
                <PricingCard />
            </Router>
        );

        // Check if the prices are rendered correctly
        expect(screen.getByText('Free'));
        expect(screen.getByText('$20'));
        expect(screen.getByText('$50'));
    });

    

   
});
