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
