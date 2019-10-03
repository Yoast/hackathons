const express = require( 'express' );

const app = express();

app.use( express.static( 'public' ) );

app.get('/', ( request, response ) => {
	response.send( 'Hello' );
} );

// Handle 404
app.use(function(req, res) {
	res.send('404: Not Found', 404);

});

// Handle 500
app.use(function(error, req, res, next) {
	res.send('500: Internal Server Error', 500);
});

app.listen( 8081 );
