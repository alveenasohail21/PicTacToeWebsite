/**
 * @ngdoc directive
 * @name app.components.directive:photo
 * @scope true
 * @param {object} test test object
 * @restrict E
 *
 * @description < description placeholder >
 *
 */

(function(){

    'use strict';

    angular
        .module('app.components')
        .directive('cartProjectDirective', cartProjectDirective);

    /* @ngInject */
    function cartProjectDirective($timeout, $rootScope){
        return {
            link: link,
            restrict: 'E',
            templateUrl: 'src/components/cartProject/cart-project.html',
            replace: true,
            scope:{
                project: '='

            }
        };

        /////////////////////

        function link(scope, elem, attrs){

            scope.placeOrder=placeOrder;

            function placeOrder() {
                $rootScope.order = {
                    'projectId': scope.project._id,
                    'items': scope.project.items
                };
                console.log($rootScope.order);
                eventChannel.fire('placeOrder');
            }

            function init(){

            }

            init();

        }
    }

}());
