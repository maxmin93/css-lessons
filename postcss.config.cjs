const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const atImport = require('postcss-import');

const config = {
  plugins: [autoprefixer, postcssNested, atImport],
};

module.exports = config;
