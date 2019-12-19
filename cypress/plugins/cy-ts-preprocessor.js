const wp = require('@cypress/webpack-preprocessor')

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader'
          }
        ],
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    ]
  }
}

const options = {
  webpackOptions
  watchOptions: {}
}

module.exports = wp(options)
