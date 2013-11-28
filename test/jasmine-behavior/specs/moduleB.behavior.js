define([
    'view/moduleB/index'
], function(ModuleB) {

    describe('view/moduleB', function() {

		var viewEl = document.createElement('div');

        var view = new ModuleB({
            el: viewEl
        });

        it('should update the model when view is updated', function() {

            view.$('input[name=valueA]').val('foo').trigger('change');
            view.$('input[name=valueB]').val('bar').trigger('change');

            expect(view.model.toJSON()).toEqual({valueA: 'foo', valueB: 'bar'});

        });

        it('should send JSON representation of model when form is submitted', function() {

            var spyAjax = spyOn(jQuery, 'ajax');

            view.model.save();

            var dataSent = JSON.parse(spyAjax.mostRecentCall.args[0].data);

            expect(dataSent).toEqual(view.model.toJSON());

        });

    });
});
