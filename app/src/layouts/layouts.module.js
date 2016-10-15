/**
 * @ngdoc overview
 * @name app.layouts
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
        .module('app.layouts', [])
        .config(configuration);

    /* @ngInject */
    function configuration($stateProvider){

        //add your state mappings here
        $stateProvider
            .state('Landing', {
                    url:'/',
                    views: {
                        '@':{
                            templateUrl:'src/layouts/home.html'
                        }
                    }
                }
            )
            /*
             * Pages
             * */
            .state('Prints', {
                    url:'/prints',
                    title: 'PRINTS',
                    views: {
                        '@':{
                            templateUrl:'src/pages/category.html'
                        }
                    }
                }
            )
            .state('Frames', {
                    url:'/frames',
                    title: 'FRAMES',
                    views: {
                        '@':{
                            templateUrl:'src/pages/category.html'
                        }
                    }
                }
            )
            .state('Canvas', {
                    url:'/canvas',
                    title: 'CANVAS',
                    views: {
                        '@':{
                            templateUrl:'src/pages/category.html'
                        }
                    }
                }
            )
            .state('Magnets', {
                    url:'/magnets',
                    title: 'MAGNETS',
                    views: {
                        '@':{
                            templateUrl:'src/pages/category.html'
                        }
                    }
                }
            )
            .state('Photobooks', {
                    url:'/photobooks',
                    title: 'PHOTOBOOKS',
                    views: {
                        '@':{
                            templateUrl:'src/pages/category.html'
                        }
                    }
                }
            )
        ;
    }

}());
