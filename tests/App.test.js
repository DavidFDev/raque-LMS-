import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';

test('renders home page by default', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Verify that the home page content is rendered
  const homeHeading = screen.getByRole('heading', { name: /welcome to our website/i });
  expect(homeHeading).toBeInTheDocument();
});

test('navigates to login page', () => {
  render(
    <BrowserRouter initialEntries={['/login']}>
      <App />
    </BrowserRouter>
  );

  // Verify that the login page content is rendered
  const loginHeading = screen.getByRole('heading', { name: /login/i });
  expect(loginHeading).toBeInTheDocument();
});

// Add more tests for other routes and components as needed
