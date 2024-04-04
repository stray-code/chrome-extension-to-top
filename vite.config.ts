import { defineConfig } from 'vite'
import { crx, defineManifest } from '@crxjs/vite-plugin'

const manifest = defineManifest({
  manifest_version: 3,
  name: "トップへ戻るボタン",
  version: "1.0.0",
  icons: {
    16: 'img/icon16.png',
    48: 'img/icon48.png',
    128: 'img/icon128.png'
  },
  content_scripts: [
    {
      js: ["src/content/main.ts"],
      matches: ["http://*/*", "https://*/*"],
    }
  ]
})

export default defineConfig({
  plugins: [crx({ manifest })],
})
