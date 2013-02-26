define({

    moduleA: {
        create: {
            module: 'view/moduleA/index',
            args: [{
                // viewNode must be provided.  See nodeToViewSpec.js.  This
                // viewNode is essentially "passed in" to each instance of a
                // context created when this spec is wired
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
