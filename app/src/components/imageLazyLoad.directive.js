/**
 * @ngdoc directive
 * @name app.components.directive:compareTo
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
        .directive('imageLazyLoad', imageLazyLoad);

    /* @ngInject */
    function imageLazyLoad(){

        return {
            restrict: 'A',
            require: 'ngModel',
            link: link,
            scope: {

            }
        };

        /////////////////////

        function link(scope, elem, attrs, ngModel){

        }
    }

}());
