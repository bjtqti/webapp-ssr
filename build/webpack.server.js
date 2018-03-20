const path = require('path');
//const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const NODE_MODULES = path.resolve('node_modules');

const config = {
	entry: {
	  	app:'./server/controller/main.js'
	},
	target:'node',
	output: {
	    path: path.resolve(__dirname, '../dist/server'),
	    filename: 'app.js',
	    libraryTarget: 'commonjs2'
	},
	module:{
		rules:[
			{
		        test: /\.(jsx?)$/,
		        loader: 'babel-loader',
		        exclude:[NODE_MODULES]
		    }
		]
	},
	plugins: [
	  new CleanWebpackPlugin('./dist/server/*.*')
	 // new webpack.optimize.CommonsChunkPlugin('common'),
	]
};

module.exports = config;