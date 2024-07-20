---

title: Minecraft Server Properties
description: A comprehensive guide to configuring server properties for Minecraft Java Edition using KiwiPanel.

---

Guides lead a user through a specific task they want to accomplish, often with a sequence of steps. Writing a good guide requires thinking about what your users are trying to do.

## Introduction

This guide will walk you through the process of configuring the `server.properties` file for your Minecraft Java Edition server using KiwiPanel. This file allows you to customize various settings to enhance your server's gameplay experience.

## Prerequisites

- Access to KiwiPanel at [gmp.kiwihosting.net](https://gmp.kiwihosting.net).
- A running Minecraft Java Edition server managed through KiwiPanel.
- Basic understanding of server management.

## Steps to Configure Server Properties

### 1. Log in to KiwiPanel

1. Open your web browser and go to [gmp.kiwihosting.net](https://gmp.kiwihosting.net).
2. Log in with your KiwiPanel credentials.

### 2. Navigate to Your Server

1. From the KiwiPanel dashboard, select the Minecraft server you want to configure.
2. Click on the server name to access its management page.

### 3. Access the File Manager

1. In the server management interface, navigate to the **File Manager** tab.
2. Locate the `server.properties` file in the root directory of your server files.

### 4. Edit the `server.properties` File

1. Click on the `server.properties` file to open it in the editor.
2. Review and modify the following key properties as needed:

   - **max-players**: The maximum number of players that can join your server. Adjust this number based on your server's capacity and player base.
   - **motd**: The message of the day displayed in the server list. This is a short message that players see when they browse for servers. You can use color codes and formatting to make it stand out.
     ```properties
     motd=Welcome to my Minecraft server! &6Enjoy your stay!
     ```
   - **difficulty**: The difficulty level of the server. Options include `peaceful`, `easy`, `normal`, and `hard`. This setting affects the challenge level of the game, such as mob strength and hunger effects.
     ```properties
     difficulty=normal
     ```
   - **gamemode**: The default game mode for players. Options are `survival`, `creative`, `adventure`, and `spectator`. This setting determines how players interact with the world.
     ```properties
     gamemode=survival
     ```
   - **spawn-protection**: The radius (in blocks) around the spawn point that is protected from building or destroying. This helps prevent griefing in the spawn area.
     ```properties
     spawn-protection=16
     ```
   - **online-mode**: Determines whether the server requires players to authenticate through Mojang's servers. Set to `true` for online mode or `false` for offline mode.
     ```properties
     online-mode=true
     ```
   - **pvp**: Enables or disables player versus player combat.
     ```properties
     pvp=true
     ```
   - **view-distance**: Sets the amount of world data the server sends to players, measured in chunks in each direction. Higher values provide a larger view but require more resources.
     ```properties
     view-distance=10
     ```
   - **allow-nether**: Enables or disables the Nether dimension.
     ```properties
     allow-nether=true
     ```
   - **enable-command-block**: Enables or disables the use of command blocks.
     ```properties
     enable-command-block=false
     ```

### 5. Save and Apply Changes

1. After making the necessary changes, save the `server.properties` file.
2. Go back to the server management interface and restart the server to apply the new settings.

### 6. Verify Your Changes

1. Once the server has restarted, join your Minecraft server to verify that the changes have been applied correctly.
2. Check the server's MOTD, player limit, game mode, and other settings to ensure they reflect your modifications.

## Conclusion

By customizing your `server.properties` file through KiwiPanel, you can control various aspects of your Minecraft server's gameplay experience. Whether you're setting up a small private server or a large public one, these configurations can help you create the perfect environment for your players.

## Further Reading

- Explore more [Minecraft server setup guides](https://minecraft.fandom.com/wiki/Tutorials/Setting_up_a_server) on the Minecraft Wiki.
- Visit the [official Minecraft Wiki](https://minecraft.fandom.com/wiki/Server.properties) for a comprehensive list of all available server properties and their descriptions.
