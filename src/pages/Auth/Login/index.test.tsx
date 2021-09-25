import React from 'react';
import { render, screen } from '@testing-library/react';
import { Login } from './index';

test('renders learn react link', () => {
    render(<Login />);
    const linkElement = screen.getByText('Page Login');
    expect(linkElement).toBeInTheDocument();
});
