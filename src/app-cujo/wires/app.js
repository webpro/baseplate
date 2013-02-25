define({

    views: {
        $ref: 'dom.query![data-view-type]'
    },

    controller: {
        create: 'app/controller',
        init: {
            createViews: { $ref: 'views'}
        }
    },

    plugins: [
        { module: 'wire/debug', trace: true },
        { module: 'wire/dom' }
    ]
});
