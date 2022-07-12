# vite-plugin-node-stdlib-browser

> Disclaimer: I've only tested this plugin in simple projects. If you encounter any issues, please open an issue with a minimal reproduction in the project repository.

Add browser polyfills of Node.js built-in libraries for Vite projects. Based on [node-stdlib-browser](https://github.com/niksy/node-stdlib-browser).

## Usage

```sh
npm add node-stdlib-browser
npm add -D vite-plugin-node-stdlib-browser
```

```js
// vite.config.js
import { defineConfig } from 'vite'
import nodePolyfills from 'vite-plugin-node-stdlib-browser'

export default defineConfig({
  plugins: [nodePolyfills()]
})
```
