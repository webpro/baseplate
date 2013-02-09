define([
    'proxybox',
    'model/modelA',
    'text!./template.html'
], function(proxybox, ModelA, template) {

    var Backbone = proxybox.Backbone,
        _ = proxybox._;

	var compiledTemplate = _.template(template);

    return Backbone.View.extend({

        template: compiledTemplate,

        model: new ModelA(),

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });
});
