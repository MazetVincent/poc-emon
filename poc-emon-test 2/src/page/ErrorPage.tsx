import React from 'react';
import styled from 'styled-components';
import { useRouteError, useNavigate } from 'react-router-dom';
import sadPika from '../asset/sad-pikachu.jpeg';
import pokeball from '../asset/pokeball.png';

import { ErrorRouteMessage } from '../utils';
import {useTranslation} from "react-i18next";

export const ErrorPage: React.FC = () => {
    const { status, statusText, data, error } = useRouteError() as ErrorRouteMessage;
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <StyledErrorPageWrapper>
            <h1>{t('oops')}</h1>
            <span>{t('unexpected')}</span>
            <img src={sadPika} alt="crying pikachu image"/>
            <i>{`${status} ${statusText} - ${data || error}`}</i>
            <button onClick={() => navigate('/')}>
                {t('back')}
                <img src={pokeball} alt='pokeball icon'/>
            </button>
        </StyledErrorPageWrapper>
    );
};

const StyledErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 40px;
  > h1 {
    font-size: 60px;
  }
  > img {
    max-height: 500px;
  }
  > span {
    margin: 0;
    color: grey;
    font-size: 34px;
  }
  > i {
    font-size: 20px;
    color: red;
  }
  > button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    > img {
      height: 30px;
    }
  }
`;

