const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production" ? "/todo-list-practice/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/style/_variables.scss";`,
      },
    },
  },
});
