# baseplate

The baseplate project provides excellent workflow & tooling to develop, build, and test non-trivial SPAs. Check out the stack below to see if it's for you.

## Overview

The tooling stack is pretty opinionated:

Element | Solution
:-- | :--
Module format | AMD
Module loader | RequireJS
Module builder | RequireJS Optimizer
Package manager | npm & Bower
Build framework | Grunt
Test runner | Testem or Karma
Test framework | Jasmine or Mocha
CSS Preprocessor | SASS, Compass
Styleguide generator | kss-node

The example/dummy application contains the following:

Element | Solution
:-- | :--
JS Stack | Lo-dash, Backbone, jQuery
Template engine | Handlebars
Async helper | when.js
RequireJS plugins | text, handlebars

This application is an example setup for a full SPA. It allows for a layered build (i.e. optimizing one core and separate application modules).

Application modules are lazy loaded using a bit of progressive enhancement and dependency injection.

## Installation

Got [Node](http://nodejs.org/), [npm](https://github.com/isaacs/npm), and [Bower](http://bower.io/) installed, right? Otherwise, please do so first.

Install baseplate and its local dependencies:

    git clone git://github.com/webpro/baseplate
    cd baseplate
    bower install
    npm install

Depending on your targets, you need to install some global dependencies:

    npm install -g grunt-cli        # For build tasks
    npm install -g testem           # For running tests
    npm install -g karma            # Alternative for running tests
    npm install -g intern           # Alternative alternative for running tests
    npm install -g kss              # For creating styleguide
    gem install sass compass        # For compiling SASS

Now, let's see what we've got...

## Grunt

The baseplate has a [Gruntfile.js](Gruntfile.js) (for [grunt-cli](https://github.com/gruntjs/grunt-cli)) which is pre-configured with:

* [requirejs](https://github.com/gruntjs/grunt-contrib-requirejs)
* [jshint](https://github.com/gruntjs/grunt-contrib-jshint)
* [compass](https://github.com/gruntjs/grunt-contrib-compass)
* [watch](https://github.com/gruntjs/grunt-contrib-watch)

### Build

To build using the `r.js` optimizer and with minified CSS:

    grunt build

This build configuration is set up to build the demo application:

* one minified JS file for the 3rd-party libraries plus application core
* one minified JS file for each application module (including [template precompilation](https://github.com/webpro/precompiled-templates)).

The resources are built to `/dist` (demo app runs at `/dist/index.html`).

### Watcher

Changes in JS files will trigger jshint, and changes in SASS files will trigger Compass compilation for development (incl. sourcemap):

    grunt watch

## CSS

The baseplate contains the bare minimum for working with [SASS](http://sass-lang.com/) & [Compass](http://compass-style.org/). Compass compiles for development (incl. sourcemap), or production (compressed):

    grunt compass:dev

Alternatively, use `compass compile` from the root (configured by [config.rb](config.rb)).

## Test

The baseplate works with [Jasmine](http://pivotal.github.com/jasmine/) out of the box. Just start writing tests (and add them to the [test config](test/jasmine/require.config.js)), and run them in the browser at `/test`. As an alternative, [Mocha](http://visionmedia.github.io/mocha/) (plus [Chai](http://chaijs.com/)) is also available.

### Testem

Tests can be watched and executed automatically in connected browsers with [testem](https://github.com/airportyh/testem):

    testem

See testem docs for more options, e.g. to run tests in [browserstack](https://github.com/airportyh/testem/tree/master/examples/browserstack). Or open and close browsers automatically in CI mode (e.g. Chrome, Firefox, and [PhantomJS](https://github.com/airportyh/testem#phantomjs)):

    testem ci

To run tests using Mocha (instead of Jasmine):

    testem -t test/mocha/index.html
    testem ci -f test/mocha/testem.json

### Karma

[Karma](http://karma-runner.github.com/0.8/index.html) (previously Testacular) works similar to testem, and the command to watch files for changes and run the tests automatically in configured browsers is straightforward:

    karma start

There is a code coverage reporter configured already, which gets saved in the `/coverage` folder after running tests. Also see the [using it](https://github.com/karma-runner/karma#using-it) section in the Karma docs, and the Karma [configuration file](karma.conf.js).

To run tests using Mocha (instead of Jasmine):

    karma start test/mocha/karma.conf.js

### Intern

Some experimental browser testing using the Intern test stack is working at `/test/intern/?config=../../test/intern/intern.config`. Does not work in IE8 (IE9 is fine).

### Behavior tests

There is some highly experimental behavior testing setup in the `/test/jasmine-behavior` folder. Essentially, it's Jasmine + jQuery. Run the tests in the browser at `/test/jasmine-behavior`, or from CLI:

    testem -t test/jasmine-behavior/index.html
    testem ci -t test/jasmine-behavior/index.html

Additionally, the same concept is configured using Mocha and expect.js:

    testem -t test/mocha-behavior/index.html
    testem ci -t test/mocha-behavior/index.html

## Styleguide

With documentation in-line in the SCSS, a styleguide can easily be generated with [kss-node](https://github.com/hughsk/kss-node):

    compass compile && kss-node src/scss styleguide --css dist/css/all.css

## Credits

Too many to mention.. All the awesome people behind all the open source goodness that is used in this project: thank you!
