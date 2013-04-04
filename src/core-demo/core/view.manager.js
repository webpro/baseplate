define(['require', 'jquery', 'lodash', 'when'], function(require, $, _, when) {

    "use strict";

    var dataAttributes = {
        type: 'data-view-type',
        parsed: 'data-view-parsed'
    };

    return {

        /**
         * An example documented method
         *
         * @param $scope
         * @return {*}
         */

        parseViews: function($scope) {
            /*global document:true */

            $scope = $scope || $(document.body);

            var $nodes = this.findSubViewNodes($scope);

            return _.map($nodes, this.createView);

        },

        findSubViewNodes: function($scope) {

            return $scope.find('[' + dataAttributes.type + ']:not([' + dataAttributes.parsed + '])');

        },

        createView: function(node) {

            var $node = $(node);

            var deferred = when.defer();

            var viewType = $node.attr(dataAttributes.type);

            require([viewType], function(ViewDefinition) {

                var viewInstance = new ViewDefinition({
                    el: $node
                });

                deferred.resolve(viewInstance);

            });

            return deferred.promise;

        }

    };

});
