define([
	'src/controller/moduleC/index'
], function(ModuleC) {

	buster.spec.expose();
	expect = buster.expect;

	describe('moduleC', function() {

		var thing;

		beforeEach(function () {
			thing = new ModuleC();
		});

		it('should set a value', function() {

			thing.set('foo', 1);

			var actual = thing.foo;
			var expected = 1;

			expect(actual).toEqual(expected);

		});

		it('should get a value', function() {

			thing.set('bar', 2);

			var actual = thing.get('bar');
			var expected = 2;

			expect(actual).toEqual(expected);

		});
	});

});
