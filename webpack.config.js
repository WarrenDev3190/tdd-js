const path = require('path');

const PATHS = {
  src: path.resolve(__dirname, './src/index'),
  dist: path.resolve(__dirname, './dist/js/')
};

module.exports = {
  entry: PATHS.src,
  output: {
    filename: '[name].js',
    path: PATHS.dist,
    publicPath: ''
  }
}
