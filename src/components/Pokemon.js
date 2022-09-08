import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { pokemonType } from '../types';

class Pokemon extends React.Component {
  render() {
    const { pokemon, showDetailsLink, isFavorite } = this.props;
    const { averageWeight, id, image, name, type } = pokemon;
    const { measurementUnit, value } = averageWeight;

    return (
      <div className="pokemon">
        <div className="pokemon-card">
          <div className='first'>
            <header className='header-card'>
              <p data-testid="pokemon-name">{name}</p>
              {isFavorite && (
                <img
                className="favorite-icon"
                src={ `/star-icon.svg` }
                alt={ `${name} is marked as favorite` }
                style={ { height: '2rem' } }
                />
              )}
            </header>
            <img className='img-pokemon' src={ `${image}` } alt={ `${name} sprite` } />
          </div>
          <div className='second'>
            <p data-testid="pokemon-type">{`${type}`}</p>
            <p data-testid="pokemon-weight">
              Average weight: {value} {measurementUnit}
            </p>
            {showDetailsLink && <Link className='link-details' to={ `pokemons/${id}` }>More details</Link>}
          </div>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  pokemon: pokemonType.isRequired,
  showDetailsLink: PropTypes.bool,
};

Pokemon.defaultProps = {
  showDetailsLink: true,
};

export default Pokemon;
