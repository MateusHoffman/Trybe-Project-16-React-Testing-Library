import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from './renderWithRouter';

test('NotFound test', () => {
  renderWithRouter(<NotFound />);

  const getNotFound = screen.getByRole(
    'heading', { level: 2, name: /Page requested not found/i },
  );
  expect(getNotFound).toBeInTheDocument();

  const getNotFoundImg = screen.getByRole(
    'img', { name: /Crying emoji/i },
  );
  expect(getNotFoundImg).toBeInTheDocument();

  const getAltImg = screen.getByRole(
    'img', { name: /Pikachu crying because the page requested was not found/i },
  );
  expect(getAltImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
