import fetch from "cross-fetch"
import { ApolloClient, InMemoryCache, HttpLink, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { AUTH_TOKEN } from "../constants";

/*export const client = new ApolloClient({
    link: new HttpLink({
        uri: "https://api.sushihiro.kz/graphql",
        fetch,
    }),
    cache: new InMemoryCache(),
})*/


const httpLink = createHttpLink({
    uri: "https://api.sushihiro.kz/graphql",
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem(AUTH_TOKEN);
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    };
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});
