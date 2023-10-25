/* 
  craco.config.js 文件允许你在 CRA 项目中进行自定义配置，而无需 eject 整个项目。
  它可以修改 Webpack 配置、添加对 Less 和 Sass 的支持、支持 TypeScript、添加 ESLint 和 Prettier 等。
*/

const path = require("path")
const CracoLessPlugin = require('craco-less');

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      // '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
}
