define([
    'intern!bdd',
    'intern/chai!expect',
    'src/view/moduleA/modelA'
], function(bdd, expect, ModelA) {

    with (bdd) {

        describe('model/modelA', function() {

            var model = new ModelA();

            it('should have a default value', function() {

                var actual = model.get('valueA');
                var expected = 1;

                expect(actual).to.equal(expected);

            });
        });
    }
});
