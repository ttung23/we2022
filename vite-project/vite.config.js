// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        trang_con1: resolve(__dirname, 'trang_con1.html'),
        trang_con2: resolve(__dirname, 'trang_con2.html'),
        trang_con3: resolve(__dirname, 'trang_con3.html'),
        trangcon4: resolve(__dirname, 'trangcon4.html'),
      }
    }
  }
})