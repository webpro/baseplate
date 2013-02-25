define(['wire', 'when'], function(wire, when) {

    return {

        createViews: function(nodes) {

            // Using when.map here esures that the resolution value of
            // promiseForAllViewContexts will be an actual array of wire contexts,
            // one per view that is created.
            var promiseForAllViewContexts = when.map(nodes, function(node) {
                return this.createView(node);
            }.bind(this));

            // Overwrite destroy to indeed destroy all the views we just created!
            this.destroy = function() {
                this.destroy = noop;
                return when.map(promiseForAllViewContexts, function(viewContext) {
                    return viewContext.destroy();
                });
            }

            // If we return promiseForAllViewContexts here, wire will wait for it to resolve,
            // which, depending on your application may or may not be what you want.
            // For fun, let's return it.
            return promiseForAllViewContexts;

        },

        // Could implement a fallback version of this, or simply make it throw if
        // not overridden, for safety.
        createView: function(node) {},

        // A fallback do-nothing destroy.  Since destroy isn't needed until after
        // createViews has executed, this is fine.
        destroy: noop
    };

    function noop() {}
});
