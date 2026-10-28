import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server', // 或者 'hybrid'
  adapter: cloudflare(),
});