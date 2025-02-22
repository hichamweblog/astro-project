import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

import netlify from "@astrojs/netlify";

import compressor from "astro-compressor";

export default defineConfig({
    site: 'https://dz-astro.netlify.app',
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: true,
      cssMinify: true,
    },
  },
    integrations: [sitemap(), compressor()],
  output: "server",
  adapter: netlify(),

});