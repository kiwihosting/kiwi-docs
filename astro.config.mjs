import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            plugins: [],
            title: "KiwiHosting Guides",
            customCss: ["./src/tailwind.css"],
            social: {
                github: "https://github.com/kiwihosting",
                discord: "https://discord.kiwihosting.net",
            },
            sidebar: [
                {
                    label: "Guides",
                    items: [
                        {
                            label: "General",
                            collapsed: false,
                            autogenerate: {
                                directory: "guides/General",
                                collapsed: true,
                            },
                        },
                        {
                            label: "Minecraft",
                            items: [
                                {
                                    label: "Java",
                                    collapsed: false,
                                    autogenerate: {
                                        directory: "guides/Minecraft/Java",
                                        collapsed: true,
                                    },
                                },
                                {
                                    label: "Bedrock",
                                    collapsed: false,
                                    autogenerate: {
                                        directory: "guides/Minecraft/Bedrock",
                                        collapsed: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        }),
        tailwind({
            applyBaseStyles: false,
        }),
    ],
});
