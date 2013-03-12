define(function() {

    var moduleB = function(viewNode) {
        this.viewNode = viewNode;
        this.render();
    };

    moduleB.prototype.render = function() {
        this.viewNode.innerHTML = '<p>Module B</p>';
    };

    return moduleB;

});
