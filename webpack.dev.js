const { mergeWithRules } = require('webpack-merge');
const common = require('./webpack.common.js');

const dev = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader'],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
};

module.exports = mergeWithRules({
  module: {
    rules: {
      test: 'match',
      use: 'prepend',
    },
  },
})(common, dev);
