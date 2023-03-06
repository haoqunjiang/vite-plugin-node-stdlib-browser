import { defineConfig } from 'vite'
import nodePolyfills from 'vite-plugin-node-stdlib-browser'
import inspect from 'vite-plugin-inspect'

export default defineConfig({
  plugins: [
    nodePolyfills(),
    inspect({
      build: true,
      outputDir: '.vite-inspect'
    })
  ],
  optimizeDeps: {
    include: ['test-fixture']
  },
  build: {
    commonjsOptions: {
      include: [/test-fixture/, /node_modules/]
    },
    minify: false
  }
})
