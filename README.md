# FoxLearn-BackEnd
The REST API is being used for the project [FoxLearn](https://github.com/team-foxploit/FoxLearn) which is a web based learning environment accomplished with quizzes. 

## API Guide
---
<!-- TOC depthFrom:1 depthTo:2 withLinks:1 updateOnSave:1 orderedList:0 -->

- [REST API](#foxlearn-backend)
	- [Meta](#meta)
	- [API overview](#api-overview)
	- [Results](#results)
	- [Resource components](#resource-components)
	- [Parameters](#parameters)
  - [Examples](#examples)

<!-- /TOC -->

### Meta
#### Important
This REST API is a product of [team-foxploit](https://github.com/team-foxploit) and you may also use for your personal purposes. But for additional purposes such as patrnered business, you should contact before any usage.

#### License
This application is licensed with a [MIT license](https://github.com/team-foxploit/FoxLearn-BackEnd/blob/master/LICENSE)

#### Libraries
  - Node.js/Express
  - MongoDB/Mongoose
  - Jsonwebtoken
  - Mocha
  - morgan

### API Overview
The API is generally RESTFUL and returns results in [structured JSON](#results)
The structure of the API routes is shown below.

- /api/
    - auth/
      - login/
      - user/
      - signup/
      - :{userID}/
    - users/
      - /
      - ...
      - ...
    - quiz/
      - /
      - :{quizID}/

Note: The API supports HTTP and HTTPS. Examples here are provided using HTTP.

### Results

### Resource components

### Parameters

### Examples
