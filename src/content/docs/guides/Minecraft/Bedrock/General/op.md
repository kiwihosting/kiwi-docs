---
title: How to Give a Player Operator Status in Minecraft Bedrock Edition
description: A step-by-step guide to giving a player operator status on your Minecraft Bedrock Edition server using Kiwi Hosting Panel.
---

Guides lead a user through a specific task they want to accomplish, often with a sequence of steps. Writing a good guide requires thinking about what your users are trying to do.

## Introduction

This guide will walk you through the process of giving a player operator (op) status on your Minecraft Bedrock Edition server using Kiwi Hosting Panel. Granting operator status allows players to use server commands that can help manage and enhance the server gameplay experience.

This guide is for Minecraft Bedrock Edition Version 1.21 but may work on older versions.

## Prerequisites

- Access to the [Kiwi Hosting Panel](https://gmp.kiwihosting.net).
- A running Minecraft Bedrock Edition server managed through Kiwi Hosting Panel.
- Basic understanding of server management.
- The player you want to op must be online on the server.

## Steps to Give a Player Operator Status

### 1. Log in to the Kiwi Hosting Panel

1. Open your web browser and go to the [Kiwi Hosting Panel](https://gmp.kiwihosting.net).
2. Log in with your Kiwi Hosting Panel credentials.

![Login Page](/assets/info/login.png)

### 2. Navigate to Your Server

1. From the Kiwi Hosting Panel dashboard, select the Minecraft server you want to configure.
2. Click on the server name to access its management page.

![Server Selection](/assets/tutorials/manageserver.png)

### 3. Access the Console

1. In the server management interface, navigate to the **Console** tab.
2. This will open the server console where you can enter commands.

![Console Tab](/assets/tutorials/console.png)

### 4. Enter the Command to Give Operator Status

:::note
The player you want to op must be online on the server.
:::

1. In the console, type the following command to give a player operator status:
   ```
   op <playername>
   ```
   Replace `<playername>` with the username of the player you want to make an operator.

![Command](/assets/tutorials/bedrock/op.png)
![Command Results](/assets/tutorials/bedrock/opr.png)

### 5. Verify the Player's Operator Status

1. The player should now have operator status. You can verify this by asking the player to use an operator command, such as `/gamemode creative`, to ensure they have the necessary permissions, or you can go to the pause menu and look for your player.

![Pause Menu Operator Status](/assets/tutorials/bedrock/ops.png)

## Conclusion

By following these steps, you can easily give a player operator status on your Minecraft Bedrock Edition server using Kiwi Hosting Panel. This allows trusted players to assist in managing the server and enhancing the gameplay experience for all users.
