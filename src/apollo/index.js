import { createHttpLink, InMemoryCache } from "@apollo/client/core";

export function getClientOptions() {
  return {
    link: createHttpLink({
      uri: "https://rickandmortyapi.com/graphql",
    }),
    cache: new InMemoryCache(),
  };
}
