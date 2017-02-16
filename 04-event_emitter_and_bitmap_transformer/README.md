![cf](http://i.imgur.com/7v5ASc8.png) 04: EventEmitter and Bitmap Transformer
=====================================

## Code Review

## EventEmitter
  *  **Overview**
    * in NodeJS, we can create custom events that can be used on demand
    * all objects that emit events are instances of the `EventEmitter` class
    * functions are added to custom named events and then emitted through the use of the `.on()` and `.emit()` methods
      * `.on()` lets us register the listeners
      * `.emit()` lets us trigger (emit) the event
    * when an event is emitted all functions attached to the event are called synchronously
      * to get around this you can use `process.nextTick` or `setImmediate`
  * **demo:** event emitter demo
    * [event-emitter-demo](/04-event_emitter_and_bitmap_transformer/demo/event-emitter-demo)

## Working with Binary Data - Part 2
  * **Bases**
    * bases refer to the creation of a new digit, whenever the base "ticks over"
      * **example:** base2 has 2 possible values before it ticks over
        * **binary is base2**, thus only allowing for a **0** and a **1**
      * **base8** (octal) - 8 possible options (0-7)
      * **base10** (decimal) - 10 possible values - (0-9)
      * **base16** (hexidecimal) - 15 possible values (0-f)
        * using the hexidecimal format, we represent numbers that are higher than the number **9** with a letter, starting with **a** and counting up to the letter **f**
    
  * **Hexidecimal Conversion Chart**
    ```
    | Binary         | Hexadecimal    |
    | :------------- | :------------- |
    | 00000000       | 0              |
    | 00000001       | 1              |
    | 00000010       | 2              |
    | 00000011       | 3              |
    | 00000100       | 4              |
    | 00000101       | 5              |
    | 00000110       | 6              |
    | 00000111       | 7              |
    | 00001000       | 8              |
    | 00001001       | 9              |
    | 00001010       | a              |
    | 00001011       | b              |
    | 00001100       | c              |
    | 00001101       | d              |
    | 00001110       | e              |
    | 00001111       | f              |
    ```

## Semantic Versioning
  * semantic versioning is a simple set of rules that dictates how version numbers are assigned and released
    * following proper versioning conventions will help avoid the dreaded "dependency hell"
      * "dependency hell" refers to version lock - this means you cannot safely move your project forward without issues
  * `version [MAJOR].[MINOR].[PATCH]`
    * ex: `version 1.0.0`
    * **MAJOR** - increment the MAJOR version when you have removed or changed a feature and where dependent modules must be modified to work with the new version
    * **MINOR** - increment the MINOR version when a feature has been added but the module is backwards compatible
    * **PATCH** - increment the PATCH version when fixing a bug/defect

## Bitmap Transformer
  * **Project Overview**
    * what is a `.bmp`?
      * raster graphics image file
      * commonly used in older versions of Microsoft Windows
    * how does this project relate to web application development?
      * this project was designed with a few things in mind:
        * working through the process of deconstructing a buffer, manipulating it, and writing it back to a new buffer (or the same buffer, if you choose)
        * working with the file system
        * working with callbacks and the NodeJS "error first" callback pattern
        * working with a self managing team to create, plan, test, and build
        * figuring out creative solutions within a specific problem domain
    * [sample `.bmp`](/04-event_emitter_and_bitmap_transformer/demo/assets/palette-bitmap.bmp)
    * suggested directory structure:
      - **index.js**
      - **lib**
        - bitmap file helper
      - **model**
        - bitmap constructor
        - color constructor
      - **test**
        - bitmap file helper test
        - bitmap constructor test
        - color constructor test
    * **demo:** `.bmp` reader
      * [bitmap-reader.js](/04-event_emitter_and_bitmap_transformer/demo/bitmap-reader.js)

  * **Project Team Selection**
    * TODO: Add Project Teams/Members
