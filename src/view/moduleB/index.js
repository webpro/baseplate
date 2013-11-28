define([
    'backbone',
    './modelB',
    'hb!./template.html'
], function(Backbone, ModelB, template) {

    return Backbone.View.extend({

        template: template,

        model: new ModelB(),

        bindings: {
            'input[name=valueA]': 'valueA',
            'input[name=valueB]': 'valueB'
        },

        events: {
			'change input[name=valueA]': 'onChange',
			'change input[name=valueB]': 'onChange',
            'submit': 'onSubmit'
        },

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
        },

		onChange: function(event) {
			this.model.set(event.target.name, event.target.value);
		},

        onSubmit: function(event) {
            event.preventDefault();
            this.model.save();
        }
    });
});
