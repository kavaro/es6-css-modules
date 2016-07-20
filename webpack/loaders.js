/**
 * Created by karl on 19/7/16.
 */
'use strict';

// require image
//  import img from 'file?name=imgs/[hash:6].[ext]!img!./img.jpg'

// require responsive image
//  import img from 'responsive?name=imgs/[hash:6]-[width].[ext],quality=50,sizes[]=100,sizes[]=400,sizes[]=800,sizes[]=1600!./img.jpg'


const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (options) {
    const production = options.production;

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

    return jsLoaders
        .concat(cssLoaders)
        .concat(jsonLoaders);
};

