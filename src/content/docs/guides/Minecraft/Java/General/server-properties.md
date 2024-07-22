---
title: Minecraft Java Server Properties
description: A comprehensive guide to configuring server properties for Minecraft Java Edition using Kiwi Hosting Panel.
---

Guides lead a user through a specific task they want to accomplish, often with a sequence of steps. Writing a good guide requires thinking about what your users are trying to do.

## Introduction

This guide will walk you through the process of configuring the `server.properties` file for your Minecraft Java Edition server using Kiwi Hosting Panel. This file allows you to customize various settings to enhance your server's gameplay experience.

This guide is for Minecraft Version 1.21, but may work on older versions (shouldn't be under 1.17.1)

## Prerequisites

- Access to the [Kiwi Hosting Panel](https://gmp.kiwihosting.net).
- A running Minecraft Java Edition server managed through Kiwi Hosting Panel (recommended using Paper).
- Basic understanding of server management.

## Steps to Configure Server Properties

### 1. Log in to the Kiwi Hosting Panel

1. Open your web browser and go to [gmp.kiwihosting.net](https://gmp.kiwihosting.net).
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

- **accepts-transfers**: Allows servers to accept incoming transfers via a transfer packet.
    - false - Incoming transfers are rejected, and the player is disconnected.
    - true - Incoming transfers are allowed, and the server must approve it.
- **allow-flight**: Allows users to use flight on the server while in Survival mode, if they have a mod that provides flight installed.
    - false - Flight is not allowed (players in air for at least 5 seconds get kicked).
    - true - Flight is allowed, and used if the player has a fly mod installed.
- **allow-nether**: Allows players to travel to the Nether.
    - false - Nether portals do not work.
    - true - The server allows portals to send players to the Nether.
- **broadcast-console-to-ops**: Send console command outputs to all online operators.
- **broadcast-rcon-to-ops**: Send rcon console command outputs to all online operators.
- **difficulty**: Defines the difficulty (such as damage dealt by mobs and the way hunger and poison affects players) of the server.
    - peaceful (0)
    - easy (1)
    - normal (2)
    - hard (3)
- **enable-command-block**: Enables command blocks.
- **enable-jmx-monitoring**: Exposes an MBean with the Object name net.minecraft.server:type=Server and two attributes averageTickTime and tickTimes exposing the tick times in milliseconds.
- **enable-rcon**: Enables remote access to the server console.
- **enable-status**: Makes the server appear as "online" on the server list.
- **enable-query**: Enables GameSpy4 protocol server listener. Used to get information about server.
- **enforce-secure-profile**: If set to true, players without a Mojang-signed public key cannot connect to the server.
- **enforce-whitelist**: Enforces the whitelist on the server.
    - false - No user gets kicked if not on the whitelist.
    - true - Online users not on the whitelist get kicked.
- **entity-broadcast-range-percentage**: Controls how close entities need to be before being sent to clients. Higher values means they'll be rendered from farther away, potentially causing more lag. This is expressed the percentage of the default value. For example, setting to 50 makes it half as usual.
- **force-gamemode**: Force players to join in the default game mode.
    - false - Players join in the gamemode they left in.
    - true - Players always join in the default gamemode.
- **function-permission-level**: Sets the default permission level for functions.
- **gamemode**: Defines the mode of gameplay.
    - survival (0)
    - creative (1)
    - adventure (2)
    - spectator (3)
- **generate-structures**: Defines whether structures (such as villages) can be generated.
    - false - Structures are not generated in new chunks.
    - true - Structures are generated in new chunks.
- **generator-settings**: The settings used to customize world generation. Follow its format and write the corresponding JSON string. Remember to escape all : with \:.
- **hardcore**: If set to true, server difficulty is ignored and set to hard and players are set to spectator mode if they die.
- **hide-online-players**: If set to true, a player list is not sent on status requests.
- **initial-disabled-packs**: Comma-separated list of datapacks to not be auto-enabled on world creation.
- **initial-enabled-packs**: Comma-separated list of datapacks to be enabled during world creation. Feature packs need to be explicitly enabled.
- **level-name**: The "level-name" value is used as the world name and its folder name. The player may also copy their saved game folder here, and change the name to the same as that folder's to load it instead.
- **level-seed**: Sets a world seed for the player's world, as in Singleplayer. The world generates with a random seed if left blank.
- **level-type**: Determines the world preset that is generated.
    - minecraft:normal - Standard world with hills, valleys, water, etc.
    - minecraft:flat - A flat world with no features, can be modified with generator-settings.
    - minecraft:large_biomes - Same as default but all biomes are larger.
    - minecraft:amplified - Same as default but world-generation height limit is increased.
    - minecraft:single_biome_surface - A buffet world which the entire overworld consists of one biome, can be modified with generator-settings.
- **log-ips**: If set to false client IP addresses are not shown in log messages printed to the server console or the log file.
- **max-chained-neighbor-updates**: Limiting the amount of consecutive neighbor updates before skipping additional ones. Negative values remove the limit.
- **max-players**: The maximum number of players that can play on the server at the same time. Note that more players on the server consume more resources.
- **max-tick-time**: The maximum number of milliseconds a single tick may take before the server watchdog stops the server with the message.
    - -1 - disable watchdog entirely.
- **max-world-size**: This sets the maximum possible size in blocks, expressed as a radius, that the world border can obtain.
- **motd**: This is the message that is displayed in the server list of the client, below the name.
- **network-compression-threshold**: By default it allows packets that are n-1 bytes big to go normally, but a packet of n bytes or more gets compressed down.
    - -1 - disable compression entirely.
    - 0 - compress everything.
- **online-mode**: Server checks connecting players against Minecraft account database.
    - true - Enabled. The server assumes it has an Internet connection and checks every connecting player.
    - false - Disabled. The server does not attempt to check connecting players.
- **op-permission-level**: Sets the default permission level for ops when using /op.
- **player-idle-timeout**: If non-zero, players are kicked from the server if they are idle for more than that many minutes.
- **prevent-proxy-connections**: If the ISP/AS sent from the server is different from the one from Mojang Studios' authentication server, the player is kicked.
- **pvp**: Enable PvP on the server.
    - true - Players can kill each other.
    - false - Players cannot kill other players.
- **query.port**: Sets the port for the query server.
- **rate-limit**: Sets the maximum amount of packets a user can send before getting kicked. Setting to 0 disables this feature.
- **rcon.password**: Sets the password for RCON: a remote console protocol that can allow other applications to connect and interact with a Minecraft server over the internet.
- **rcon.port**: Sets the RCON network port.
- **region-file-compression**: Changes the algorithm for the compression of chunks in regions. Can be deflate, lz4, or none.
- **resource-pack**: Optional URI to a resource pack. The player may choose to use it.
- **resource-pack-id**: Optional UUID for the resource pack set by resource-pack to identify the pack with clients.
- **resource-pack-prompt**: Optional, adds a custom message to be shown on resource pack prompt when require-resource-pack is used.
- **resource-pack-sha1**: Optional SHA-1 digest of the resource pack, in lowercase hexadecimal. It is recommended to specify this, because it is used to verify the integrity of the resource pack.
- **require-resource-pack**: When this option is enabled (set to true), players are prompted for a response and get disconnected if they decline the required pack.
- **server-ip**: The player should set this if they want the server to bind to a particular IP.
- **server-port**: Changes the port the server is hosting (listening) on. This port must be forwarded if the server is hosted in a network using NAT.
- **simulation-distance**: Sets the maximum distance from players that living entities may be located in order to be updated by the server, measured in chunks in each direction of the player (radius, not diameter).
- **snooper-enabled**: Sets whether the server sends snoop data regularly to http://snoop.minecraft.net.
    - false - disable snooping.
    - true - enable snooping.
- **spawn-animals**: Determines if animals can spawn.
    - true - Animals spawn as normal.
    - false - Animals immediately vanish.
- **spawn-monsters**: Determines if monsters can spawn.
    - true - Enabled. Monsters appear at night and in the dark.
    - false - Disabled. No monsters.
- **spawn-npcs**: Determines whether villagers can spawn.
    - true - Enabled. Villagers spawn.
    - false - Disabled. No villagers.
- **spawn-protection**: Determines the side length of the square spawn protection area as 2x+1.
- **sync-chunk-writes**: Enables synchronous chunk writes.
- **text-filtering-config**: [more information needed]
- **use-native-transport**: Linux server performance improvements: optimized packet sending/receiving on Linux.
    - true - Enabled. Enable Linux packet sending/receiving optimization.
    - false - Disabled. Disable Linux packet sending/receiving optimization.
- **view-distance**: Sets the amount of world data the server sends the client, measured in chunks in each direction of the player (radius, not diameter).
- **white-list**: Enables a whitelist on the server.
    - false - No white list is used

### 5. Save and Apply Changes

1. After making the necessary changes, save the `server.properties` file.
2. Go back to the server management interface and restart the server to apply the new settings.
![Power](/assets/actions/power/restart.png)

## Conclusion

By customizing your `server.properties` file through Kiwi Hosting Panel, you can control various aspects of your Minecraft server's gameplay experience. Whether you're setting up a small private server or a large public one, these configurations can help you create the perfect environment for your players.
