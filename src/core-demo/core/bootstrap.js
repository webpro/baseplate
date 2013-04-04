define([
    './view.manager.js',
    './proxybox'
], function(ViewManager) {

    // Aggregator for core modules so they are available,
    // and included in build (just by having them in this module's dependency list).

    return function() {
        ViewManager.parseViews();
    };

});
