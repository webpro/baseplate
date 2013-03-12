define({

    moduleB: {
        create: {
            module: 'view/moduleB/index',
            args: [{ $ref: 'viewNode' }]
        }
    },

    plugins: [
        { module: 'wire/debug', trace: true },
        { module: 'wire/dom' }
    ]
});
