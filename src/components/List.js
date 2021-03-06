import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Detail extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Listado</h1>
        <ul>
          {this.props.pokemons.map(pokemon =>
            <li key={pokemon.id}>
              <Link
                to={`/${pokemon.id}`}
              >
                {pokemon.name}
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Detail;