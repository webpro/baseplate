define([
    'backbone',
    './modelA',
    'hb!./template.html'
], function(Backbone, ModelA, template) {

    return Backbone.View.extend({

        template: template,

        model: new ModelA(),

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
});
