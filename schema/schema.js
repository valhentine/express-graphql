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