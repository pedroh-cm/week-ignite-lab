import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ng6jrq03l401z02h9u6l5z/master",
  cache: new InMemoryCache()
})