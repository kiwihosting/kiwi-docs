---
title: Logging into SFTP
description: A comprehensive guide to logging in SFTP
---

A comprehensive guide to logging in SFTP

## Introduction

This guide will help you login to your server and access it's files from your computer.

## Prerequisites

- An account on the [Kiwi Hosting Management Panel](https://gmp.kiwihosting.net).

## Steps to logging into SFTP

### Using [WinSCP](https://winscp.net/eng/download.php)

You will need [WinSCP](https://winscp.net/eng/download.php) for this tutorial, this is a Windows only SFTP application.

#### 1. Getting the credentials for your server

1. Go to the [Kiwi Hosting Management Panel](https://gmp.kiwihosting.net)
2. Navigate to your server
3. Click on the Settings Button
4. Locate the SFTP Login credentials
5. Copy the SFTP Address and Username

#### 2. Adding the credentials to WinSCP

1. Open WinSCP
2. Add a new site with the Host name as the SFTP Address and username as provided on the Settings Page
   ![Sites](/assets/tutorials/winscp-sites.png)
3. Enter your Management Panel password as the password for the new site
4. Click Save and "Save Password" option, then click OK
   ![Save Site](/assets/tutorials/winscp-save-site.png)

#### 3. Logging the server

1. Press the Login Button
2. Enter any credentials if it asks for them

### Using [FileZilla](https://filezilla-project.org/download.php?type=client)

You will need [FileZilla](https://filezilla-project.org/download.php?type=client) for this tutorial

#### 1. Getting the credentials for your server

1. Go to the [Kiwi Hosting Management Panel](https://gmp.kiwihosting.net)
2. Navigate to your server
3. Click on the Settings Button
4. Locate the SFTP Login credentials
5. Copy the SFTP Address and Username

#### 2. Adding the credentials to FileZilla

1. Open FileZilla
2. Click the Site Manager icon
   ![Site Manager](/assets/tutorials/filezilla-site-manager.png)
3. Enter your Management Panel password as the password for the new site
   ![Site Manager Window](/assets/tutorials/filezilla-site-manager-window.png)
4. Clic the "Connect" button

### Using [Cyberduck](https://cyberduck.io/download/)

You will need [Cyberduck](https://cyberduck.io/download/) for this tutorial

#### 1. Getting the credentials for your server

1. Go to the [Kiwi Hosting Management Panel](https://gmp.kiwihosting.net)
2. Navigate to your server
3. Click on the Settings Button
4. Locate the SFTP Login credentials
5. Copy the SFTP Address and Username

#### 2. Adding the credentials to Cyberduck

1. Open Cyberduck
2. Click the New Connection button
   ![Cyberduck Window](/assets/tutorials/cyberduck-window.png)
3. Switch the "FTP" mode to "SFTP"
   ![Cyberduck Connection Window](/assets/tutorials/cyberduck-connection-window.png)
4. Enter your Management Panel password as the password for the new site
5. Click the "Connect" button

## Conclusion

By logging into the server with SFTP, you can upload folders, large files, and much more.
