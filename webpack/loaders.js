/**
 * Created by karl on 19/7/16.
 */
'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (production) {
    const jsLoaders =
        [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ];

    const cssLoaders = production ?
        [
            {
                test: /\.global\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader'
                )
            },
            {
                test: /^((?!\.global).)*\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                )
            }
        ]
        :
        [
            {
                test: /\.global\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?sourceMap'
                ]
            },
            {
                test: /^((?!\.global).)*\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                ]
            }
        ];

    const jsonLoaders =
        [
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ];

    return jsLoaders.concat(cssLoaders).concat(jsonLoaders);
};

