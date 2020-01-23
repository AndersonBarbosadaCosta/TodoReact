const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

    // ponto de entrada para o webpack
    entry: './src/index.jsx',
    // saida um arquivo chamado app.js na pasta public
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    // configurarções do webserver
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    // extensoes que o webpack devera reconhecer e alias para apontar para a pasta node_modules
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }

    },
    // configuracao do parser do css
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    // configuracao dos loaders
    module: {
        // loader responsavel por reconhecer os arquivos java scripts e jsx
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            // loader responsavel por reconhecer os arquivos css
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            // loader responsavel por reconhecer os arquivos de fonts
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]

    }
}