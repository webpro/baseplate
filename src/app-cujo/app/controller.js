define(['when'], function(when) {

    return {

        createViews: function(nodes) {

            // If we return a promise here, wire will wait for it to resolve,
            // which, depending on your application may or may not be what you want.
            // For fun, let's return it.

            return when.map(nodes, this.createView);

        },

        createView: function(node) {
            throw new Error('The "createView" method should be overridden');
        }
    };
});
