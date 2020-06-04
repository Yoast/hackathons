const path = require( 'path' );

const config = {
	entry: './src/index.js',

	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	},
	externals: {
		lodash: "window.lodash",
	}
}

module.exports = config;