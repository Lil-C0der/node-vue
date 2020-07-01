const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  lintOnSave: true,
  devServer: {
    compress: false,
    open: true,
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("network", resolve("src/network"))
      .set("views", resolve("src/views"));
  },
};
