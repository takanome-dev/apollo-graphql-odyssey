const { gql } = require('apollo-server');

const typeDefs = gql`
  "Get tracks array for home grid"
  type Query {
    tracksForHome: [Track!]
    track(id: ID!): Track
  }

  "A Track type is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    modules: [Module!]!
  }

  "Author of a complete Track or Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    title: String
    length: Int
  }
`;

module.exports = typeDefs;
