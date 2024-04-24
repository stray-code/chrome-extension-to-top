import { defineConfig } from "vite";
import { crx, defineManifest } from "@crxjs/vite-plugin";

const manifest = defineManifest({
  manifest_version: 3,
  name: "トップへ戻るボタン",
  description: "トップへ戻るボタンを表示します。",
  version: "1.0.2",
  icons: {
    16: "img/icon16.png",
    48: "img/icon48.png",
    128: "img/icon128.png",
  },
  content_scripts: [
    {
      js: ["src/content/main.ts"],
      matches: ["http://*/*", "https://*/*"],
    },
  ],
  web_accessible_resources: [
    {
      resources: ["img/*"],
      matches: ["<all_urls>"],
    },
  ],
});

export default defineConfig({
  plugins: [crx({ manifest })],
});
