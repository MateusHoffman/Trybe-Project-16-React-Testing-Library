import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from './renderWithRouter';

test('favorite test', () => {
  renderWithRouter(<FavoritePokemons />);

  const getNoFavorite = screen.getByText(/No favorite pokemon found/i);
  expect(getNoFavorite).toBeInTheDocument();
});
