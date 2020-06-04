// Require path.
const path = require( 'path' );

// Configuration object.
const config = {
	// Create the entry points.
	// One for frontend and one for the admin area.
	entry: {
		// frontend and admin will replace the [name] portion of the output config below.
		frontend: './src/front/front-index.js',
		admin: './src/admin/admin-index.js'
	},

	// Create the output files.
	// One for each of our entry points.
	output: {
		// [name] allows for the entry object keys to be used as file names.
		filename: 'js/[name].js',
		// Specify the path to the JS files.
		path: path.resolve( __dirname, 'assets' )
	},

	externals: {
		'@wordpress/a11y': 'wp.a11y',
		'@wordpress/components': 'wp.components', // Not really a package.
		'@wordpress/blocks': 'wp.blocks', // Not really a package.
		'@wordpress/data': 'wp.data', // Not really a package.
		'@wordpress/date': 'wp.date', // Not really a package.
		'@wordpress/element': 'wp.element', // Not really a package.
		'@wordpress/hooks': 'wp.hooks',
		'@wordpress/i18n': 'wp.i18n',
		'@wordpress/utils': 'wp.utils', // Not really a package
	},

	// Setup a loader to transpile down the latest and great JavaScript so older browsers
	// can understand it.
	module: {
		rules: [
			{
				// Look for any .js files.
				test: /\.js$/,
				// Exclude the node_modules folder.
				exclude: /node_modules/,
				// Use babel loader to transpile the JS files.
				loader: 'babel-loader'
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		]
	}
}

// Export the config object.
module.exports = config;
