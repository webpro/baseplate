define([
    'core/proxybox',
    './modelA',
    'hgn!./template.html'
], function(proxybox, ModelA, template) {

    var Backbone = proxybox.Backbone;

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
