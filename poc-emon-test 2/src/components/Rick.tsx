import React from 'react';
import styled from 'styled-components';

export const Rick: React.FC = () => (
    <StyledRickWrapper>
        <StyledYTWrapper id="player" src="https://www.youtube.com/embed/o-YBDTqX_ZU" frameBorder="0"/>
    </StyledRickWrapper>
);

const StyledRickWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledYTWrapper = styled.iframe`
  height: 400px;
  max-width: 50%;
  width: 50%;
`;