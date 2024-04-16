import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  integrations: [tailwind()],
  vite: {
    plugins: [tsconfigPaths()],
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
})