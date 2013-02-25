define(['require'], function(require) {

    return {

        createViews: function(nodes) {

            Array.prototype.forEach.call(nodes, function(node) {
                this.createView(node);
            }.bind(this));

        },

        createView: function(node) {

            var wire = node.getAttribute('data-view-type');

            require(['wire!wires/'+wire], function(context) {
                console.log(context);
            });

        }
    }
});
