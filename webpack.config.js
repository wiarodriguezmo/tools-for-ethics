//  webpack.config.js 
module.exports = {
    entry: './js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};