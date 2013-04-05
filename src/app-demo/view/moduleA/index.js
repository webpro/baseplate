define([
    'core/sandbox',
    './modelA',
    'hgn!./template.html'
], function(sandbox, ModelA, template) {

    var Backbone = sandbox.Backbone;

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
