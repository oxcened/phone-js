const path = require('path');

module.exports = (dir) => ({
  context: path.join(dir, './src'),
  entry: './index.ts',
  output: {
    filename: 'index.js',
    library: {
      type: 'umd'
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: [
          /node_modules/,
          /dist/
        ],
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|bmp)$/,
        use: {
          loader: 'url-loader',
          options: {
            /** fallbacks to file-loader */
            limit: 8000
          }
        }
      }
    ]
  },
  externals: [
    "react",
    "react-router-dom",
    "react-dom",
    "@phone-js/utilities"
  ]
});
