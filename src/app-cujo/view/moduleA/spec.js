define({

    moduleA: {
        create: {
            module: 'view/moduleA/index',
            args: [{
                // This `viewNode` is coming from the contextual wiring
                // after the `nodeToViewSpec` transformation.
                el: { $ref: 'viewNode' }
            }]
        },
        destroy: {
            remove: []
        }
    },

    plugins: [
        { module: 'wire/debug', trace: true },
        { module: 'wire/dom' }
    ]
});
