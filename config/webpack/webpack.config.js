'use strict';

var path = require('path');

var ROOT = process.cwd();
var SRC = path.join(ROOT, 'src');

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

        
      },
	{
	 test: /\.(js|jsx)$/,
        use: 'babel-loader?presets[]=es2015',
        exclude: /(node_modules|bower_components)/,
    }
    ]
  }
}
