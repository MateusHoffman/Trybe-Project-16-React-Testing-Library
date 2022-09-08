import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

test('É exibido o próximo pokémon quando o botão Próximo pokémon é clicado?', () => {
  renderWithRouter(<App />);

  const getPikachu = screen.getByRole('img', { name: /Pikachu sprite/i });
  expect(getPikachu).toBeInTheDocument();

  const getBtnNextPokemon = screen.getByRole('button', { name: /Próximo pokémon/i });
  expect(getBtnNextPokemon).toBeInTheDocument();

  userEvent.click(getBtnNextPokemon);

  const getCharmander = screen.getByRole('img', { name: /Charmander sprite/i });
  expect(getCharmander).toBeInTheDocument();

  userEvent.click(getBtnNextPokemon);
  userEvent.click(getBtnNextPokemon);
  userEvent.click(getBtnNextPokemon);
  userEvent.click(getBtnNextPokemon);
  userEvent.click(getBtnNextPokemon);
  userEvent.click(getBtnNextPokemon);
  userEvent.click(getBtnNextPokemon);

  const getDragonair = screen.getByRole('img', { name: /Dragonair sprite/i });
  expect(getDragonair).toBeInTheDocument();

  userEvent.click(getBtnNextPokemon);

  const getPikachuInitial = screen.getByRole('img', { name: /Pikachu sprite/i });
  expect(getPikachuInitial).toBeInTheDocument();
});

test('O botão deve conter o texto Próximo pokémon', () => {
  renderWithRouter(<App />);

  const getBtnNextPokemon = screen.getByRole('button', { name: /Próximo pokémon/i });
  expect(getBtnNextPokemon).toHaveTextContent('Próximo pokémon');
});

test('Teste se é mostrado apenas um pokémon por vez', () => {
  renderWithRouter(<App />);

  const getOnlyOneImg = screen.getAllByRole('img');
  expect(getOnlyOneImg.length).toBe(1);
});

test('Deve existir um btn de filtragem para cada tipo de pokémon, sem repetição', () => {
  const QUANTITY_TYPES = 7;
  renderWithRouter(<App />);

  const getBtnsTypes = screen.getAllByTestId('pokemon-type-button');
  expect(getBtnsTypes.length).toBe(QUANTITY_TYPES);
});

test('Selecionou um tipo, apenas circular somente pelos pokémons daquele tipo', () => {
  renderWithRouter(<App />);

  const getTypeFire = screen.getByRole('button', { name: /Fire/i });
  expect(getTypeFire).toBeInTheDocument();

  userEvent.click(getTypeFire);

  const getCharmander = screen.getByRole('img', { name: /Charmander sprite/i });
  expect(getCharmander).toBeInTheDocument();

  const getBtnNextPokemon = screen.getByRole('button', { name: /Próximo pokémon/i });
  expect(getBtnNextPokemon).toBeInTheDocument();

  userEvent.click(getBtnNextPokemon);

  const getRapidash = screen.getByRole('img', { name: /Rapidash sprite/i });
  expect(getRapidash).toBeInTheDocument();
});

test('O texto do botão deve corresponder ao nome do tipo', () => {
  renderWithRouter(<App />);

  const getBtnElectric = screen.getAllByRole('button');
  expect(getBtnElectric[1]).toHaveTextContent('Electric');

  const getBtnBug = screen.getAllByRole('button');
  expect(getBtnBug[3]).toHaveTextContent('Bug');
});

test('O botão All precisa estar sempre visível', () => {
  renderWithRouter(<App />);

  const getBtnAll = screen.getByRole('button', { name: /all/i });
  expect(getBtnAll).toBeInTheDocument();
});

test('Mostra normalmente (sem filtros) quando o botão All for clicado', () => {
  renderWithRouter(<App />);

  const getBtnAll = screen.getByRole('button', { name: /all/i });
  expect(getBtnAll).toHaveTextContent('All');
  expect(getBtnAll).toBeInTheDocument();

  userEvent.click(getBtnAll);

  const getPikachu = screen.getByRole('img', { name: /Pikachu sprite/i });
  expect(getPikachu).toBeInTheDocument();

  const getBtnNextPokemon = screen.getByRole('button', { name: /Próximo pokémon/i });
  expect(getBtnNextPokemon).toBeInTheDocument();

  userEvent.click(getBtnNextPokemon);

  const getCharmander = screen.getByRole('img', { name: /Charmander sprite/i });
  expect(getCharmander).toBeInTheDocument();

  userEvent.click(getBtnNextPokemon);
  userEvent.click(getBtnNextPokemon);
  userEvent.click(getBtnNextPokemon);
  userEvent.click(getBtnNextPokemon);
  userEvent.click(getBtnNextPokemon);
  userEvent.click(getBtnNextPokemon);
  userEvent.click(getBtnNextPokemon);

  const getDragonair = screen.getByRole('img', { name: /Dragonair sprite/i });
  expect(getDragonair).toBeInTheDocument();
});
