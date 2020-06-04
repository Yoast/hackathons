const path = require('path');

const externals = {
	lodash: "window.lodash",
	"@yoast/components": "window.yoast.compnentsNew"
};

module.exports = {
	entry: './js/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /.svg$/,
				use: [
					{
						loader: "svg-react-loader",
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					'css-loader',
				],
			}
		]
	},
	externals,
};
