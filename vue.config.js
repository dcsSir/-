const path = require('path');
const resolve = (dir) => {
    return path.join(__dirname,dir)
}

const port = process.env.port || process.env.npm_config_port || 80;

module.exports = {

    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    outputDir: 'dist',
    assetsDir: 'assets',
    // 是否启用 EsLint的语法检测
    lintOnSave: process.env.NODE_ENV === 'production',
    // host: '0.0.0.0',
    // port: port,
    devServer: {
        host: '0.0.0.0',
        // port: port,
        proxy: {
            'api' :{
                target: 'http://172.22.40.63:3000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                '^/api': ''
                }
            }
        }
    }
}