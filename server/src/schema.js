const { gql } = require('apollo-server');

const typeDefs = gql`
  "Get tracks array for home grid"
  type Query {
    tracksForHome: [Track!]
  }

  "A Track type is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete Track or Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
