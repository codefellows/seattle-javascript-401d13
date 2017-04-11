![cf](http://i.imgur.com/7v5ASc8.png) 35: Frontend Application Deployment
=====================================

## Deployment Steps
  * **Code Updates**
    * add the following to your `package.json` file
      * `"engines": { "node": "4.4.7" }`
      * `"start": "node server.js"`
      * `"heroku-postbuild": webpack -p --progress`
    * install `express` as a dependency in your application
      * `npm i -S express`
    * create a simple server for your application
    ``` javascript
    'use strict';

    const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 8080;

    app.use(express.static(`${__dirname}/build`));

    app.listen(PORT, function(){
     console.log('server up:', PORT);
    });
    ```
    * include a simple `.travis.yml` file for running your `karma` tests (in Chrome)
    ``` javascript
      language: node_js
      node_js:
        - 'stable'
      dist: trusty
      sudo: required
      addons:
        apt:
          sources:
            - google-chrome
          packages:
            - google-chrome-stable
      before_script:
        - export DISPLAY=:99.0
        - sh -e /etc/init.d/xvfb start
        - sleep 3
      script:
          - npm run test
    ```

  * **Travis Admin Config**
    * enable your application in Travis
    * include your `API_URL` enviornment variable

  * **Heroku Admin Config**
    * create a new application in Heroku
    * include your `API_URL` and `NODE_ENV` enviornment variables
      * this can be found in the "Settings" tab
      * *reminder:* these are known as **config vars** in Heroku
    * connect your application to GitHub
      * this can be found in the "Deploy" tab
    * enable automatic deployments
      * this should only be enabled for `staging` branch deployments
