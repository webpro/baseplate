require(['./require.config'], function() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-moduleId]'), function(element) {
        require([element.getAttribute('data-moduleId')], function(ModuleDefinition) {
            new ModuleDefinition({el: element});
        });
    });
});
