const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist',),
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
          },
        ],
      },
    devtool: 'inline-source-map',
};