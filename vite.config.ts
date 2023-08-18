import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssPxToViewport from 'postcss-px-to-viewport';

const usePxtovw = postcssPxToViewport({
  unitToConvert: 'pt',
  viewportWidth: 1792,
  viewportHeight: 1120,
  unitPrecision: 3,
  viewportUnit: 'vw',
  fontViewportUnit: 'vw',
  selectorBlackList: [],
  minPixelValue: 1,
  mediaQuery: false,
  replace: true,
  exclude: [/node_modules/],
})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        usePxtovw
      ],
    },
  },
})
