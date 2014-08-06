define(function() {

	var ModuleC = function(){};

	ModuleC.prototype.set = function(key, value) {
		this[key] = value;
		return value;
	};

	ModuleC.prototype.get = function(key) {
		return this[key];
	};

	ModuleC.prototype.unused = function() {
		var foo = Math.random();
		return foo;
	};

	return ModuleC;

});
