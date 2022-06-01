import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Birds Lost in Music', () => {
  render(<App />);
  const linkElement = screen.getByText(/Birds Lost in Music/i);
  expect(linkElement).toBeInTheDocument();
});
