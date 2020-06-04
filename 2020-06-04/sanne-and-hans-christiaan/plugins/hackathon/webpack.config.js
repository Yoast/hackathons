const path = require( "path" );

module.exports = {
	entry: "./assets/src/index.js",
	output: {
		path: path.resolve( __dirname, "assets/build/js" ),
		filename: "hackathon.js"
	},
	externals: {
		"@wordpress/data": "window.wp.data",
		lodash: "window.lodash",
		"@wordpress/i18n": "window.wp.i18n",
	}
};
