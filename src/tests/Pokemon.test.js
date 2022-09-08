import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import pokemons from '../data';

describe('Pokemon', () => {
  const testIdPokemonName = 'pokemon-name';
  test('Teste se é renderizado a img com o alt de acordo com o nome do pokemon', () => {
    renderWithRouter(<App />);

    const namePokemon = screen.getByTestId(testIdPokemonName).textContent;
    const imgPokemon = screen.getByRole('img', { name: `${namePokemon} sprite` });
    expect(imgPokemon).toBeInTheDocument();
  });

  test('Verifica se o pokemon está favoritado e com a estrela', () => {
    renderWithRouter(<App />);

    const linkMoreDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(linkMoreDetails);

    const checkboxFavorite = screen.getByRole('checkbox');
    userEvent.click(checkboxFavorite);

    const linkHome = screen.getByRole('link', { name: /Home/i });
    userEvent.click(linkHome);

    const namePokemon = screen.getByTestId(testIdPokemonName).textContent;
    const markedFavorite = screen.getByRole(
      'img', { name: `${namePokemon} is marked as favorite` },
    );
    expect(markedFavorite).toBeInTheDocument();

    const markedFavorite2 = screen.getByRole(
      'img', { name: `${namePokemon} is marked as favorite` },
    );
    expect(markedFavorite2).toHaveAttribute('src', '/star-icon.svg');
  });

  test('Verifica se o tipo do pokemon é mostrado', () => {
    renderWithRouter(<App />);

    const namePokemon = screen.getByTestId(testIdPokemonName).textContent;

    const objPokemon = pokemons.find((e) => e.name === namePokemon);

    const typePokemon = screen.getByTestId('pokemon-type').textContent;
    expect(typePokemon).toBe(objPokemon.type);
  });

  test('Verifica se a imagem do pokemon é mostrado corretamente', () => {
    renderWithRouter(<App />);

    const namePokemon = screen.getByTestId(testIdPokemonName).textContent;

    const objPokemon = pokemons.find((e) => e.name === namePokemon);

    const imgPokemon = screen.getByRole('img', { name: `${namePokemon} sprite` });
    expect(imgPokemon).toHaveAttribute('src', `${objPokemon.image}`);
  });
});
