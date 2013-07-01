define(['backbone'], function(Backbone) {

    return Backbone.Model.extend({

        defaults: {
            valueA: 3,
            valueB: 4
        },

        url: '.'

    });
});
