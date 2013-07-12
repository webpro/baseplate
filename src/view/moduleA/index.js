define([
    'backbone',
    './modelA',
    'hgn!./template.html'
], function(Backbone, ModelA, template) {

    return Backbone.View.extend({

        template: template,

        model: new ModelA(),

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template.render(this.model.toJSON()));
        }
    });
});
