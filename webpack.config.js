const NODE_ENV = process.env.NODE_ENV;
const BUILD_TARGET = process.env.BUILD_TARGET;

const options = {
    NODE_ENV: NODE_ENV,
    BUILD_TARGET: BUILD_TARGET,
    production: NODE_ENV === 'production'
};

const config = require('./webpack/config')(options);
config.module.loaders = require('./webpack/loaders')(options);
config.plugins = require('./webpack/plugins')(options);

module.exports = config;
