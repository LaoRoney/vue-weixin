// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: {NODE_ENV: '"production"'},
        index: path.resolve(__dirname, '../weixin/index.html'),
        assetsRoot: path.resolve(__dirname, '../weixin'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/weixin/',
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: {NODE_ENV: '"development"'},
        port: 8088,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        context: [ //代理路径
            '/shopping',
            '/v1',
            '/v2',
            '/v3',
            '/v4',
        ],
        proxypath: 'https://mainsite-restapi.ele.me',
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}