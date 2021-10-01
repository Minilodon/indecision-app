const path = require('path');

module.exports = {
  entry: './src/playground/redux-expensify.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }, {
        test: /\.s?css$/i,
        use: ['style-loader' , 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: 'eval-cheap-module-source-map',
};