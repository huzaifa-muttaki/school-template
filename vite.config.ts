import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

/**
 * GitHub Pages serves a project site from /<repository>/.
 * In GitHub Actions the repository name comes from GITHUB_REPOSITORY ("owner/repo");
 * locally it falls back to the package name, which matches the repository.
 * A user/organisation site (<owner>.github.io) is served from the root instead.
 * BASE_PATH can override either, e.g. BASE_PATH=/ for a custom domain.
 */
function pagesBase() {
  if (process.env.BASE_PATH) return process.env.BASE_PATH
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? pkg.name
  return repo.endsWith('.github.io') ? '/' : `/${repo}/`
}

/**
 * GitHub Pages has no SPA rewrites. Serving the app as 404.html means a direct
 * load of any client route (e.g. /about) still boots React Router.
 */
function spaFallback(): Plugin {
  return {
    name: 'spa-404-fallback',
    apply: 'build',
    closeBundle() {
      const dist = resolve(__dirname, 'dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
    },
  }
}

export default defineConfig(({ command, isPreview }) => ({
  // Dev server stays at "/"; production builds and `vite preview` use the Pages path.
  base: command === 'build' || isPreview ? pagesBase() : '/',
  plugins: [react(), spaFallback()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
}))
