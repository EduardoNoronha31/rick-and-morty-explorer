import gql from "graphql-tag";

export const ALL_CHARACTERS = gql`
  query {
    characters {
      info {
        pages
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export const CHARACTER = gql`
  query ($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      episode {
        id
        name
        air_date
        episode
      }
      location {
        id
        name
      }
      created
    }
  }
`;
