const users = require("../fakedata.json");

const resolvers = {
  Query: {
    getAllUsers() {
      return users;
    },
  },

  Mutation: {
    createUser(_: any, args: any) {
      const newUser = args;
      users.push(newUser);
      return newUser;
    },
  },
};

export { resolvers };
