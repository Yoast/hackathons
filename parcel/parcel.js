const paths = require( "./paths" );
const Bundler = require( "parcel-bundler" );
const path = require( "path" );
const extendBundlerWithExternals = require( "parcel-plugin-externals/utils" ).extendBundlerWithExternals;
const combineExternals = require( "parcel-plugin-externals/utils" ).combineExternals;


const entryFiles = paths.entry.map( entry => path.join( paths.jsSrc, entry ) );

const options = {
	outDir: "./dist",
	bundleNodeModules: false,
	autoInstall: false,
};

const externals = {
	"@wordpress/element": "window.wp.element",
	"@wordpress/data": "window.wp.data",
	"@wordpress/components": "window.wp.components",
	"@wordpress/i18n": "window.wp.i18n",
	"@wordpress/api-fetch": "window.wp.apiFetch",
	"@wordpress/rich-text": "window.wp.richText",
	"@wordpress/compose": "window.wp.compose",
	"@wordpress/is-shallow-equal": "window.wp.isShallowEqual",
	"@wordpress/url": "window.wp.url",
	"@yoast/components": "window.yoast.componentsNew",
	"@yoast/configuration-wizard": "window.yoast.configurationWizard",
	"@yoast/helpers": "window.yoast.helpers",
	"@yoast/search-metadata-previews": "window.yoast.searchMetadataPreviews",
	"@yoast/style-guide": "window.yoast.styleGuide",
	"@yoast/analysis-report": "window.yoast.analysisReport",
	// This is necessary for Gutenberg to work.
	tinymce: "window.tinymce",

	yoastseo: "window.yoast.analysis",
	"yoast-components": "window.yoast.components",
	react: "React",
	"react-dom": "ReactDOM",
	redux: "window.yoast.redux",
	"react-redux": "window.yoast.reactRedux",
	jed: "window.yoast.jed",

	lodash: "window.lodash",
	"lodash-es": "window.lodash",
	"styled-components": "window.yoast.styledComponents",
};

( async function() {
	const bundler = new Bundler( entryFiles, options );

	extendBundlerWithExternals( bundler, combineExternals( "./", [], externals, {} ) );
	const bundle = await bundler.bundle();
}() );
