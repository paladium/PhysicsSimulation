module.exports = {
    // productionSourceMap: false
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: 'pug-plain-loader'
                }
            ]
        }

    },
    devServer: {
        disableHostCheck: true
    }
};