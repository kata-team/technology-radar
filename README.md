[![Build Status](https://travis-ci.org/kata-team/technology-radar.svg?branch=master)](https://travis-ci.org/kata-team/technology-radar)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b569c34b3b5d4b7db2fe54d808a0323b)](https://www.codacy.com/app/kata-team/technology-radar?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kata-team/technology-radar&amp;utm_campaign=Badge_Grade)

TECHNOLOGY RADAR
================

This project is freely based on technology-radar by [ThoughtWorks].


Live demo
---------

Here you can find our live demo so you can explore all features.

https://kata-team.github.io/technology-radar


To-Do List
----------

- [x] Responsive Web Design
- [ ] Search items
    - [x] search by `title` and `description`
    - [ ] filter by `category`
    - [ ] filter by `status`
- [x] Continuous Integration with Travis CI
- [x] [Live demo with GitHub Pages](#github-pages)
- [x] Continuous Delivery
- [x] [Google Spreadsheets integration](#google-spreadsheets-integration)


Development
-----------

To get started, fork the project.

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

### Google Spreadsheets integration

Technology Radar provides a Google Spreadsheets integration, so you can use spreadsheets to storage your data.

Here you can find the example used for our [live demo](#live-demo). Feel free to duplicate the document and make your own.

https://docs.google.com/spreadsheets/d/112MlfyXSlIQ8nae85Te_xWDBP136GRaYeHlDdKgYyPo

### GitHub Pages

The project is a set of html, css and javascript so it can be executed using [GitHub Pages].

We use GitHub Pages to provide you our live demo.


### Travis CI as Continuous Delivery



### Available tasks

* `npm test`          A linter tool for identifying and reporting on patterns in JavaScript.
* `npm start`         Run HTTP Server on http://127.0.0.1:8080.
* `npm run build`     Run "test" and compile "javascripts" and "stylesheets".
* `npm run gh-pages`  Alias for "build". After that, will push changes of the **public** folder to **gh-pages** branch.
* `grunt`             Alias for "build" and "watch".


[node.js]: <https://nodejs.org/>
[ThoughtWorks]: <https://www.thoughtworks.com/radar>
[GitHub Pages]: <https://pages.github.com/>
