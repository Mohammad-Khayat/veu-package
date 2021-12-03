 const path = require('path')
module.export = {
  configureWebpack: {
    resolve: {
      alias: {
        '@admin': path.resolve(__dirname, 'src/app/Admin/modules'),
      },
    },
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ["./node_modules", "./src/assets"],
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((opt) => {
        opt.postcss = [require("postcss-rtl")()];
        return opt;
      });
  },
};
