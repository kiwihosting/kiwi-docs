---
title: Minecraft Bedrock Server Properties
description: A comprehensive guide to configuring server properties for Minecraft Bedrock Edition using Kiwi Hosting Panel.
---

Guides lead a user through a specific task they want to accomplish, often with a sequence of steps. Writing a good guide requires thinking about what your users are trying to do.

## Introduction

This guide will walk you through the process of configuring the `server.properties` file for your Minecraft Bedrock Edition server using Kiwi Hosting Panel. This file allows you to customize various settings to enhance your server's gameplay experience.

This guide is for Minecraft Bedrock Edition Version 1.21 but may work on older versions.

## Prerequisites

-   Access to the [Kiwi Hosting Panel](https://gmp.kiwihosting.net).
-   A running Minecraft Bedrock Edition server managed through Kiwi Hosting Panel.
-   Basic understanding of server management.

## Steps to Configure Server Properties

### 1. Log in to the Kiwi Hosting Panel

1. Open your web browser and go to the [KiwiHosting Panel](https://gmp.kiwihosting.net).
2. Log in with your Kiwi Hosting Panel credentials.

### 2. Navigate to Your Server

1. From the Kiwi Hosting Panel dashboard, select the Minecraft server you want to configure.
2. Click on the server name to access its management page.

### 3. Access the File Manager

1. In the server management interface, navigate to the **File** tab.
2. Locate the `server.properties` file in the root directory of your server files.

### 4. Edit the `server.properties` File

1. Click on the `server.properties` file to open it in the editor.
2. Review and modify the following key properties as needed:

-   **server-name**: Sets the name of the server.
    -   Example: `Dedicated Server`
-   **gamemode**: Sets the game mode on the server.
    -   Options: `survival`, `creative`, `adventure`
-   **force-gamemode**: Forces players to join in the default game mode.
    -   Options: `true`, `false`
-   **difficulty**: Sets the game difficulty.
    -   Options: `peaceful`, `easy`, `normal`, `hard`
-   **allow-cheats**: Enables or disables cheat commands.
    -   Options: `true`, `false`
-   **max-players**: Sets the maximum number of players on the server.
    -   Example: `10`
-   **online-mode**: Ensures players are authenticated to Xbox Live.
    -   Options: `true`, `false`
-   **allow-list**: Enables or disables the allowlist.
    -   Options: `true`, `false`
-   **view-distance**: Sets the view distance for players.
    -   Example: `32`
-   **tick-distance**: Sets how many chunks tick away from the player.
    -   Example: `4`
-   **player-idle-timeout**: Sets how long a player can idle before being kicked (in minutes).
    -   Example: `30`
-   **max-threads**: Sets the maximum number of threads the server can use.
    -   Example: `8`
-   **level-name**: Sets the name of the world and folder save.
    -   Example: `Bedrock level`
-   **level-seed**: Sets a world seed for generating the world.
    -   Example: ``
-   **default-player-permission-level**: Sets the default permission level for new players.
    -   Options: `visitor`, `member`, `operator`
-   **texturepack-required**: Prompts players to accept the server texture pack.
    -   Options: `true`, `false`
-   **server-authoritative-movement**: Controls player movement synchronization.
    -   Options: `client-auth`, `server-auth`, `server-auth-with-rewind`
-   **correct-player-movement**: Enables corrections to player positions.
    -   Options: `true`, `false`
-   **server-authoritative-block-breaking**: Controls block mining synchronization.
    -   Options: `true`, `false`

### 5. Save and Apply Changes

1. After making the necessary changes, save the `server.properties` file.
2. Go back to the server management interface and restart the server to apply the new settings.

## Conclusion

By customizing your `server.properties` file through Kiwi Hosting Panel, you can control various aspects of your Minecraft server's gameplay experience. Whether you're setting up a small private server or a large public one, these configurations can help you create the perfect environment for your players
