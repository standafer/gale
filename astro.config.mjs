import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

const noExternal = ["three"];
if (process.env.NODE_ENV === "production") {
  noExternal.push("@theatre/core");
}

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  vite: {
    ssr: {
      noExternal,
    },
    legacy: {
      proxySsrExternalModules: true,
    },
  },
});
