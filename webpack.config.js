const path = require('path');

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, 'src') + '/index.js',
	output: {
		filename: 'ei-to-ij.min.js',
		path: path.resolve(__dirname, 'dist'),
	},
	externals: {
		lodash : 'lodash',
		"@wordpress/i18n": 'window.wp.i18n',
		"@wordpress/element": 'window.wp.element',
		"yoast-components": "window.wp.components",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	}
};
