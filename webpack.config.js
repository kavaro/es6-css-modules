const production = !!process.env.NODE_ENV;

const loaders = require('./webpack/loaders')(production);
const plugins = require('./webpack/plugins')(production);

const config = {
    entry: ['./src/index.js'],
    output: {
        path: './public',
        filename: 'index.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
    },
    module: {
        loaders: loaders
    },
    plugins: plugins
};

if (!production) {
    config.debug = true;
    config.devtool = 'cheap-module-eval-source-map';
}

module.exports = config;
