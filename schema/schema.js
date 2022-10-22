const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSting,
  GraphQLInt
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLSting },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { GraphQLString } },
      resolve(parentValue, args) {
        
      }
    }
  }
});