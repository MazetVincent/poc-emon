import { gql } from 'apollo-boost';
import {keyframes} from "styled-components";

export interface Pokemon {
    url: string;
    name: string;
    image: string;
}

export interface ErrorRouteMessage {
    status: number;
    statusText: string;
    internal: boolean;
    data: string;
    error: string;
}

export const DEFAULT_ENDPOINT = 'https://graphql-pokeapi.graphcdn.app/';

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

export const GET_POKEMON_DETAILS = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      message
      status
    }
  }
`

export const gqlPokemonVariables = {
    limit: 2,
    offset: 1,
};

export const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const spinAndWidthAnimation = keyframes`
  from {
    transform:rotate(0deg);
    width: 350px;
  }
  50% {
    width: 500px;
  }
  to {
    transform:rotate(360deg);
    width: 350px;
  }
`;
