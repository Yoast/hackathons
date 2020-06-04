const path = require('path');

module.exports = {
	entry: './assets/src/index.js',
	output: {
		path: path.resolve(__dirname, 'assets/build/js'),
		filename: 'hackathon.js'
	}
};
