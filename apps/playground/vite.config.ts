import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const themesDir = fileURLToPath(new URL('../../packages/themes/src', import.meta.url));

/*
 * The design system's CSS is attached as <link> elements (see src/main.tsx) so
 * the playground can switch it off at runtime. That puts it outside Vite's
 * module graph, so edits to it would otherwise go unnoticed — this watches the
 * directory and forces a reload.
 */
function reloadOnThemeChange(): Plugin {
  return {
    name: 'monet:reload-on-theme-change',
    configureServer(server) {
      server.watcher.add(themesDir);
      server.watcher.on('change', (file) => {
        if (file.startsWith(themesDir) && file.endsWith('.css')) {
          server.ws.send({ type: 'full-reload' });
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), reloadOnThemeChange()],
  resolve: {
    alias: {
      // Point at source so editing a component hot-reloads without a build step.
      '@monet/react': fileURLToPath(new URL('../../packages/core/src/index.ts', import.meta.url)),
    },
  },
});
