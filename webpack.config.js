var { resolve } = require('path');

module.exports = {
	context: resolve('src/js'),
	entry: './app.js',
	output: {
		path: resolve('build'),
		filename: 'bundle.js',
		publicPath: '/build/',
	},
	module: {
		loaders: [
		{test: /\.js$/, loaders: [], exclude: /node_modules/},
		{test: /\.css$/, loaders: ['style-loader', 'css-loader']},
		],
	}
}
