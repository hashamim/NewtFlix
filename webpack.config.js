const path = require('path');
debugger
module.exports = {
    entry: './frontend/newtflix.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        ]
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*'],
    },
}