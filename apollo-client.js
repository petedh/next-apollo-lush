import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://twstg2.eu.saleor.cloud/graphql/",
    cache: new InMemoryCache(),
});

export default client;

/*{
  products(channel: "uk", first: 10) {
    edges {
      cursor
      node {
        id
      }
    }
  }

  product(channel: "uk", id: "UHJvZHVjdDoxMzg=") {
    name
  }
}
*/