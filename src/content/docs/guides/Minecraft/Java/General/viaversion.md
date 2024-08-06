---
title: Minecraft Java Server Multiple Version Connect
description: A comprehensive guide to adding multiple version support to a Minecraft server
---

A comprehensive guide to adding multiple version support to a Minecraft server.

## Introduction

ViaVersion and it's other plugins are

### What the ViaVersion plugins do

| Plugin Name                                                                        | Versions Supported                                                                         | Descrption/Warning                                                                                                                                                         | Recommended                                                                                          |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [ViaVersion](https://github.com/ViaVersion/ViaVersion)                             | Allows to connect from your server version to the latest Minecraft version available to it | Very good plugin to keep players after a Minecraft update.                                                                                                                 | Yes                                                                                                  |
| [ViaBackwards](https://github.com/ViaVersion/ViaBackwards)                         | Allows connecting from your server version to 1.9.X                                        | May cause issues with plugins, anticheats, etc. Also has to spoof items/blocks from the real one to a similar one.                                                         | No                                                                                                   |
| [ViaRewind](https://github.com/ViaVersion/ViaRewind)                               | Allows connecting from 1.8.X to 1.7.X                                                      | Combat may break, along with other unexpected bugs                                                                                                                         | No                                                                                                   |
| [ViaRewind-Legacy-Support](https://github.com/ViaVersion/ViaRewind-Legacy-Support) | N/A                                                                                        | Fixes many ViaRewind issues/bugs, highly recommended, For a full bugfix list go [here](https://github.com/ViaVersion/ViaRewind-Legacy-Support?tab=readme-ov-file#features) | Yes, if ViaRewind is installed (required), also required [Paper](https://papermc.io/downloads/paper) |

## Prerequisites

- Access to the [Kiwi Hosting Panel](https://gmp.kiwihosting.net).
- A running Minecraft Java Edition server managed through Kiwi Hosting Panel, using Spigot at the minimum.
- Basic understanding of server management.
- Server running Spigot, Paper, or Purpur and similar server software.

## Steps to add ViaVersion (and other ones you want)

### 1. Log in to the Kiwi Hosting Panel

1. Open your web browser and go to the [KiwiHosting Panel](https://gmp.kiwihosting.net).
2. Log in with your Kiwi Hosting Panel credentials.

### 2. Navigate to Your Server

1. From the Kiwi Hosting Panel dashboard, select the Minecraft server you want to configure.
2. Click on the server name to access its management page.

### 3. Stop your server (if running)

1. Press the "Stop" button on the top right of the panel.
   ![Power](/assets/actions/power/stop.png)

### 4. Navigate to the Plugins tab

1. Press the "Plugins" Tab on the left of the screen

### 5. Search from the target plugin you want provided [here](#what-the-viaversion-plugins-do)

:::note
If you want ViaRewind Legacy Support then you will need to download it from [here](https://github.com/ViaVersion/ViaRewind-Legacy-Support/releases/latest)
:::

1. Click on the Search bar and type the name of the plugin
2. Click the install button to the right of the plugin to install it

### 6. Start your server

1. Press the "Start" button on the top right of the panel.
   ![Power](/assets/actions/power/start.png)

## Conclusion

By adding multiple version support to your Minecraft server, you allow players to to join the server, from the range of `1.7.2` to `1.21` with proper support!
