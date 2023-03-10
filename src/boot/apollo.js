import { ApolloClient /* , createHttpLink */ } from "@apollo/client/core";
import { ApolloClients, provideApolloClient } from "@vue/apollo-composable";
import { boot } from "quasar/wrappers";
import { getClientOptions } from "src/apollo";

export default boot(({ app }) => {
  const options = getClientOptions();
  const apolloClient = new ApolloClient(options);

  const apolloClients = {
    default: apolloClient,
  };

  app.provide(ApolloClients, apolloClients);
  provideApolloClient(apolloClient);
});
