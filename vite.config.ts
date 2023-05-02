import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Pages from 'vite-plugin-pages';
// import requireTransform from 'vite-plugin-require-transform';
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
export default ({ mode }) => {

  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      Pages({
        dirs: 'src/views/pages',
        routeStyle: 'nuxt' 
      }),
      ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') })
      // requireTransform({ fileRegex: /.vue$/ })
    ],
    base: '/web',
    resolve: {
      alias: { '@': resolve(__dirname, 'src') },
      extensions: [
        '.mjs',
        '.js',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
        '.vue'
      ] 
    },
    server: {
      proxy: {
        '/api': { target: 'http://127.0.0.1:3000' },
        '/socket.io': {
          target: 'http://127.0.0.1:3001',
          ws: true 
        }
      } 
    }
  });
};