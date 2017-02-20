![cf](http://i.imgur.com/7v5ASc8.png) 06: TCP Servers
=====================================

## OSI Model
  * **Overview**
    * Open Systems Interconnection Model
    * conceptual framework (reference model) for how applications communicate over a network
    * splits up the communication system into abstraction layers

  * **Layers** _(starting at lowest level of abstraction)_
    * **Media Layers**
      * **physical** - the transmission and reception of raw bit streams
      * **data link** - the transmission of data between 2 nodes that are connected in the physical layer
      * **network** - the structure and management of a multi-node network (routing and traffic control)

    * **Host Layers**
      * **transport** - the transmission of data segments between points on a network
      * **session** - management of communication sessions (multiple back and forth transmission between 2 nodes)
      * **presentation** - translation of data between a network service and an application (compression, encryption, and decryption)
      * **application** - APIs, resource sharing, remote file access

## Streams
   * **Overview**
    * streams are a interfaces for working with incoming and outgoing data in NodeJS
    * the native NodeJS `stream` module provides a base level API for implementing streams
    * a request to a server is an example stream
    * when working with large sets of data, streams can be broken up into "chunks"
    * streams allow us to send massive amounts of data through a single packet

  * **Types**
    * **readable** - streams for reading data
      * **ex:** `fs.createReadStream()`
    * **writeable** - streams for writing data
      * **ex:** `fs.createWriteStream()`
    * **duplex** - streams that can modify data that is written and read
      * **ex:** network sockets

## TCP
  * **Overview**
    * Transmission Control Protocol
      * the transport layer of the OSI model
    * provides reliable and error checked delivery of stream data (sending data packets over the internet)
    * TCP is guaranteed delivery of packets, unless there is an error, which will also be provided
    * HTTP is implemented on top of TCP
    * we'll be using the NodeJS `net` module to create a simple TCP server
    * **demo:** TCP chat server using sockets  _(duplex stream)_
      * transmission overview:
        * **IP** - computer
        * **PORT** - browser
        * **socket** - browser tab
      * [chat-server](/06-tcp_servers/demo/chat-server)

  * **TCP Chat Server: Visualization Map**
  ![visualization](https://s3-us-west-2.amazonaws.com/s.cdpn.io/154088/tcp.png)
