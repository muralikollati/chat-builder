import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    // base: genBaseUrl(mode),
    // build: {
    //   outDir: genOutDir(mode),
    // },
    plugins: [react()],
    server: {
      host: '0.0.0.0'
    },
    // resolve: {
    //   alias: {
    //     '@': resolve(__dirname, './src'),
    //     "assets": resolve(__dirname, './assets'),
    //   }
    // }
  }
})

