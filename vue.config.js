module.export = {
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
