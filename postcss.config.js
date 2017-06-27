const autoprefixer = require('autoprefixer');
// const postcssReporter = require('postcss-reporter')

module.exports = {
  parser: 'postcss-scss',
  sourceMap: true,
  plugins: [
    autoprefixer(), // 迁移配置 -> .browserslistrc
    // postcssReporter({
    //   clearMessages: true,
    // })
  ],
};
