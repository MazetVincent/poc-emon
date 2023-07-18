import ApolloClient from 'apollo-boost';
import { DEFAULT_ENDPOINT } from './utils';

const client = new ApolloClient({
    uri: DEFAULT_ENDPOINT
});

export default client;