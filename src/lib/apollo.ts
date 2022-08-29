import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl7f2wyfv6fe401um14fl8k39/master",
  cache: new InMemoryCache(),
});
