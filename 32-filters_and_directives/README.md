![cf](http://i.imgur.com/7v5ASc8.png) 32: Angular Filters & Directives
=====================================

## Filters
  * **Overview**
    * angular gives us the ability to use built-in output filters or the option to create our own
    * filters are used to format the output of an angular expression
    * filters can be used in templates, controllers, or services

  * **Built-in Filter Reference**
    * `date` - formats dates
    * `currency` - formats currency
    * `json` - formats JSON
    * `limitTo` - sets a max limit for items in a list
    * `lowercase` - formats strings to lowercase
    * `uppercase` - formats strings to uppercase

## Custom Directives
  * **Overview**
    * directives are markers on a DOM element (attribute, element, comment, or class) that tell angular to attach specific behavior to a DOM element
    * much like we have been doing with the `component` method, we can create our own directives that contain their own template and associated behavior
    * angular includes many useful built-in directives as well as giving us the ability to create our own
      * this can be done with, or without, the use of the `directive` method

  * **`restrict` Option**
    * the `restrict` option will trigger directives by elements, attributes, classes, or comments - the default option is **attribute** and **element**
    * example usage: in order to trigger a directive **only** based on class name, you would use the `C` option
    * **note**: these options can be clustered together (ex: `EAC` - element, attribute, and class)
    * `restrict` options:
      * `E` - only matches element name
      * `A` - only matches attribute name
      * `C` - only matches class name
      * `M` - only matches comment
      
