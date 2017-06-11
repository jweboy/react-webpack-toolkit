const autoprefixer = require('autoprefixer');

module.exports = {
  parser: 'postcss-scss',
  sourceMap: true,
  plugins: [
    autoprefixer({
      browsers: [
        'last 2 version',
      ],
    })
  ],
};
