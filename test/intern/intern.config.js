// Learn more about configuring this file at <https://github.com/theintern/intern/wiki/Configuring-Intern>.
// These default settings work OK for most people. The options that *must* be changed below are the
// packages, suites, excludeInstrumentation, and (if you want functional tests) functionalSuites.
define({
	// The port on which the instrumenting proxy will listen
	proxyPort: 9000,

	// A fully qualified URL to the Intern proxy
	proxyUrl: 'http://localhost:9000/',

	// Default desired capabilities for all environments. Individual capabilities can be overridden by any of the
	// specified browser environments in the `environments` array below as well. See
	// https://code.google.com/p/selenium/wiki/DesiredCapabilities for standard Selenium capabilities and
	// https://saucelabs.com/docs/additional-config#desired-capabilities for Sauce Labs capabilities.
	// Note that the `build` capability will be filled in with the current commit ID from the Travis CI environment
	// automatically
	capabilities: {
		'selenium-version': '2.37.0'
	},

	// Browsers to run integration testing against. Note that version numbers must be strings if used with Sauce
	// OnDemand. Options that will be permutated are browserName, version, platform, and platformVersion; any other
	// capabilities options specified for an environment will be copied as-is
	environments: [
		{ browserName: 'internet explorer', version: '11', platform: 'Windows 8.1' },
		{ browserName: 'internet explorer', version: '10', platform: 'Windows 8' },
		{ browserName: 'internet explorer', version: '9', platform: 'Windows 7' },
		{ browserName: 'firefox', version: '25', platform: [ 'OS X 10.6', 'Windows 7', 'Linux' ] },
		{ browserName: 'chrome', version: '31', platform: 'Windows 7' },
		{ browserName: 'chrome', version: '30', platform: 'Linux' },
		{ browserName: 'chrome', version: '27', platform: 'OS X 10.8' },
		{ browserName: 'safari', version: '6', platform: 'OS X 10.8' }
	],

	// Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
	maxConcurrency: 3,

	// Whether or not to start Sauce Connect before running tests
	useSauceConnect: true,

	// Connection information for the remote WebDriver service. If using Sauce Labs, keep your username and password
	// in the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables unless you are sure you will NEVER be
	// publishing this configuration file somewhere
	webdriver: {
		host: 'localhost',
		port: 4444
	},

	// The desired AMD loader to use when running unit tests (client.html/client.js). Omit to use the default Dojo
	// loader
	useLoader: {
		'host-node': 'requirejs',
		'host-browser': '../../lib/requirejs/require.js'
	},

	// Configuration options for the module loader; any AMD configuration options supported by the specified AMD loader
	// can be used here
	loader: {
		waitSeconds: 30,
		paths: {
			jquery: 'lib/jquery/jquery.min',
			lodash: 'lib/lodash/dist/lodash.min',
			underscore: 'lib/lodash/dist/lodash.min',
			backbone: 'lib/backbone/backbone',
			text: 'lib/requirejs-text/text',
			handlebars: 'lib/handlebars/handlebars.amd',
			hb: 'lib_custom/requirejs-handlebars/hb'
		},
		packages: [
			{ name: 'when', location: '../lib/when', main: './when' }
		]
	},

	// Non-functional test suite(s) to run in each browser
	suites: [ /*'test/intern/specs/modelA.spec',*/ 'test/intern/specs/moduleC.spec' ],

	// Functional test suite(s) to run in each browser once non-functional tests are completed
	functionalSuites: [ /* 'myPackage/tests/functional' */ ],

	// A regular expression matching URLs to files that should not be included in code coverage analysis
	excludeInstrumentation: /^(?:lib|test|node_modules)\//,

	reporters: ['console' /*, 'lcovhtml'*/]
});
