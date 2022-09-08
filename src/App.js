import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  readFavoritePokemonIds,
  updateFavoritePokemons,
} from './services/pokedexService';

import pokemons from './data';
import Routes from './routes';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isPokemonFavoriteById: this.setIsPokemonFavoriteById() };
  }

  onUpdateFavoritePokemons(pokemonId, isFavorite) {
    updateFavoritePokemons(pokemonId, isFavorite);

    this.setState(({ isPokemonFavoriteById: this.setIsPokemonFavoriteById() }));
  }

  setIsPokemonFavoriteById() {
    const favoritePokemonIds = readFavoritePokemonIds();
    const isPokemonFavorite = pokemons.reduce((acc, pokemon) => {
      acc[pokemon.id] = favoritePokemonIds.includes(pokemon.id);
      return acc;
    }, {});

    return isPokemonFavorite;
  }

  render() {
    const { isPokemonFavoriteById } = this.state;
    const favoritePokemons = pokemons.filter(({ id }) => isPokemonFavoriteById[id]);

    return (
      <div className="App">
        <header className='header'>
          <Link className="link" to="/">{`HOME`}</Link>
          <Link className="link" to="/about">{`About`}</Link>
          <Link className="link link-favorite" to="/favorites" data-testid="link-favorite">{`Favorite`}</Link>
        </header>
        <Routes
          favoritePokemons={ favoritePokemons }
          pokemons={ pokemons }
          isPokemonFavoriteById={ isPokemonFavoriteById }
          onUpdateFavoritePokemons={
            (pokemonId, checked) => this.onUpdateFavoritePokemons(pokemonId, checked)
          }
        />
      </div>
    );
  }
}

export default App;
