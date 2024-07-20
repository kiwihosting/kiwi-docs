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
        // Path to your Tailwind base styles:
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
            collapsed: true,
            autogenerate: {
              directory: 'guides/Minecraft/Java',
              collapsed: true
            }
          }, {
            label: 'Bedrock',
            collapsed: true,
            autogenerate: {
              directory: 'guides/Minecraft/Bedrock',
              collapsed: true
            }
          }]
        }]
      }, {
        label: 'Reference',
        collapsed: true,
        autogenerate: {
          directory: 'reference',
          collapsed: true
        }
      }]
    }),     
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
