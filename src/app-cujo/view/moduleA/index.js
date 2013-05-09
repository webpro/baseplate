define([
    'backbone',
    'lodash',
    'model/modelA',
    'text!./template.html'
], function(Backbone, _, ModelA, template) {

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
