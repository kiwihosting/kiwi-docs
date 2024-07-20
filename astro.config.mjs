import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [],
      title: 'KiwiHosting Guides',
      customCss: [
        './src/tailwind.css',
      ],
      social: {
        github: 'https://github.com/kiwihosting',
		discord: 'https://discord.kiwihosting.net'
      },
      sidebar: [{
        label: 'Guides',
        items: [{
          label: 'Minecraft',
          items: [{
            label: 'Java',
            collapsed: false,
            autogenerate: {
              directory: 'guides/Minecraft/Java',
              collapsed: false
            }
          }, {
            label: 'Bedrock',
            collapsed: false,
            autogenerate: {
              directory: 'guides/Minecraft/Bedrock',
              collapsed: false
            }
          }]
        }]
      }]
    }),     
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
