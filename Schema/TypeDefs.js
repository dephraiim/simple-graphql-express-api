const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Users {
    name: String!
    gender: Gender!
    btcAddress: String!
  }

  enum Gender {
    male
    female
  }

  # Queries
  type Query {
    getAllUsers: [Users!]!
  }

  # Mutations
`;

module.exports = typeDefs;
