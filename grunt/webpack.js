const webpack = require('webpack');

module.exports = {
    options: {
        output: {
            path: '<%= paths.public.javascripts %>',
            filename: '[name].js',
        },
        // Important! Do not remove ''. If you do, imports without
        // an extension won't work anymore!
        resolve: {
            extensions: ['', '.js', '.jsx'],
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    // Enable caching for improved performance during development
                    // It uses default OS directory by default. If you need
                    // something more custom, pass a path to it.
                    // I.e., babel?cacheDirectory=<path>
                    loaders: ['babel?cacheDirectory'],
                },
            ],
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                include: /\.min\.js$/,
                minimize: true,
                compress: {
                    warnings: false,
                },
            }),
        ],
    },
    dev: {
        entry: {
            app: './<%= paths.source.javascripts %>/app',
        },
        debug: true,
        devtool: 'source-map',
    },
    prod: {
        entry: {
            'app.min': './<%= paths.source.javascripts %>/app',
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                },
            }),
            new webpack.optimize.UglifyJsPlugin(),
        ],
    },
};
