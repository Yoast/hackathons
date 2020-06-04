const path = require( 'path' );

module.exports = {
  entry: './src/hackaton_js_bundling.js',
  output: {
    filename: 'main.js',
    path: path.resolve( __dirname, 'dist'),
  },
  externals: {
    lodash: 'window.lodash',
    "@yoast/style-guide": 'window.yoast.styleGuide',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader' ],
      },
    ],
},
};
