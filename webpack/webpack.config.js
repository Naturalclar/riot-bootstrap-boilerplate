const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: `${__dirname}/../src/main.js`,
  output: {
    path: `${__dirname}/../public`,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.tag'],
  },
  module: {
    rules: [
      {
        test: /\.tag$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'riot-tag-loader',
          },
        ],
      },
      {
        test: /\.jsx?$|\.tag$/,
        enforce: 'post',
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader?name=./[name].[ext]',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      riot: 'riot',
    }),
    new HtmlWebpackPlugin({
      title: 'Riot-Bootstrap Boilerplate',
      template: `${__dirname}/../src/index.html`,
      filename: 'index.html',
    }),
  ],
}
