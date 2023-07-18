import React from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-apollo';
import { GET_POKEMON_DETAILS } from '../utils';
import { Loading, Error } from '../components';
import pokeball from '../asset/pokeball.png';

export const Pokemon: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const pokemonName = searchParams.get('name');
    const pokemonImage = searchParams.get('image');
    const { t } = useTranslation();

    const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
        variables: {
            name: pokemonName
        }
    });
    const { id, name, types, abilities } = data?.pokemon || {};
    console.log(data?.pokemon);

    if(loading) return (<Loading />);

    return (
        <StyledPokemonWrapper>
            <StyledPokemonItemWrapper>
                {name && <span>{name}</span>}
                {pokemonImage && <img src={pokemonImage} alt={`${name} pokemon image`}/>}
                {id && <span>{`pokemon index: ${id}`}</span>}
            </StyledPokemonItemWrapper>
        </StyledPokemonWrapper>
    );
}

const StyledPokemonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  > button {
    display: flex;
    align-items: center;
  }
  & img {
    width: 25px;
  }
`;

const StyledPokemonItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #000000;
  border-radius: 25px;
  width: 250px;
  padding: 20px;
  justify-content: center;
  font-weight: bold;
  font-size: 36px;
  line-height: normal;
  > img {
    width: 200px;
    align-self: center;
  }
  > span:last-child {
    align-self: flex-end;
    font-weight: normal;
    font-size: 20px;
  }
`;
