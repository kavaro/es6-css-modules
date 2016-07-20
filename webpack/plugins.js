/**
 * Created by karl on 19/7/16.
 */
'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(options) {
    var plugins;
    const production = options.production;

    if (production) {
        plugins = [
            new CleanWebpackPlugin(['public'], {
                root: path.resolve(__dirname, '..')
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compressor: {
                    screw_ie8: true,
                    warnings: false
                }
            }),
            new ExtractTextPlugin('index.css', {
                allChunks: true
            })
        ];
    } else {
        plugins = [
            new webpack.NoErrorsPlugin()
        ];
    }
    plugins.push(new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(options.NODE_ENV),
        'process.env.BUILD_TARGET': JSON.stringify(options.BUILD_TARGET)
    }));
    return plugins;
};
