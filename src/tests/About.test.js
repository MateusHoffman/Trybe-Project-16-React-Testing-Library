import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from './renderWithRouter';

test('about test', () => {
  renderWithRouter(<About />);

  const getAboutPokedex = screen.getByRole(
    'heading', { level: 2, name: /About Pokédex/i },
  );
  expect(getAboutPokedex).toBeInTheDocument();

  const getImgBulba = screen.getByRole(
    'img', { name: /Pokédex/i },
  );
  expect(getImgBulba).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
