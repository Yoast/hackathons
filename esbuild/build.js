const path = require( "path" );

const { build } = require( "esbuild" );
const mapValues = require( "lodash/mapValues" );
const isString = require( "lodash/isString" );

const paths = require( "./paths" );

const root = path.join( __dirname, "../" );
const mainEntry = mapValues( paths.entry, entry => {
	if ( !isString( entry ) ) {
		return entry;
	}

	return path.join( "./", "js/src/", entry );
} );

const externals = {
	// This is necessary for Gutenberg to work.
	"tinymce": "window.tinymce",

	"yoastseo": "window.yoast.analysis",
	"yoast-components": "window.yoast.components",
	"react": "React",
	"react-dom": "ReactDOM",
	"redux": "window.yoast.redux",
	"react-redux": "window.yoast.reactRedux",
	"jed": "window.yoast.jed",

	"lodash": "window.lodash",
	"lodash-es": "window.lodash",
	"styled-components": "window.yoast.styledComponents",
};

const wordpressExternals = {
	"@wordpress/element": "window.wp.element",
	"@wordpress/data": "window.wp.data",
	"@wordpress/components": "window.wp.components",
	"@wordpress/i18n": "window.wp.i18n",
	"@wordpress/api-fetch": "window.wp.apiFetch",
	"@wordpress/rich-text": "window.wp.richText",
	"@wordpress/compose": "window.wp.compose",
	"@wordpress/is-shallow-equal": "window.wp.isShallowEqual",
	"@wordpress/url": "window.wp.url",
};

// Make sure all these packages are exposed in `./js/src/components.js`.
const yoastExternals = {
	"@yoast/components": "window.yoast.componentsNew",
	"@yoast/configuration-wizard": "window.yoast.configurationWizard",
	"@yoast/helpers": "window.yoast.helpers",
	"@yoast/search-metadata-previews": "window.yoast.searchMetadataPreviews",
	"@yoast/style-guide": "window.yoast.styleGuide",
	"@yoast/analysis-report": "window.yoast.analysisReport",
};

const mode = process.env.NODE_ENV || "production";


const baseConfig = {
	stdio: "inherit",
	outdir: paths.jsDist,
	sourcemap: mode === "development",
	resolveExtensions: [ ".json", ".js", ".jsx" ],
	loader: {
		".js": "jsx",
		".svg": "dataurl",
	}
};

// Call build per config.
build( {
	...baseConfig,
	entryPoints: [
		...Object.values( mainEntry ),
		"./js/src/externals/styled-components.js",
		"./js/src/externals/redux.js",
		"./js/src/externals/jed.js",
	],
	external: [
		...Object.keys( externals ),
		...Object.keys( yoastExternals ),
		...Object.keys( wordpressExternals ),
	],
	minify: true,
	bundle: true,
	outdir: path.resolve( "js", "esbuild-dist" ),
} ).then( ( success ) => {
		console.log( success );
	} )
	.catch( ( e ) => {
		console.error( e.errors );

		process.exit( 1 )
	} );
