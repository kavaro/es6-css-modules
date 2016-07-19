/**
 * Created by karl on 19/7/16.
 */
'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(production) {
    var plugins;

    if (production) {
        plugins = [
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
        'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'development')
    }));
    return plugins;
};
