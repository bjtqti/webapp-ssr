'use strict';

const path = require('path');
const webpack = require('webpack');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const NODE_MODULES = path.resolve('node_modules');


let externals = _externals();

const config = {
	entry: {
	  	app:'./app.js'
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
	resolve: {
        extensions: ['.js','.jsx']
    },
	externals: externals,
	node: {
		console: false,
		global: true,
		process: true,
		__filename: "mock",
		__dirname: "mock",
		Buffer: true,
		setImmediate: true
	},
	plugins: [
	  	//new CleanWebpackPlugin('dist/server')
	  	new webpack.optimize.UglifyJsPlugin()
	]
};

function _externals() {
    let manifest = require('../package.json');
    let dependencies = manifest.dependencies;
    let externals = {};
    for (let p in dependencies) {
        externals[p] = 'commonjs ' + p;
    }
    return externals;
}

module.exports = config;

