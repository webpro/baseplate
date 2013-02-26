define(['utils'], function(utils) {

    var Backbone = utils.Backbone;

    return Backbone.Model.extend({

        defaults: {
            valueA: 1,
            valueB: 2
        }

    });
});
