const merge = require("webpack-merge")
const common = require("./webpack.config.common.js")
const uglifyWebpackPlugin = require("uglifyjs-webpack-plugin")

module.exports = merge(common, {
	mode: "production",
	plugins: [
		new uglifyWebpackPlugin()
	]
});
