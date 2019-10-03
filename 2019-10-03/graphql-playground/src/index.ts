import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";
import { Grave } from "./models/Grave";
import { Person } from "./models/Person";

let diede: Person = { robbing: null, name: "diede" };
let grave: Grave = { deadperson: diede, place: "here", tombstone: { name: "here lies diede" } };
let bob: Person = { name: "bob", robbing: grave };
let andy: Person = { robbing: null, name: "andy" };
let daniel: Person = { robbing: null, name: "daniel" };

let fakeDatabase: { graves: Grave[], people: Person[] } = {
	graves: [ grave ],
	people: [ diede, bob, andy, daniel ],
};

let schema = buildSchema( `
  type Query {
  	grave(value:String): Grave
  	person(value:String): Person
  	
  	graves: [Grave]
  	people: [Person]
  }
  
  type Person {
  	name: String
  	robbing: Grave
  }
  
  type Grave {
  	tombstone: Tombstone
  	deadperson: Person!
  }
  
  type Tombstone {
    name: String
    dateOfBirth: String
    dateOfDeath: String
  }
  
  type Mutation {
  	robGrave(robberName: String!, graveName: String!): Grave
  	goHome(robberName: String!): Person
  }
` );

function findBy( entityName, property ) {
	return ( value ) => {
		console.log( value, fakeDatabase[ entityName ] );
		return fakeDatabase[ entityName ].find( ( entity ) => entity[ property ] = value );
	}
}

function getGraves(): Grave[] {
	return fakeDatabase.graves;
}

function getPeople(): Person[] {
	return fakeDatabase.people;
}

function robGrave( { robberName, graveName } ): Grave {
	const grave = fakeDatabase.graves.find( ( grave: Grave ) => grave.deadperson.name = graveName );
	fakeDatabase.people.find( ( person: Person ) => person.name === robberName ).robbing = grave;
	return grave;
}

function goHome( { robberName } ): Person {
	const person = fakeDatabase.people.find( ( person: Person ) => person.name === robberName );
	person.robbing = null;
	return person;
}

var root = {
	graves: getGraves,
	graveByPlace: findBy('graves', 'place'),
	personByName: findBy('graves', 'name'),
	people: getPeople,
	robGrave: robGrave,
	goHome: goHome,
};

var app = express();
app.use( "/graphql", graphqlHTTP( {
	schema: schema,
	rootValue: root,
	graphiql: true,
} ) );

app.listen( 3001, () => console.log( "Now browse to localhost:3001/graphql" ) );
