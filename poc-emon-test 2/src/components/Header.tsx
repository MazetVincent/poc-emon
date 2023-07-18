import React from 'react';
import styled from 'styled-components';
import pokeball from '../asset/pokeball.png';
import { spinAnimation } from '../utils';
import { useNavigate } from 'react-router-dom';

export const Header:React.FC = () => {
    //const navigate = useNavigate();
    const onClick = () => {
        //console.log()
    }

    return (
        <StyledHeaderWrapper>
            <img src={pokeball} alt="pokeball icon"/>
            <div>
                <input placeholder="you'r query here" />
                <button onClick={() => onClick()} >
                    Click me !
                </button>
            </div>
        </StyledHeaderWrapper>
    );
}

const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  background: #323232;
  align-items: center;
  justify-content: left;
  color: #FFFFFF;
  padding: 0 20px;
  gap: 20px;
  box-shadow: blue;
  width: 100%;
  
  > img {
    max-height: 35px;
    animation: ${spinAnimation} infinite 20s linear;
  }
  
  > input {
    width: 30%;
    height: 25px;
    border: 1px solid #323232;
    border-radius: 5px;
  }
`;
