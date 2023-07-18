import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface SearchProps {
    setSearchQuery: (query: string) => void;
}

export const Search: React.FC<SearchProps> = () => {
    return (
        <StyledSearchContainer>
            SEARCH
        </StyledSearchContainer>
    );
}

const StyledSearchContainer = styled.div`
  
`;