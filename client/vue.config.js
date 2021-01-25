const path = require("path");

module.exports = {
  devServer: {
    proxy: {
        "^/api/": {
          target: "http://localhost:4002",
          changeOrigin: true,
        },
    },
    //port: 3000,
  },
  //outputDir: path.resolve(__dirname, "../dist"),
};
