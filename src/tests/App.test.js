import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('test app', () => {
  renderWithRouter(<App />);

  const getHome = screen.getByRole('link', { name: /Home/i });
  expect(getHome).toBeInTheDocument();

  const getAbout = screen.getByRole('link', { name: /About/i });
  expect(getAbout).toBeInTheDocument();
});

test('test app', () => {
  renderWithRouter(<App />);

  const favoritePageBtn = screen.getByTestId('link-favorite');
  userEvent.click(favoritePageBtn);
});
