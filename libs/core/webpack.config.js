import WasmPackPlugin from '@wasm-tool/wasm-pack-plugin';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const dist = path.resolve(__dirname, 'dist');

export default {
  mode: 'production',
  entry: {
    index: './index.js',
  },
  output: {
    path: dist,
    filename: '[name].js',
  },
  devServer: {
    static: dist,
  },
  plugins: [
    new WasmPackPlugin({
      crateDirectory: __dirname,
    }),
  ],
  experiments: { asyncWebAssembly: true },
};
