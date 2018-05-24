const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NODE_MODULES = path.resolve('node_modules');
const outputPath = path.resolve(__dirname, '../dist/client');

var InjectHtmlPlugin = require('inject-html-webpack-plugin')

const config = {
	entry: {
	  	index:'./client/index/index.jsx'
	},
	output: {
	    path: outputPath,
	    filename: 'js/[name]-[hash:8].js',
	    publicPath:'/'
	},
	mode:"production",
	module:{
		rules:[
			{
		        test: /\.(jsx?)$/,
		        loader: 'babel-loader',
		        exclude:[NODE_MODULES]
		    },
		    {
		    	test:/\.(styl|css)$/,
		    	use: [
		    		MiniCssExtractPlugin.loader,
				    //'style-loader',
				    { loader: 'css-loader', 
				    	options: { 
					    	import:true,
	                        importLoaders: 2 
	                    } 
                    },
				    'postcss-loader',
				    'stylus-loader'
				]
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
		new CleanWebpackPlugin(['dist/client'],{
			root:path.resolve(__dirname, '..')
		}),
	    new MiniCssExtractPlugin({
	      // Options similar to the same options in webpackOptions.output
	      // both options are optional
	      filename: "css/[name]-[hash:8].css",
	      chunkFilename: "[id].css"
	    }),
		new UglifyJSPlugin(),
		new InjectHtmlPlugin({
            filename:'./views/index.html',
            chunks:['index'],
            //processor:"http://cdn.example.com",
            custom:[{
                start:'<!-- start:bundle-time -->',
                end:'<!-- end:bundle-time -->',
                content:Date.now()
            }]
        })
	   	// new HtmlWebpackPlugin({
	   	// 	filename:'app.html',
	  		// template:'./views/index.html',
	  		// minify:false
	    // })
	]
};

module.exports = config;