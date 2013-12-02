define([
    'intern!bdd',
    'intern/chai!expect',
	'src/controller/moduleC/index'
], function(bdd, expect, ModuleC) {

    with (bdd) {

        describe('moduleC', function() {

			var thing;

			beforeEach(function () {
				thing = new ModuleC();
			});

			it('should set a value', function() {

				thing.set('foo', 1);

				var actual = thing.foo;
				var expected = 1;

				expect(actual).to.equal(expected);

			});

			it('should get a value', function() {

				thing.set('bar', 2);

				var actual = thing.get('bar');
				var expected = 2;

				expect(actual).to.equal(expected);

			});
        });
    }
});
