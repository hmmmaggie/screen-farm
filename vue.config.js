const conciseEmulationPlugins = [
  require("postcss-input-range")(),
  require("postcss-lh")(),
  require("postcss-custom-media")(),
  require("postcss-media-minmax")(),
  require("autoprefixer")(),
];
const Path = require("path");
module.exports = {
  //publicPath: process.env.NODE_ENV === "production" ? "/screen-farm/" : "/",
  outputDir: Path.join(__dirname, "/docs"),
  css: {
    sourceMap: true,
    loaderOptions: {
      postcss: {
        plugins: conciseEmulationPlugins,
      },
    },
  },
};
