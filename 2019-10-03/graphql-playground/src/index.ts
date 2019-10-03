import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";
// var graphqlHTTP = require('express-graphql');
// var { buildSchema } = require('graphql');

var schema = buildSchema( `
  type Query {
    hello: String
  }
` );

var root = { hello: () => "Hello world!" };

var app = express();
app.use( "/graphql", graphqlHTTP( {
	schema: schema,
	rootValue: root,
	graphiql: true,
} ) );
app.listen( 3001, () => console.log( "Now browse to localhost:3001/graphql" ) );
