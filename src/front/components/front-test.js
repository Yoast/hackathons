/**
 * Test frontend component.
 *
 * src/front/components/front-test.js
 */

// Require in the last function from Lodash.
const { last } = require('lodash');

const front = {
	log( message ) {
		console.log( message );
	},
	getLastArrayElement( arr ) {
		return last(arr);
	}
};

module.exports = front;