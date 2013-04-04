define([
    'view/moduleA/modelA'
], function(ModelA) {

    describe('model/modelA', function() {

        var model = new ModelA();

        it('should have a default value', function() {

            var actual = model.get('valueA');
            var expected = 1;

            expect(actual).toEqual(expected);

        });
    });
});
