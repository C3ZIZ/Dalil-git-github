import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const getAutoBase = (command) => {
  if (command !== 'build') return '/'

  const repository = process.env.GITHUB_REPOSITORY
  if (!repository) return '/'

  const repoName = repository.split('/')[1]
  if (!repoName) return '/'

  return `/${repoName}/`
}

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: getAutoBase(command),
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
