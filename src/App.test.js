import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders hero section', () => {
  render(<App />);
  const heroText = screen.getByText(/Bienvenido/i);
  expect(heroText).toBeInTheDocument();
});

test('Renders footer', () => {
  render(<App />);
  const footer = screen.getByText(/Coding Academy/i);
  expect(footer).toBeInTheDocument();
})