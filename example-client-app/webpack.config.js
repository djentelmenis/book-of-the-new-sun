const path = require('path')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  plugins: [new BundleAnalyzerPlugin()],
  optimization: {
    usedExports: true,
    minimizer: [new TerserPlugin()]
  }
}
