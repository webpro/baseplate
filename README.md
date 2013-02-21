# baseplate

## Intro

The baseplate project is some baseline/boilerplate code (hence the name ;-) to quickly get up and running. Especially non-trivial SPA's with a specific architecture and libraries in mind.

I think on one hand it's quite opinionated, on the other hand it should be easy to swap any part (or ignore it, such as the whole SASS & styleguide part).

## Content

### AMD

The baseplate is based on AMD.

### Libraries

The baseplate has [component.json](component.json) ([Bower](http://twitter.github.com/bower)) which installs:

* [RequireJS](http://requirejs.org/)
* [jQuery](http://jquery.com/)
* [Lo-Dash](http://lodash.com/)
* [Backbone](http://backbonejs.org/)
* [when.js](https://github.com/cujojs/when)

### grunt

The baseplate has a [Gruntfile.js](Gruntfile.js) (for [grunt-cli](https://github.com/gruntjs/grunt-cli)) which is pre-configured with:

* [requirejs](https://github.com/gruntjs/grunt-contrib-requirejs)
* [jshint](https://github.com/gruntjs/grunt-contrib-jshint)
* [compass](https://github.com/gruntjs/grunt-contrib-compass)
* [watch](https://github.com/gruntjs/grunt-contrib-watch)

#### Build

To build using the `r.js` optimizer and with minified CSS:

    grunt build

The build configuration is set up to build one file for the 3rd party libraries plus application core, and one file for each application module. The optimized application runs at `/dist/index.html`.

#### Watcher

Changes in JS will trigger jshint, and changes in SASS will trigger Compass compilation for development (incl. sourcemap):

    grunt watch

### CSS

The baseplate contains the bare minimum for working with [SASS](http://sass-lang.com/) & [Compass](http://compass-style.org/). Compass compiles for development (incl. sourcemap), or production (compressed):

    grunt compass:dev

Alternatively, `compass compile` from the root (configured by [config.rb](config.rb)).

### Test

The baseplate works with [Jasmine](http://pivotal.github.com/jasmine/) out of the box. Just start writing tests to the [test config](test/main-test.js), and run them in the browser at `/test`.

Additionally, tests can be watched and executed automatically in connected browsers with [testem](https://github.com/airportyh/testem):

    testem

See testem docs for more options, e.g. to run tests in [browserstack](https://github.com/airportyh/testem/tree/master/examples/browserstack). Or [PhantomJS](https://github.com/airportyh/testem#phantomjs):

    testem ci -l phantomjs

There is some highly experimental behavior testing setup in the `/test/behavior` folder. Essentially, it's Jasmine + jQuery + [jasmine-jquery](https://github.com/velesin/jasmine-jquery). Run the tests in the browser at `/test/behavior`, or:

    testem -t test/behavior/index.html

### Styleguide

With documentation in-line in the SCSS, a styleguide can easily be generated with [kss-node](https://github.com/hughsk/kss-node):

    compass compile && kss-node src/scss styleguide --css src/css/all.css

## Demo app

The baseplate has an example application setup. Everything described above (build, test, etc.) is run on the demo app. This really is a basic, example setup and not ready for complex SPA's. Having said that, it has some interesting ideas/features:

* A smart [AMD configuration](src/demo-app/main.js), supporting:
  * default usage (like ```<script data-main="main" src="require.js"></script>```)
  * extension by other configurations ([main-dev.js](src/demo-app/main-dev.js)), e.g. to load non-minified libraries.
  * reuse by the node build script
* A [proxybox](src/demo-app/core/proxybox.js) module, a "sandbox" for [modules](src/demo-app/view/moduleA/index.js) to use the libraries and build upon.
  * It just proxies `$`, `_`, `Backbone`, and `when` to make them easily accessible with one dependency.
  * This idea can be modified/extended to e.g. create abstractions, adapters, facades, you name it.
* A [core module](src/demo-app/core/view.manager.js) which lazy-loads and installs AMD modules declared in the markup.
  * E.g. ```<div data-view-type="view/moduleA/index"></div>```.
* A few example modules to extend/adapt core libraries, including:
  * [configure Lo-Dash](src/demo-app/core/lib/lodash.js)'s template interpolation (i.e. use `hello {name}` instead of `hello <%= name %>`)
  * [extend Backbone](src/demo-app/core/lib/backbone.js) with [backbone.stickit](http://nytimes.github.com/backbone.stickit/).
* Some example SCSS files, including:
  * [demo comments](src/scss/component/_media.scss) to generate a styleguide
  * a hidden gem: an awesome [grid system](src/scss/_grid.scss) (alpha).

## Installation

Got [Node](http://nodejs.org/) and [npm](https://github.com/isaacs/npm) installed, right? Bower is convenient (but not required):

    npm install -g bower

Otherwise just manually put the libraries you want to use in the `/src/lib` folder.

The following is optional:

    npm install -g grunt-cli
    npm install -g testem
    npm install -g kss
    gem install sass
    gem install compass

Then:

    git clone git://github.com/webpro/baseplate.git
    cd baseplate
    bower install
    npm install

## Outro

The bottom line: the better your desired setup resembles, the more useful this baseplate is.

## License

What?

## Credits

Too many to mention.. All the awesome people behind all the open source goodness that is used in this project: thank you!

## Todo

* Further optimize build by replacing require.js with a smaller loader (and concatenate with built main.js). Since [almond](https://github.com/jrburke/almond) doesn't support dynamic loading of AMD modules, we need something else (e.g. [curl.js](https://github.com/cujojs/curl)).
