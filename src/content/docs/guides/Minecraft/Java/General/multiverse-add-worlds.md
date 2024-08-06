---
title: Minecraft Java Server With Multiple Worlds
description: A comprehensive guide to adding multiple worlds to a Minecraft server.
---

A comprehensive guide to adding multiple worlds to a Minecraft server.

## Introduction

This guide will walk you through the process of adding multiple worlds to a Minecraft server.

## Prerequisites

- Access to the [Kiwi Hosting Panel](https://gmp.kiwihosting.net).
- A running Minecraft Java Edition server managed through Kiwi Hosting Panel, using Spigot at the minimum.
- Basic understanding of server management.

## Steps to Add Multiple Worlds

### 1. Log in to the Kiwi Hosting Panel

1. Open your web browser and go to the [KiwiHosting Panel](https://gmp.kiwihosting.net).
2. Log in with your Kiwi Hosting Panel credentials.

### 2. Navigate to Your Server

1. From the Kiwi Hosting Panel dashboard, select the Minecraft server you want to configure.
2. Click on the server name to access its management page.

### 3. Stop your server (if running)

1. Press the "Stop" button on the top right of the panel.
   ![Power](/assets/actions/power/stop.png)

### 4. Access the File Manager

1. In the server management interface, navigate to the **File** tab.
2. Locate the `plugins` folder in the root directory of your server files and then go to it.

### 5. Download Multiverse-Core

1. Download Multiverse-Core from [here](https://github.com/Multiverse/Multiverse-Core/releases/latest)
2. Upload the `multiverse-core-x.x.x.jar` file to your plugins folder

### 5. Start your server

2. Go back to the server management interface and start the server to apply the new settings.
   ![Power](/assets/actions/power/start.png)

### 6. Connect to your server and run the following commands as provided

#### Creating new worlds

You can easily create worlds with the following commands:

- **Overworld Dimension**

  - `/mv create <worldname> NORMAL`

- **Nether Dimension**

  - `/mv create <worldname> NETHER`

- **End Dimension**
  - `/mv create <worldname> END`

To use a specific seed, add `-s <seed>` to your command, example: `/mv create <worldname> NORMAL -s <seed>`.

#### Importing worlds

You can import worlds by the following command

- **Overworld Dimension**

  - `/mv import <worldname> NORMAL`

- **Nether Dimension**

  - `/mv import <worldname> NETHER`

- **End Dimension**
  - `/mv import <worldname> END`

Seeds will automatically be handled properly.

#### Teleporting to a world

You can teleport yourself to a world with the command: `/mv tp <world>`
You can teleport other players to a world with the command: `/mv tp <world> <player>`

## Conclusion

By adding more worlds, you open up the possibility to create multiple different experiences, with one server.
