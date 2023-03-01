import { defineConfig } from 'vite'
import nodePolyfills from 'vite-plugin-node-stdlib-browser'

export default defineConfig({
  plugins: [nodePolyfills()],
  optimizeDeps: {
    include: ['test-fixture']
  },
  build: {
    commonjsOptions: {
      include: [/test-fixture/, /node_modules/]
    }
  }
})
