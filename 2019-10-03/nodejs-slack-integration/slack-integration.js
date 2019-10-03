const { WebClient } = require('@slack/web-api');
const express = require('express');
const request = require('request');

// This is Bob's access token.
const token = "";
const web = new WebClient( token );
const channelID = "";

// Instantiates Express and assigns our app variable to it
var slackIntegration = express();

// Hello world.
slackIntegration.get('/', ( req, res) => {
	res.send( 'Hello world nerds for de\n' );
});

// Again, we define a port we want to listen to
const PORT=8080;

// Lets start our server
slackIntegration.listen( PORT, function () {
	//Callback triggered when server is successfully listening. Hurray!
	console.log( "The slack integration app listening on port " + PORT );
});

// Route the endpoint that our slash cool will point to and send back a simple response to indicate that ngrok is working
slackIntegration.post('/exists', function( req, res ) {
	console.log( req );
	res.send( 'This is the result of your slash command.' );
} );

console.log( 'Getting started with Node Slack SDK' );
