const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const NODE_MODULES = path.resolve('node_modules');
var ip = require('ip');

 // my ip address

const config = {
	entry: {
	  	index:'./client/index/index.jsx'
	},
	output: {
	    path: path.resolve(__dirname, '../dist'),
	    filename: 'js/[name]-[hash:8].js'
	},
	mode:"development",
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
				    'style-loader',
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
	resolve: {
        extensions: ['.js','.jsx']
    },
	devtool: 'inline-source-map',
	devServer: {
	  contentBase: path.join(__dirname, "../dist"),
	  compress: true,
	  open:true,
	  hot:true,
	  host:ip.address(),
	  port: 9000
	},
	plugins: [
		// new CleanWebpackPlugin(['dist/client'],{
		// 	root:path.resolve(__dirname, '..')
		// }),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	   	new HtmlWebpackPlugin({
		  	template:'./server/views/layout.html',
		  	inject: true,
		  	minify:false
		})
	]
};

module.exports = config;