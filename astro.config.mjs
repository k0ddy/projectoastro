import {defineConfig} from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";

export default defineConfig({
  site: "",
  integrations: [
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    prefetch(),
  ],
  /* renderers: ["@astrojs/renderer-typescript"], */
});
