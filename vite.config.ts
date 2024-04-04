import { defineConfig } from 'vite'
import { crx, defineManifest } from '@crxjs/vite-plugin'

const manifest = defineManifest({
  manifest_version: 3,
  name: "トップへ戻る",
  version: "1.0.0",
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
