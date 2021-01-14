module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:4002",
        changeOrigin: true,
      },
    },
  },
};
