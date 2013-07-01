define([
    'view/moduleA/index'
], function(ModuleA) {

    describe('view/moduleA', function() {

        var viewEl = sandbox();

        var view = new ModuleA({
            el: viewEl
        });

        it('should instantiate view with viewEl as $el', function() {

            expect(view.$el).toBe(viewEl);

        });

    });
});
