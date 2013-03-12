define({

    views: {
        $ref: 'dom.query![data-view-type]'
    },

    controller: {
        create: 'app/controller',
        properties: {
            // Inject a function that is composed of `app/nodeToViewSpec` returning
            // an array of wires (module id, and `viewNode`), which are passed to
            // the wire function (returning a promise). This `viewNode` is passed
            // to that wire spec ($ref).
            createView: { compose: 'nodeToViewSpec | wire' }
        },
        init: {
            createViews: { $ref: 'views'}
        }
    },

    // Injecting wire in context
    wire: { $ref: 'wire!' },

    nodeToViewSpec: { module: 'app/nodeToViewSpec' },

    plugins: [
        { module: 'wire/debug', trace: true },
        { module: 'wire/dom' }
    ]
});
