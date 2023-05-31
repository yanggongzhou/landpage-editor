const path = require('path');
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  publicPath: './', // 基本路径 baseURL已经过时
  outputDir: 'dist', // 输出文件目录
  lintOnSave: process.env.NODE_ENV !== 'production',  // eslint-loader 是否在保存的时候检查
  chainWebpack: (config) => {
    // 解决警告You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.
    config.resolve.alias
      .set('components', '@/components')
      .set('@', path.resolve('src'))
  }, // webpack配置
  configureWebpack: config => {
    config.plugins.push(AutoImport({ resolvers: [ElementPlusResolver()] }));
    config.plugins.push(Components({ resolvers: [ElementPlusResolver()] }));
  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  css: { // css相关配置
  },
  parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/css/variables.scss'),
        // path.resolve(__dirname, './src/constant/constant.scss')
      ]
    }
  }, // 第三方插件配置
  // webpack-dev-server 相关配置
  devServer: {
    port: 3000,
    proxy: {
      '/dzapi': {
        target: 'http://192.168.8.142:8080', // 后端
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/dzapi': '' // 重写路径
        }
      },
      '/api': {
        target: 'http://127.0.0.1:1234',
        changeOrigin: true, // 是否跨域
      }
    },
    // before: app => {}
  }
}
