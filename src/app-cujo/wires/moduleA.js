// NOTE: We advocate keeping "component-level" wire specs like
// this with their associated component.  For example, we would
// tend to keep moduleA's wire spec in view/moduleA/spec.js or
// something similar.
// Just a suggestion, tho--organize your code in the way that makes
// sense for your team!
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
