---
title: Changing a seed on a server [Non-Multiverse]
description: A comprehensive guide to changing the seed of your server
---

A comprehensive guide to changing the seed of your server

## Introduction

This guide will help you change/rotate the seed of your minecraft world

## Prerequisites

- An account on the [Kiwi Hosting Management Panel](https://gmp.kiwihosting.net).

## Steps to logging into SFTP

### 1. Getting the credentials for your server

1. Go to the [Kiwi Hosting Management Panel](https://gmp.kiwihosting.net)
2. Navigate to your server

### 2. Stop your server

1. Press the "Stop" button on the top right of the panel.
   ![Power](/assets/actions/power/stop.png)

### 3. Modify the seed in `server.properties`

1. Go to the Files tab on your server
2. Go to the `server.properties` file
3. Find the "level-seed" property
4. Change the value to the seed you want (set it to "" if you want to rotate the seed)
5. Save the file
6. Delete the `world` folder (`world`, `world_nether`, `world_the_end` if you are on spigot/paper/purpur etc. This is a required step.)

### 2. Start your server

1. Press the "Start" button on the top right of the panel.
   ![Power](/assets/actions/power/start.png)

## Conclusion

By resetting or setting the seed of your world, you can change how the default generation is handled.
