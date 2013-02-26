define([
    'utils',
    'model/modelA',
    'text!./template.html'
], function(utils, ModelA, template) {

    var Backbone = utils.Backbone,
        _ = utils._;

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
