[![Build Status](https://travis-ci.org/kata-team/technology-radar.svg?branch=master)](https://travis-ci.org/kata-team/technology-radar)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b569c34b3b5d4b7db2fe54d808a0323b)](https://www.codacy.com/app/kata-team/technology-radar?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kata-team/technology-radar&amp;utm_campaign=Badge_Grade)

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

### Local HTTP Server

In order to avoid the `cross origin request` issue, you need an HTTP Server.

```sh
npm start

# http://127.0.0.1:8080
```

### Available Grunt tasks

* `test`        A linter tool for identifying and reporting on patterns in JavaScript.
* `stylesheets` Compile stylesheets.
* `javascripts` Compile javascripts.
* `build`       Alias for "test", "javascripts", "stylesheets" tasks.
* `docs`        Alias for "build". After build it creates "docs" folder for GitHub pages.

[node.js]: <https://nodejs.org/>
