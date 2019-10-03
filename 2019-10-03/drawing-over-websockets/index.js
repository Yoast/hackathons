const express = require( 'express' );
const path = require( 'path' );

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', ( request, response ) => {
	response.sendFile(path.join(__dirname + '/index.html'));
} );

// Handle 404
app.use(function(request, response) {
	response.sendFile(path.join(__dirname + '/404.html'));
});

// Handle 500
app.use(function(error, request, response, next) {
	response.send('500: Internal Server Error', 500);
});

app.listen( 8081 );
