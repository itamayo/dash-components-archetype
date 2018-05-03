'use strict';

var path = require('path');

var ROOT = process.cwd();
var SRC = path.join(ROOT, 'src');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    cache: false,
    // Resolution path for `entry`.
    context: SRC,
    resolve: {
        // Need `''` so referencing modules by `name.js` works.
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules']
    },
    externals: {
		'react': 'React',
		'react-dom': 'ReactDOM'
    },
    module: {
    loaders: [
      {
                test: /\.css$/,
                loaders: ['style-loader','css-loader']

        
      }
    ],
    plugins: [
	  new UglifyJSPlugin({
	    test: /\.js($|\?)/i,
	    sourceMap: true,
	    uglifyOptions: {
		compress: true
	    }
	  }),
	]
	    
  }
}
