# 0x04.Files Manager

A lightweight file management API developed with Express, MongoDB, Redis, Bull, and Node.js.

## Requirements

### Applications

+ Node.js
+ npm the package manager
+ mongoDB
+ reddis


### Environment Variables

The server relies on environment variables configured in a `.env` file. Each line should follow the format `Name=Value`. Below is a table detailing the environment variables used by this server:

| Name | Required | Description |
|:-|:-|:-|
| PORT | No| The port the server should listen on. Default: `5000`. |
| DB_HOST | No | The database host. Default: `localhost`. |
| DB_PORT | No | The database port. Default: `27017`. |
| DB_DATABASE | No | The name of the database. Default: `files_manager`. |
| FOLDER_PATH | No | The local folder where files are stored. Default: `/tmp/files_manager` (Linux, Mac OS X) or `%TEMP%/files_manager` (Windows). |

## Installation

+ Clone the repository and navigate to the cloned directory.
+ Install the necessary packages using either `npm install`.

## Usage

Ensure that Redis and MongoDB services are running on your system. Start the server using `npm run start-server`.

## Authors
[Mohammed Amyne Boutallaght](https://github.com/Yamix27) <br>
[Abdelhamid Maaira](https://github.com/Hmddev23)
