import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import client from '../src/clients';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { ErrorPage, Pokemon } from "./page";
import {Header, Rick} from "./components";
import pokemonLogo from "./asset/pixel-pokemon.png";
import styled from "styled-components";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/pokemon",
        element: <Pokemon />
    },
    {
        path: "/rick",
        element: <Rick />
    }
]);

const StyledImg = styled.img`
  max-width: 1000px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Header />
            <StyledImg src={pokemonLogo} alt="Pokemon logo"/>
            <RouterProvider router={router} />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);