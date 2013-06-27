// Testacular configuration
// Generated on Sat Feb 16 2013 12:34:54 GMT-0800 (PST)


// base path, that will be used to resolve files and exclude
basePath = '../..';


// list of files / patterns to load in the browser
files = [
    MOCHA,
    MOCHA_ADAPTER,
    REQUIRE,
    REQUIRE_ADAPTER,
    {pattern: 'src/lib/chai/chai.js', included: false},
    'src/app-demo/main.js',
    'test/mocha/require.config.js',
    'test/mocha/require.config.karma.js',
    {pattern: 'src/**/*.js', included: false},
    {pattern: 'test/mocha/specs/**/*.js', included: false}
];

preprocessors = {
    '**/src/app-demo/**/*.js': 'coverage'
};

coverageReporter = {
    type: 'html',
    dir: 'coverage/'
};

// list of files to exclude
exclude = [

];


// test results reporter to use
// possible values: 'dots', 'progress', 'growl', 'junit', 'coverage'
reporters = ['progress', 'coverage'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
