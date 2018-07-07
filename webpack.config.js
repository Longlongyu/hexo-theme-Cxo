const path = require('path')
const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
	entry : {
		main : ['./src/js/main.js', './src/scss/style.scss']
	},
	output : {
		//__dirname，就是当前webpack.config.js文件所在的绝对路径
		filename : '[name].js',
		path: __dirname + '/source/js'
	},
	module: {
		rules: [
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src/scss'),
                use:ExtractTextWebapckPlugin.extract ({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src/scss'),
                use:ExtractTextWebapckPlugin.extract ({
                    fallback:'style-loader',
                    use:['css-loader', 'sass-loader']
                })
            },
			{
				test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets : ['es2015'],
                            plugins : ['transform-runtime']
                        }
                    }
                ]
			}
	   ]
	},
    plugins: [
        //__dirname，就是当前webpack.config.js文件所在的绝对路径
        new ExtractTextWebapckPlugin('../css/style.css'),
        //__dirname，就是当前webpack.config.js文件所在的绝对路径
        new OptimizeCSSAssetsPlugin({
            canPrint: true
        })
    ]
}