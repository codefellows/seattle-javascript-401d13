![cf](http://i.imgur.com/7v5ASc8.png) 07: HTTP and REST APIs
=====================================

## HTTP
  * **Overview**
    * Hyper Text Transfer Protocol
    * the foundation for data communication on the web
    * hypertext is the structured text that uses hyperlinks between nodes that contain text
      * HTTP is the protocol for transfering hypertext

  * **Verbs**
    * HTTP verbs are used to interact with a provided resource _(NOUN)_
    * _note: there are others but we'll be focused on using **GET**, **POST**, **PUT**, and **DELETE** requests in this course_
    * **GET** - request a representation of the specified resource
    * **POST** - request to add a new resource
    * **PUT** - request to update a resource
    * **DELETE** - request to remove a resource

## REST
  * **Overview**
    * Represenational State Transfer
    * the architectural principles of how the web works
    * we use REST in conjunction with HTTP to make calls between two points of a communication channel
    * APIs that adhere to the constraints of the REST architecture are considered to be RESTful
  
  * **REST Constraints**
    * client/server architecture
    * stateless communication
      * each request has no knowledge of any previous request
    * representation - all communication is done through a layer of representation _(ex: JSON)_

## HTTP Servers
  * **Overview**
    * to demonstrate the concepts of how a modern REST API is created, we are going to create a vanilla NodeJS HTTP server with simple GET and POST interactions
    * in addition to the server, we'll be building a vanilla body parsing module that is used to parse JSON based requests
    * our server will be using the native NodeJS `http`, `fs`, `url`, and `querystring` modules
    * _remember:_ the WRRC (web request response cycle) revolves around making a request to a server and the server providing a response
      * we'll be using `req` and `res` objects to access information about the request and the response
        * _note:_ `req` and `res` are just naming conventions (best practice is to use these conventions)

  * **HTTP Status Codes**
    * _note: the following list showcases some of the more common status codes - this is **not** the entire list_

    * **100 - Informational**
      * 100 - continue

    * **200 - Success**
      * 200 - ok
      * 201 - created
      * 202 - accepted
      * 204 - no content

    * **300 - Redirection**
      * 300 - multiple choices
      * 301 - moved permanently
      * 302 - found
      * 304 - not modified
      * 308 - permanent redirect
  
    * **400 - Client Error**
      * 400 - bad request
      * 401 - unauthorized
      * 402 - payment required
      * 403 - forbidden
      * 404 - not found
    
    * **500 - Server Error**
      * 500 - internal server error
      * 501 - not implemented
      * 502 - bad gateway
      * 503 - service unavailable

  * **demo:** vanilla HTTP server with simple GET/POST interactions and a vanilla body parsing module
    * [http-server](www.url.com)

  * **Vanilla HTTP Server Visualization Map**
  ![visualization](https://s3-us-west-2.amazonaws.com/s.cdpn.io/154088/httpserver.png)
