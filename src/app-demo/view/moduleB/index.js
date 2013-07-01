define([
    'backbone',
    './modelB',
    'hgn!./template.html',
    'backbone.stickit'
], function(Backbone, ModelB, template) {

    return Backbone.View.extend({

        template: template,

        model: new ModelB(),

        bindings: {
            'input[name=valueA]': 'valueA',
            'input[name=valueB]': 'valueB'
        },

        events: {
            'submit': 'onSubmit'
        },

        initialize: function() {
            this.render();
            this.stickit();
        },

        render: function() {
            this.$el.html(this.template.render(this.model.toJSON()));
        },

        onSubmit: function(event) {
            event.preventDefault();
            this.model.save();
        }
    });
});
