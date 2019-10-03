let socket = new WebSocket( 'wss://localhost:8081' );

function setup() {
	const canvas = createCanvas(800, 600);
	canvas.position(600,100);
	canvas.background('#fff');

	socket.addEventListener( 'open', function( event ) {
		socket.send( 'Hey there, server!' );
	} );

	socket.addEventListener( 'message', function( event ) {
		// event.data contains the new point!


		const data = event.data;

		//	line(data.x, data.y, data.px, data.py);


	} );
}

function mouseDragged() {
	stroke('#000000');
	strokeWeight(4);
	line(mouseX, mouseY, pmouseX, pmouseY);
	sendmouse(mouseX, mouseY, pmouseX, pmouseY);
}

function sendmouse(x, y, pX, pY) {
	const data = {
		type: 'mouseClick',
		data: {
			x: x,
			y: y,
			px: pX,
			py: pY,
			color: '#00000'
		}
	}

	socket.send( JSON.stringify( data ) );
}
