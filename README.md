# baseplate

## Intro

The baseplate project is a baseline/boilerplate setup to quickly get up and running. It targets non-trivial modular SPA's, and includes basic configuration for development, build, and testing.

## Overview

The base stack is opinionated (yet it should be easy to swap/ignore/remove most elements):

Element | Solution
--- | ---
Module format | AMD
Module loader | RequireJS
Module builder | RequireJS Optimizer
Package manager | npm & Bower
Build framework | grunt
Test runner | Testem or Karma
Test framework | Jasmine
JS Stack | Lo-dash, Backbone, jQuery
CSS Preprocessor | SASS, Compass
Styleguide generator | kss-node

The bare application is based on the above. This could be a start for a full SPA.

Another demo application also includes:

Element | Solution
--- | ---
Template engine | Hogan.js
Async helper | when.js
Backbone data-binding | backbone.stickit
RequireJS plugins | text, hogan

This application setup allows for a layered build (i.e. optimizing one core and separate application modules).

Application modules are lazy loaded using a little bit of progressive enhancement and bootstrapping (see [demo app](#demo-app) for more details). You are encouraged to develop your own mechanism here, or use e.g. wire.js.

The [third demo app](#cujo) is using cujo's wire.js to wire the modules together.

## Installation

Got [Node](http://nodejs.org/) and [npm](https://github.com/isaacs/npm) installed, right? Otherwise, please do so first. Then install whatever you'd like to use:

    npm install -g bower
    npm install -g grunt-cli
    npm install -g testem
    npm install -g karma
    npm install -g kss
    gem install sass compass

Then baseplate and its dependencies can be installed:

    git clone git://github.com/webpro/baseplate.git
    cd baseplate
    bower install
    npm install

## Content

### grunt

The baseplate has a [Gruntfile.js](Gruntfile.js) (for [grunt-cli](https://github.com/gruntjs/grunt-cli)) which is pre-configured with:

* [requirejs](https://github.com/gruntjs/grunt-contrib-requirejs)
* [jshint](https://github.com/gruntjs/grunt-contrib-jshint)
* [compass](https://github.com/gruntjs/grunt-contrib-compass)
* [watch](https://github.com/gruntjs/grunt-contrib-watch)

#### Build

To build using the `r.js` optimizer and with minified CSS:

    grunt build

This build configuration is set up to build the demo application:

* one minified JS file for the 3rd-party libraries plus application core
* one minified JS file for each application module
* one minified CSS file

The resources are built to `/dist` (demo app runs at `/dist/app-demo/index.html`).

The other scenarios have their own build targets:

    grunt requirejs:bare
    grunt requirejs:cujo

#### Watcher

Changes in JS files will trigger jshint, and changes in SASS files will trigger Compass compilation for development (incl. sourcemap):

    grunt watch

### CSS

The baseplate contains the bare minimum for working with [SASS](http://sass-lang.com/) & [Compass](http://compass-style.org/). Compass compiles for development (incl. sourcemap), or production (compressed):

    grunt compass:dev

Alternatively, use `compass compile` from the root (configured by [config.rb](config.rb)).

### Test

The baseplate works with [Jasmine](http://pivotal.github.com/jasmine/) out of the box. Just start writing tests (and add them to the [test config](test/main-test.js)), and run them in the browser at `/test`.

#### Testem

Tests can be watched and executed automatically in connected browsers with [testem](https://github.com/airportyh/testem):

    testem

See testem docs for more options, e.g. to run tests in [browserstack](https://github.com/airportyh/testem/tree/master/examples/browserstack). Or [PhantomJS](https://github.com/airportyh/testem#phantomjs):

    testem ci -l phantomjs

#### Karma

[Karma](http://karma-runner.github.com/0.8/index.html) (previously Testacular) works similar to testem, and the command to watch files for changes and run the tests automatically in configured browsers is straightforward:

    karma start

There is a code coverage reporter configured already, which gets saved in the `/coverage` folder after running tests. Also see the [using it](https://github.com/karma-runner/karma#using-it) section in the Karma docs, and the Karma [configuration file](karma.conf.js).

#### Behavior tests

There is some highly experimental behavior testing setup in the `/test/behavior` folder. Essentially, it's Jasmine + jQuery + [jasmine-jquery](https://github.com/velesin/jasmine-jquery). Run the tests in the browser at `/test/behavior`, or:

    testem -t test/behavior/index.html

### Styleguide

With documentation in-line in the SCSS, a styleguide can easily be generated with [kss-node](https://github.com/hughsk/kss-node):

    compass compile && kss-node src/scss styleguide --css dist/css/all.css

## Demonstration apps

### demo

The baseplate demo application is an example setup. Everything described above (build, test, etc.) is run on this demo app. Some custom concepts include:

* Separation of core and application modules, including a build process that optimizes for this scenario, e.g.:
  * Load the core on each page, and additionally specific application module(s).
  * Load the core, and lazy load application modules (e.g. based on configuration or DOM structure which is unknown upfront so impossible to optimize for into one build file).
* A [sandbox](src/core-demo/core/sandbox.js) module, a simple proxy for [application module](src/app-demo/view/moduleA/index.js)s to use the libraries and build upon.
  * E.g. `$`, `_`, `Backbone`, and `when` are made available with one dependency.
  * This idea can be modified/extended to e.g. create abstractions, adapters, facades, you name it.
* A progressive enhancement [mechanism](src/app-demo/core/view.manager.js) which lazy loads and installs AMD modules declared in the markup.
  * E.g. ```<div data-view-type="view/moduleA/index"></div>```.
* Some example modules to extend/adapt core libraries, including:
  * [Configure Lo-Dash](src/core-demo/core/lodash.js)'s template interpolation (i.e. use `hello {name}` instead of `hello <%= name %>`)
  * Extend Backbone with [backbone.stickit](http://nytimes.github.com/backbone.stickit/).
* Minimal [Backbone.View](src/app-demo/view/moduleA/index.js) and [Backbone.Model](src/app-demo/view/moduleA/modelA.js) examples, including [unit](test/specs/model/modelA.spec.js) and [behavior](test/behavior/moduleA.behavior.js) test.
* Some example SCSS files, including:
  * [Demo comments](src/scss/component/_media.scss) to generate a styleguide
  * A hidden gem: an awesome [grid system](src/scss/_grid.scss) (alpha).

### cujo

Similar to the demo app, but [using](src/app-cujo/context/app.js) cujo's [wire.js](https://github.com/cujojs/wire) to [load and instantiate](src/app-cujo/view/moduleA/spec.js) modules declared in the markup. Also includes a [wire! plugin](src/app-cujo/lib/wire-amd-builder.js) for RequireJS optimized builds.

## Outro

The bottom line: the better your desired setup resembles, the more useful this baseplate is.

## License

What?

## Credits

Too many to mention.. All the awesome people behind all the open source goodness that is used in this project: thank you!

## Todo

* Further optimize build by replacing require.js with a smaller loader (and concatenate with built main.js). Since [almond](https://github.com/jrburke/almond) doesn't support dynamic loading of AMD modules, we need something else (e.g. [curl.js](https://github.com/cujojs/curl)).
