import React from "react";
import styled from 'styled-components';
import pokeball from "../../asset/pokeball.png";
import { spinAndWidthAnimation } from "../../utils";
import { useTranslation } from "react-i18next";

export const Loading: React.FC = () => {
    const { t } = useTranslation()
    return (
        <StyledLoadingWrapper>
            <span>{t('loading')}</span>
            <img src={pokeball} alt="pokemon loading logo"/>
        </StyledLoadingWrapper>
    )
}

const StyledLoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    animation: ${spinAndWidthAnimation} infinite 1500ms linear;
  }
`;