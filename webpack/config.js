module.exports = function (options) {
    const config = {
        target: options.target || 'web',
        entry: {
            main: ['./src/index.js']
        },
        output: {
            path: './public',
            filename: '[name].js'
        },
        resolve: {
            extensions: ['', '.js', '.jsx', '.json'],
            packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
        },
        module: {},
        plugins: []
    };
    if (!options.production) {
        config.debug = true;
        config.devtool = 'cheap-module-eval-source-map';
    }
    return config;
};