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

## Create a new Thing

### Request

`POST /thing/`

    curl -i -H 'Accept: application/json' -d 'name=Foo&status=new' http://localhost:7000/thing

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    {"id":1,"name":"Foo","status":"new"}

## Get a specific Thing

### Request

`GET /thing/id`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 36

    {"id":1,"name":"Foo","status":"new"}

### Resource components
Major resource components supported by the Crossref API are:

- works
- funders
- members
- prefixes
- types
- journals

These can be used alone like this

| resource      | description                       |
|:--------------|:----------------------------------|
| `/works`      | returns a list of all works (journal articles, conference proceedings, books, components, etc), 20 per page
| `/funders`    | returns a list of all funders in the [Funder Registry](https://github.com/Crossref/open-funder-registry)
| `/members` | returns a list of all Crossref members (mostly publishers) |
| `/types`      | returns a list of valid work types |
| `/licenses`  | return a list of licenses applied to works in Crossref metadata |
| `/journals` | return a list of journals in the Crossref database |


### Resource components and identifiers
Resource components can be used in conjunction with identifiers to retrieve the metadata for that identifier.

| resource                    | description                       |
|:----------------------------|:----------------------------------|
| `/works/{doi}`              | returns metadata for the specified Crossref DOI. |
| `/funders/{funder_id}`      | returns metadata for specified funder **and** its suborganizations |
| `/prefixes/{owner_prefix}` | returns metadata for the DOI owner prefix |
| `/members/{member_id}` | returns metadata for a Crossref member |
| `/types/{type_id}` | returns information about a metadata work type |
| `/journals/{issn}` | returns information about a journal with the given ISSN |

### Combining resource components

The works component can be appended to other resources.

| resource                    | description                       |
|:----------------------------|:----------------------------------|
| `/works/{doi}`      | returns information about the specified Crossref `DOI` |
| `/funders/{funder_id}/works`| returns list of works associated with the specified `funder_id` |
| `/types/{type_id}/works` | returns list of works of type `type` |
| `/prefixes/{owner_prefix}/works` | returns list of works associated with specified `owner_prefix` |
| `/members/{member_id}/works` | returns list of works associated with a Crossref member (deposited by a Crossref member) |
| `/journals/{issn}/works` | returns a list of works in the given journal |

### Parameters

### Examples
