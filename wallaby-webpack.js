const webpack = require('webpack');
const wallabyWebpack = require('wallaby-webpack');
const webpackConfig = Object.assign({}, require('./webpack.config.js'));

var wallabyPostprocessor = wallabyWebpack(webpackConfig);

module.exports = function (wallaby) {
    return {
        files: [
            {pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', instrument: false},
            {pattern: 'src/**/*.js', load: false},
            {pattern: 'src/**/*.css', load: false},
            {pattern: 'src/**/*.less', load: false},
            {pattern: 'src/**/*.json', load: false},
            {pattern: 'src/**/*.jpg', load: false},
            {pattern: 'src/**/*.jpeg', load: false},
            {pattern: 'src/**/*.png', load: false},
            {pattern: 'src/**/*Spec.js', ignore: true}
        ],

        tests: [
            {pattern: 'src/**/*Spec.js', load: false}
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel()
        },

        postprocessor: wallabyPostprocessor,

        setup: function () {
            // required to trigger test loading
            window.__moduleBundler.loadTests();
        }
    };
};