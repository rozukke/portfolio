import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import expressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';
// https://astro.build/config
export default defineConfig({
  site: "https://rozukke.dev",
  integrations: [
    sitemap(),
    expressiveCode({
      themes: ["dracula-soft"],
    }),
    mdx(),
    icon()
  ]
});
