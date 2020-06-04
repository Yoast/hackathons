const path = require( "path" );

module.exports = {
	entry: "./assets/src/index.js",
	output: {
		path: path.resolve( __dirname, "assets/build/js" ),
		filename: "hackathon.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [ "babel-loader" ]
			},
			{
				test: /\.css$/,
				use: [ "style-loader", "css-loader" ]
			}
		]
	},
	externals: {
		"@yoast/components": "window.yoast.componentsNew",
		"@wordpress/data": "window.wp.data",
		lodash: "window.lodash",
		react: "window.React",
		"react-dom": "window.ReactDOM"
	}
};
