const path = require( "path" );
const webpack = require( "webpack" );
const BundleAnalyzerPlugin = require( "webpack-bundle-analyzer" ).BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		allowedHosts: [ 'yoast.test' ]
	},
	entry: {
		app: './src/index.tsx',
		manage: './src/manage-index.tsx'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve( __dirname, 'dist' ),
		publicPath: "/"
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	optimization: {
		splitChunks: {

			chunks: 'all',
			maxSize: 10000,
			// chunks: 'async',
			// maxSize: 10000,
			// minChunks: 1,
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: 10,
				},
				default: {
					reuseExistingChunk: true,
					priority: 9
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
			},
			{
				test: /\.css$/i,
				use: [ 'style-loader', 'css-loader' ],
			},
		]

	},
	externals: {
		"@wordpress/api-fetch": "window.wp.apiFetch",
		"@yoast/components": "window.yoast.components",
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.ProgressPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new BundleAnalyzerPlugin(),
	]
};
