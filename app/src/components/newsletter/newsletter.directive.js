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
    function newsletterDirective(restFactory, alertFactory){

        return {
            link: link,
            restrict: 'E',
            templateUrl: 'src/components/newsletter/newsletter.html',
            replace: true,
            scope:{
                
            }

        };

        /////////////////////

        function link(scope, elem, attrs){

            scope.subscribe = subscribe;

            function subscribe(email) {
                restFactory.subscribers.add(email)
                    .then(function(resp){
                        if(resp.success){
                            globalLoader.hide();
                            scope.responseMessage = resp.message;
                            // alertFactory.success(null, resp.message);
                            $('#newsletterSubscribeModal').modal({
                                keyboard: true
                            });
                        }
                        else{
                            globalLoader.hide();
                            scope.responseMessage = resp.message;
                            // alertFactory.error(null, resp.message);
                            $('#newsletterSubscribeModal').modal({
                                keyboard: true
                            });
                        }
                        scope.email = null;
                    }, function(err){
                        globalLoader.hide();
                        alertFactory.error(null, 'Unable to process the request right now, try again later');
                    })

            }

        }
    }

}());
