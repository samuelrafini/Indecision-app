// //we ned to let it know where the entry point is
// //output is another must have 
// the path should be an absolute path so it can be used on evry machine it maybe be different for every other machine
// to concat path we can use path.join a javascript method built in node function
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            //use to incoporate more loaders
            use: [
                'style-loader', 
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}

//loader
