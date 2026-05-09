import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    coverage: {
      exclude: [
        '**/*.css',
        'src/app/apple-icon.tsx',
        'src/app/opengraph-image.tsx',
        'src/app/twitter-image.tsx'
      ]
    }
  },
})
