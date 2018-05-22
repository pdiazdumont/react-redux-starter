const merge = require("webpack-merge")
const common = require("./webpack.config.common.js")
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
		compress: true,
		hot: true,
		https: false,
		port: 5000,
		historyApiFallback: true
	},
	plugins: [
		new htmlWebpackPlugin({
			template: "src/index.html"
		})
	]
})
