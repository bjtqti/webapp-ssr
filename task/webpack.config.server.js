const path = require('path');
const webpack = require('webpack');
const NODE_MODULES = path.resolve('node_modules');
const outputPath = path.resolve(__dirname, '../dist/server');

function _externals() {
    let manifest = require('../package.json');
    let dependencies = manifest.dependencies;
    let externals = {};
    for (let p in dependencies) {
        externals[p] = 'commonjs ' + p;
    }
    return externals;
}

let externals = _externals();

const config = {
	entry:'./server/bootstrap.js',
	output: {
	    path: outputPath,
	    filename: 'bootstrap.js',
	    libraryTarget: 'commonjs2'
	},
	target:'node',
	mode:"production",
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
	// node: {
	// 	console: false,
	// 	global: true,
	// 	process: true,
	// 	__filename: true,
	// 	__dirname: true,
	// 	Buffer: true,
	// 	setImmediate: true
	// },
	plugins: [
		// new webpack.DefinePlugin({
	 //       'process.env.NODE_ENV': JSON.stringify('production')
	 //    })
	]
};

module.exports = config;