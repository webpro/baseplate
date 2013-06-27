define([
    'chai',
    'view/moduleA/modelA'
], function(chai, ModelA) {

    var expect = chai.expect;

    describe('model/modelA', function() {

        var model = new ModelA();

        it('should have a default value', function() {

            var actual = model.get('valueA');
            var expected = 1;

            expect(actual).to.equal(expected);

        });
    });
});
