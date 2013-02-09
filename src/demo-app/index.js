define(['./core/index'], function(core) {

    "use strict";

    var initialize = function() {

        core.ViewManager.parseViews();

    };

    return {
        initialize: initialize
    };

});
