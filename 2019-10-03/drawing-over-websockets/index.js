const http = require( 'http' );
const port = 8081;

const requestHandler = ( request, response ) => {
	console.log( request.url );

	switch( request.url ) {
		default:
			response.end( 'Welcome!' );
			break;
	}

};

const server = http.createServer(requestHandler);

server.listen( port, ( err ) => {
	if ( err ) {
		return console.log( 'Uh-oh...', err );
	}

	console.log( `Server is running on ${port}` );
} );
