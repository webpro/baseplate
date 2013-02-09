define(['lodash'], function(_) {

    "use strict";

    _.templateSettings = {
        interpolate : /\{([\s\S]+?)\}/g
    };

    return _;

});
