define(function() {

	// Pipeline function to transform data in the application flow

    return function(node) {

        // The returned array below will be sent to the contextual wire function,
        // where te first is a `spec` (module id), and the second represents `specOverrides`.

		return ['view/' + node.getAttribute('data-view-type') + '/spec', { viewNode: node }];
	};

});