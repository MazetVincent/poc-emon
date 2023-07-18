import React, { useState } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-apollo';
import { PokemonList, Loading } from './components';
import { GET_POKEMONS } from './utils';
import styled from "styled-components";
import './i18n';

const ErrorMessage = () => (
    <div>
        Something got wrong
    </div>
)

function App() {
  const { t } = useTranslation();
  const [ searchQuery, setSearchQuery ] = useState<string | undefined>(undefined);
  const { loading, error, data } = useQuery(GET_POKEMONS);

  return (
      <StyledAppWrapper>
          <h1>{t('welcome')}</h1>
          {/*<Search setSearchQuery={setSearchQuery} />*/}
          {error && <ErrorMessage />}
          {loading && <Loading />}
          <PokemonList pokemonList={data?.pokemons?.results}/>
      </StyledAppWrapper>
  );
}

const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
