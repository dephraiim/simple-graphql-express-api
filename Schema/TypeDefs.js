const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Users {
    name: String!
    gender: Gender!
    btcAddress: String!
  }

  enum Gender {
    Male
    Female
  }

  # Queries
  type Query {
    getAllUsers: [Users!]!
  }

  # Mutations
  type Mutation {
    createUser(name: String!, gender: Gender!, btcAddress: String!): Users!
  }
`;

module.exports = { typeDefs };
