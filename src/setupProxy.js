const { createProxyMiddleware } = require("http-proxy-middleware");

// src/setupProxy.js
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://192.168.10.60:38080", // 비즈니스 서버 URL 설정
      changeOrigin: true,
      ws:true,
    })
  );
};