require(['../../src/main'], function() {
    require.config({
        baseUrl: '../../src',
        packages: [
            { name: 'intern', location: '../node_modules/intern' }
        ],
        map: {
            intern: {
                dojo: 'intern/node_modules/dojo',
                chai: 'intern/node_modules/chai/chai'
            }
        },
        paths: {
            specs: '../test/intern/specs'
        },
        deps: ['intern/client']
    });
});
