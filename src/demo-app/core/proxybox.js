define([
    'jquery',
    'core/lib/lodash',
    'core/lib/backbone',
    'when'
], function($, _, Backbone, when) {

    "use strict";

    // Expose libraries to view modules

    return {
        $: $,
        _: _,
        Backbone: Backbone,
        when: when
    };

});
