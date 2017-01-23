TECHNOLOGY RADAR
================


Development
-----------

### Install Grunt and Bower

To install Grunt and Bower, you must first download and install [node.js] - which includes npm.

Then, using the command line:

```sh
# install `grunt-cli` globally
npm install -g grunt-cli

# install `bower` globally
npm install -g bower

# navigate to the root of your project, then run
npm install
bower install
```

[node.js]: <https://nodejs.org/>


### Available Grunt tasks

* `test`        A linter tool for identifying and reporting on patterns in JavaScript.
* `stylesheets` Compile stylesheets.
* `javascripts` Compile javascripts.
* `build`       Alias for "test", "javascripts", "stylesheets" tasks.
* `docs`        Alias for "build". After build it creates "docs" folder for GitHub pages.
