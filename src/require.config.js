require.config({
    paths: {
        jquery: '../lib/jquery/jquery.min',
        lodash: '../lib/lodash/dist/lodash.min',
		underscore: '../lib/lodash/dist/lodash.min',
        backbone: '../lib/backbone/backbone',
        text: '../lib/requirejs-text/text',
        handlebars: '../lib/handlebars/handlebars.amd',
        hb: '../lib_custom/requirejs-handlebars/hb'
    },
    packages: [
        { name: 'when', location: '../lib/when', main: './when' }
    ]
});
