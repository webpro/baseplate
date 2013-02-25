define({

    wrapper: {
        $ref: 'dom.first!.wrapper'
    },

    views: {
        $ref: 'dom.query![data-view-type]'
    },

    controller: {
        create: 'app/controller',
        properties: {
            // Inject a function that will do what we want: given a node
            // it will first use nodeToViewSpec (see below) to get the associated
            // wire spec module id, then will use the contextual wire function
            // to wire it.  This function returns a promise.  See controller.js
            createView: { compose: 'nodeToViewSpec | wire' }
        },
        init: {
            createViews: { $ref: 'views'}
        },
        // For fun, setup a button that, when clicked, destroys the views
        // See new plugin wire/on below
        on: {
            wrapper: { 'click:.destroy': 'destroy' }
        },
        // To be absolutely bullet-proof, ensure that controller.destroy is called
        // when this context is destroyed.  Depending on the app, this may not be
        // needed at all.  For example, if this context always lives for the lifetime
        // of the enclosing html page.
        destroy: 'destroy'
    },

    // This is a reference to the "local" or "contextual"
    // wire function.  Any context programmatically wired with this will
    // be a child of the current context.
    wire: { $ref: 'wire!' },

    // A function that transforms a node into the module id
    // of a wire spec
    nodeToViewSpec: { module: 'app/nodeToViewSpec' },

    plugins: [
        { module: 'wire/debug', trace: true },
        { module: 'wire/dom' },
        { module: 'wire/on' }
    ]
});
