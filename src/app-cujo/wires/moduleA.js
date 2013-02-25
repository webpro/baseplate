define({

    moduleA: {
        create: {
            module: 'view/moduleA/index',
            args: [{
                el: {
                    $ref: 'dom.first![data-view-type="moduleA"]'
                }
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
