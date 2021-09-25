import React from 'react';
import { render, screen } from '@testing-library/react';
import { Register } from './index';

test('renders learn react link', () => {
    render(<Register />);
    const linkElement = screen.getByText('Page Register');
    expect(linkElement).toBeInTheDocument();
});
