const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },

  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: "file-loader"
      },
    ],
  },

  optimization: {
    runtimeChunk: 'single',
    splitChunks: { 
      chunks: 'all', 
      cacheGroups: { 
        default: { 
          enforce: true, 
          priority: 1 
        }, 
        vendors: { 
          test: /[\\/]node_modules[\\/]/, 
          priority: 2, 
          name: 'vendors', 
          enforce: true, 
          chunks: 'all' 
        }
      } 
    } 
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/index.html'),
        to: path.resolve(__dirname)
      },
      {
        from: path.resolve(__dirname , 'src/assets'),
        to: path.resolve(__dirname, 'build/assets')
      }
    ]),
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true)
    }),
  ]
};