---
title: Minecraft Java Server World Reset
description: A comprehensive guide to resetting worlds to a Minecraft server.
---

A comprehensive guide to resetting worlds to a Minecraft server.

## Introduction

This guide will walk you through the process of resetting worlds to a Minecraft server.

## Prerequisites

-   Access to the [Kiwi Hosting Panel](https://gmp.kiwihosting.net).
-   A running Minecraft Java Edition server managed through Kiwi Hosting Panel, using Spigot at the minimum.
-   Basic understanding of server management.

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

#### If you are using Vanilla server software

##### To delete the Overworld, Nether, and End dimensions follow this guide

1. Delete the `world `folder

##### To delete a specific Nether or End dimension, follow this guide

###### For resetting the Nether

1. Go into the `world` folder
2. Delete the `DIM-1` folder

###### For resetting the End

1. Go into the `world` folder
2. Delete the `DIM1` folder

#### If you are using Paper server software

##### To delete the Overworld, Nether, and End dimensions follow this guide

1. Delete the `world` folder

##### To delete a specific Nether or End dimension, follow this guide

###### For resetting the Nether

1. Delete the `world_nether` folder

###### For resetting the End

1. Delete the `world_the_end` folder

## Conclusion

By resetting a specific dimension, or all worlds, you get a brand new world to play with!
