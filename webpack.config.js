const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  entry: "./index.js",

  plugins: [
    new WasmPackPlugin({
      crateDirectory: __dirname,
    }),
  ]
};

