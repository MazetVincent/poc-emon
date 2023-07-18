import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../utils';

interface PokemonListProps {
    pokemonList?: Pokemon[];
}

export const PokemonList: React.FC<PokemonListProps> = ({ pokemonList }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const onClick = (name: string, imageUrl: string) => navigate(`/pokemon?name=${name}&image=${imageUrl}`);

    if(!pokemonList) return (
        <StyledNoResultWrapper>
            {t('noResult')}
        </StyledNoResultWrapper>
    );

    return (<StyledPokemonListWrapper>
        {pokemonList?.map(({ name, image, url }) => (
            <StyledPokemonItem key={`pokemon-list-item-${name}`} onClick={() => onClick(name, image)}>
                <span>{name}</span>
                <img alt={url} src={image} />
            </StyledPokemonItem>
        ))}
    </StyledPokemonListWrapper>);
}

const StyledNoResultWrapper = styled.div`
  
`;

const StyledPokemonListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 20px;
`;

const StyledPokemonItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 20%;
  border: 1px solid #000000;
  justify-content: center;
  padding: 20px;
  border-radius: 25px;
`;