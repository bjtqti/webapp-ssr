const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const NODE_MODULES = path.resolve('node_modules');

const config = {
	entry: {
	  	index:['./client/index/index.jsx','./client/index/index.css']
	},
	output: {
	    path: path.resolve(__dirname, '../dist/client'),
	    filename: 'js/[name].js',
	    publicPath:'/',
	    libraryTarget: 'umd'
	},
	module:{
		rules:[
			{
		        test: /\.(jsx?)$/,
		        loader: 'babel-loader',
		        exclude:[NODE_MODULES]
		    },
		    {
		    	test:/\.styl|css$/,
		    	use: ExtractTextPlugin.extract({
		          	fallback: "style-loader",
		          	use: [{
                        loader: 'css-loader',
                        options: {
                        	import:true,
                            importLoaders: 2,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                    	loader:'stylus-loader'
                    }]
		        }),
		        exclude:[NODE_MODULES]
		    },
		    {
		    	test:/\.(png|jpg|svg|gif)$/,
		    	loader:'file-loader',
		    	options:{
		    		outputPath:'images/'
		    	}
		    }
		]
	},
	plugins: [
	  new CleanWebpackPlugin('./dist/client/'),
	  new webpack.optimize.CommonsChunkPlugin('common'),
	  new ExtractTextPlugin({
	    filename: 'css/[name].css',
	    allChunks: true,
	  })
	]
};

module.exports = config;