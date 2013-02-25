define(['wire'], function(wire) {

    return {

        createViews: function(nodes) {

            Array.prototype.forEach.call(nodes, function(node) {
                this.createView(node);
            }.bind(this));

        },

        createView: function(node) {

            var wireId = node.getAttribute('data-view-type');

            wire.load('wires/' + wireId, null, function(context) {
                console.log(context);
            });

        }
    }
});
