define(function() {
	
	// This could be inlined into controller, but I've abstracted here
	// to illustrate how "transform" algorithms like this can be separated
	// for easy unit testing, refactoring, replacement, i.e. overall
	// modularity.
	return function(node) {
		// Returning an array containing two wire specs.  The first is
		// represented as a string--wire will fetch it for us.  The second
		// is represented as an object literal and will be used directly.
		// These two wire specs will be merged together, then the single
		// resulting wire spec will be wired.

		// Note that we're injecting the particular viewNode (see wires/moduleA.js)
		// that will be used for this "instantiation" of the moduleA view
		return ['wires/' + node.getAttribute('data-view-type'), { viewNode: node }];
	};

});