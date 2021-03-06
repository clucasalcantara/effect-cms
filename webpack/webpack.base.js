/**
 * Webpack base
 * @author Caio Alcantara - 2018
 * @memberof effect-cms
 */
module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    // To Do: Resolve modules to better imports
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            'flow',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
}
