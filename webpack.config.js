let path = require('path'),
  MinifyPlugin = require('babel-minify-webpack-plugin'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  plugins: [
    new MinifyPlugin({
      removeConsole: true
    }, {
      comments: false
    })
  ],
  optimization: { minimizer: [new UglifyJsPlugin()] },
  mode: 'production',
  entry: {
    app: './src/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['./babel/hashify']
          }
        }
      },
      {
        test: /\.js$/,
        include: /node_modules\/moment/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['./babel/moment_no_i18n', './babel/hashify']
          }
        }
      },
      {
        test: /\.js$/,
        include: /node_modules\/mediaelement/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['./babel/mejs_no_i18n', './babel/mejs_no_video']
          }
        }
      },
      {
        test: /\.jsx?$/,
        include: /node_modules\/react-everafter/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['./babel/hashify']
          }
        }
      }
    ]
  }
};
