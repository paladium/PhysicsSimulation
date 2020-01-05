const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
    // productionSourceMap: false
    devServer: {
        disableHostCheck: true
    },
    chainWebpack: config => {
        config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
            {
                // Languages are loaded on demand at runtime
                languages: ['json', 'javascript', 'html', 'xml'],
                features: ['!gotoSymbol']
            }
        ])
    }
};