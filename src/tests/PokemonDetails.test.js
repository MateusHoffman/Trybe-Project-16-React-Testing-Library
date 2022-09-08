import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import pokemons from '../data';

describe('Pokemon', () => {
  const testIdPokemonName = 'pokemon-name';
  const pushPokemonDetails = '/pokemons/25';

  test('Verifica se o H2 Sumario existe e está correto', () => {
    const { history } = renderWithRouter(<App />);
    history.push(pushPokemonDetails);

    const headingSummary = screen.getByRole(
      'heading', { level: 2, name: /Summary/i },
    );
    expect(headingSummary).toBeInTheDocument();
  });

  test('Verifica se o sumario existe e está correto', () => {
    const { history } = renderWithRouter(<App />);
    history.push(pushPokemonDetails);

    const namePokemon = screen.getByTestId(testIdPokemonName).textContent;

    const objPokemon = pokemons.find((e) => e.name === namePokemon);

    const textSummary = screen.getByText(objPokemon.summary);
    expect(textSummary).toBeInTheDocument();
  });

  test('Verifica se o "Game Locations of namePokemon" existe e está correto', () => {
    const { history } = renderWithRouter(<App />);
    history.push(pushPokemonDetails);

    const namePokemon = screen.getByTestId(testIdPokemonName).textContent;

    const headingGameLocations = screen.getByRole(
      'heading', { level: 2, name: /Game Locations of/i },
    );
    expect(headingGameLocations.textContent.includes(namePokemon)).toBe(true);
  });

  test('Verifica se o alt da iamgem do Game Locations existe e está correto', () => {
    const { history } = renderWithRouter(<App />);
    history.push(pushPokemonDetails);

    const namePokemon = screen.getByTestId(testIdPokemonName).textContent;

    const altImgLocation = screen.getAllByRole(
      'img', { name: `${namePokemon} location` },
    );

    expect(altImgLocation[0]).toBeInTheDocument();
  });

  test('Verifica se a imagem do Game Locations existe e está correto', () => {
    const { history } = renderWithRouter(<App />);
    history.push(pushPokemonDetails);

    const namePokemon = screen.getByTestId(testIdPokemonName).textContent;

    const objPokemon = pokemons.find((e) => e.name === namePokemon);

    const altImgLocation = screen.getAllByRole(
      'img', { name: `${namePokemon} location` },
    );

    expect(altImgLocation[0]).toHaveAttribute('src', `${objPokemon.foundAt[0].map}`);
  });

  test('remove favorite', () => {
    const { history } = renderWithRouter(<App />);
    history.push(pushPokemonDetails);

    const favoriteCheck = screen.getByTestId('check-favorite');
    userEvent.click(favoriteCheck);
    userEvent.click(favoriteCheck);
    userEvent.click(favoriteCheck);

    const favoritePageBtn = screen.getByTestId('link-favorite');
    userEvent.click(favoritePageBtn);
  });
});
