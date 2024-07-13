module.exports = {
  proxy: {
    "/app": {
      target: "http://localhost:8080",
      changeOrigin: true,
    },
    "/ws": {
      target: "http://localhost:8080",
      changeOrigin: true,
    },
    "/topic": {
      target: "http://localhost:8080",
      changeOrigin: true,
    },
  },
};

