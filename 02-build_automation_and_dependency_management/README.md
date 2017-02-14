![cf](http://i.imgur.com/7v5ASc8.png) 02: Build Automation and Dependency Management
=====================================

## NPM (Node Package Manager)
  * **Overview**
    * `package.json`
      * provides information about our app
      * automate creation using `npm init -y`
    * install new package: `npm i package-name`
      * common flags:
        * `--global` or `-g` - install package globally
        * `--save` or `-S` - save as an app level dependency
        * `--save-dev` or `-D` - save as developer dependency
      * multiple packages can be installed by separating each package name with a space
        * `npm i package-name another-package and-another`

  * **Publishing Packages on NPM**
    * add a user: `npm adduser`
    * run `npm config ls` to ensure your user was created successfully
    * you can now publish packages with `npm publish`

## GulpJS
  * **Overview**  
    * JS task runner and automation tool
    * built around a strong ecosystem of available plugins
    * highly useful for automation of common tasks (linting, testing, etc)
    * global install: `npm i -g gulp-cli`
    * local install: `npm i -D gulp`

  * **Creating a `gulpfile.js`**
    * **demo:** adding a `gulpfile.js` to our `hello-world` app
      * [hello-world-gulp](/02-build_automation_and_dependency_management/demo/hello-world-gulp)
    * general setup process:
      * `require` gulp and task plugins: `gulp`, `gulp-eslint`, `gulp-mocha`
      * setup globs and add tasks: `lint`, `test`, and `default`
        * review docs for using `gulp-eslint`
        * review docs for using `gulp-mocha`
      * add a `dev` task - this runs the default task when a file is saved (`watch` for changes)

## ChaiJS
  * **Overview**
    * assertion library with rich BDD language chains
    * works well with MochaJS
    * [documentation overview](http://chaijs.com/api/)

  * **Working with `expect`**
    * language chains overview
    * **demo:** refactoring our `hello-world` app tests
      * [hello-world-expect-tests](/02-build_automation_and_dependency_management/demo/hello-world-expect-tests)
