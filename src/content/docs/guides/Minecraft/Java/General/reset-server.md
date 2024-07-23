---
title: Complete Server Reset Guide
description: A comprehensive guide to completely resetting your server to default.
---

A comprehensive guide to completely resetting your server to default.

## Introduction

This guide will help you reset your Minecraft server to it's default settings & files.

## Prerequisites

- Access to the [Kiwi Hosting Panel](https://gmp.kiwihosting.net).

## Steps to Reset your Minecraft server

### 1. Log in to the Kiwi Hosting Billing Panel

1. Open your web browser and go to the [KiwiHosting Panel](https://gmp.kiwihosting.net).
2. Log in with your Kiwi Hosting Billing Panel credentials.

### 2. Navigate to Your Server

1. From the Kiwi Hosting Panel dashboard, select the Minecraft server you want to configure.
2. Click on the eye icon of your server to manage its properties.

### 3. Follow the steps from the tutorial below

#### Video Guide

<video width="1280" height="720" autoplay loop muted>
  <source src="/assets/tutorials/reset-java.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

#### Reader Guide

1. Stop your server
![Power](/assets/actions/power/stop.png)
2. In the server management interface, navigate to the **File** tab.
3. Delete all files with the checkbox in the top left of the file manager
![Unchecked](/assets/tutorials/filemanager-checkbox-unchecked.png)
4. Turn it to checked state
![Checked](/assets/tutorials/filemanager-checkbox-checked.png)
5. Delete the files
![Delete](/assets/tutorials/filemanager-delete.png)
6. Navigate to the **Startup** tab.
7. Set "build number" to "latest".
8. Set "minecraft version" to "latest".
9. Set "server jar file" to "server.jar".
10. Set "docker image/java version" to "Java 21".
11. Navigate to the **Settings** tab.
12. Press the **Reinstall Server** button.
![Reinstall](/assets/tutorials/settings-reinstall.png)
13. Start your server.
![Power](/assets/actions/power/start.png)

## Conclusion

By resetting your server, you get a fresh, and brand new start to your server!