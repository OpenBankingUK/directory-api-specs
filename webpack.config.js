const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000
    },
    output: {
        filename: 'ignore.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/*.html', flatten: true },
            { from: 'src/specs/*.yaml', flatten: true },
            { from: 'node_modules/swagger-ui-dist/swagger*.js', to: '.', flatten: true },
            { from: 'node_modules/swagger-ui-dist/*.css', to: '.', flatten: true },
            { from: 'node_modules/swagger-ui-dist/*.png', to: '.', flatten: true }
            ])
    ]
};
