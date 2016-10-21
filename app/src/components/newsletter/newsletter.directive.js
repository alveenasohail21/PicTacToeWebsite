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
        .directive('newsletterDirective', newsletterDirective);

    /* @ngInject */
    function newsletterDirective(){

        return {
            link: link,
            restrict: 'E',
            templateUrl: 'src/components/newsletter/newsletter.html',
            replace: true

        };

        /////////////////////

        function link(scope, elem, attrs){
            function init(){
                console.log("news letter directive");

            }
            init();

        }
    }

}());
