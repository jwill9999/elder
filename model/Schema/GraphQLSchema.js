const graphql = require('graphql');
const {  
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull } = graphql;

// const Question = require('./QuestionSchema');

// TODO: add graphql schema
// In the schema folder we create GraphQLObjectType's which contain

const BookType = new GraphQLObjectType({
    name: 'Question',
    fields: ( ) => ({
  
    })
});




// Add Root query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        
        }
    
});


// Add mutations if required

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        
    }
});

// exports

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});