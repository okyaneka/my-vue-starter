import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: 'src/autoimport.d.ts',
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
        }
      ],
      eslintrc: { enabled: true },
      resolvers: [NaiveUiResolver()]
    }),
    Components({
      dts: 'src/components.d.ts',
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: ['src/components'],
      resolvers: [NaiveUiResolver(), IconsResolver()]
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3'
    }),
    Pages({
      dirs: [{ baseRoute: '', dir: 'src/views' }]
    }),
    Layouts({
      layoutsDirs: 'src/layouts'
    })
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
