const webpack = require('webpack');

module.exports = {
    options: {
        output: {
            path: __dirname + '/../<%= paths.public.javascripts %>',
            filename: '[name].js',
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    // Enable caching for improved performance during development
                    // It uses default OS directory by default. If you need
                    // something more custom, pass a path to it.
                    // I.e., babel-loader?cacheDirectory=<path>
                    loaders: ['babel-loader?cacheDirectory'],
                },
            ],
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                ie8: false,
                include: /\.min\.js$/,
                minimize: true,
                output: {
                    comments: false,
                    beautify: false,
                },
                compress: {
                    warnings: false,
                },
                warnings: false,
            }),
        ],
    },
    dev: {
        entry: {
            app: './<%= paths.source.javascripts %>/app',
        },
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
