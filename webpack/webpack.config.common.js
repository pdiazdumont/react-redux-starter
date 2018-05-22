const path = require("path")
const cleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: [
		"babel-polyfill",
		"babel-plugin-transform-async-to-generator",
		"./src/index.js"
	],
	output: {
		filename: "app.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader", "eslint-loader"]
			}
		]
	},
	plugins: [
		new cleanWebpackPlugin(["dist"]),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			React: "react",
			Component: ["react", "Component"],
			Connect: ["react-redux", "connect"]
		})
	],
	resolve: {
		modules: [
			"node_modules",
			path.resolve(__dirname, "../src")
		],
		extensions: [
			".js",
			".jsx"
		]
	}
}
