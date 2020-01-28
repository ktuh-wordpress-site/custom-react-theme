let path = require('path'),
  MinifyPlugin = require('babel-minify-webpack-plugin'),
  TerserPlugin = require('terser-webpack-plugin'),
  { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  target: 'web',
  plugins: process.env.ANALYZE ? [
    new MinifyPlugin({}, {
      comments: false
    }),
    new BundleAnalyzerPlugin()
  ] : [
    new MinifyPlugin({}, {
      comments: false
    })
  ],
  optimization: {
    minimizer: [new TerserPlugin({
      terserOptions: {
        output: {
          comments: false,
        },
      },
      extractComments: false,
    })]
  },
  mode: process.env.DEV_MODE ? 'development' : 'production',
  entry: {
    app: './src/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: process.env.EXP ? '[name]_exp.js' : '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      history: path.resolve(__dirname, 'node_modules', 'history', 'cjs',
        'history.min.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          babelrc: true,
          comments: false,
          plugins: process.env.DEV_MODE ? [] : ['./babel/hashify']
        }
      },
    ]
  },
};
