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
            .state('Projectmanagement', {
                    url:'/projectManagement',
                    title: 'PROJECT MANAGMENT',
                    views: {
                        '@':{
                            templateUrl:'src/pages/projectManagement.html'
                        }
                    }
                }
            )
            .state('Albummanagement', {
                    url:'/albumManagement',
                    title: 'ALBUM MANAGMENT',
                    views: {
                        '@':{
                            templateUrl:'src/pages/albumManagement.html'
                        }
                    }
                }
            )
            .state('Photomanagement', {
                    url:'/photoManagement',
                    title: 'PHOTO MANAGEMENT',
                    views: {
                        '@':{
                            templateUrl:'src/pages/photoManagement.html'
                        }
                    }
                }
            )
            .state('Accountedit', {
                    url:'/account-edit',
                    title: 'ACCOUNT',
                    views: {
                        '@':{
                            templateUrl:'src/pages/account.html'
                        }
                    }
                }
            )
            .state('Accountinformation', {
                    url:'/account-info',
                    title: 'ACCOUNT INFORMATION',
                    views: {
                        '@':{
                            templateUrl:'src/pages/accountInformation.html'
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
            .state('TermAndConditions', {
                    url:'/termsAndConditions',
                    title: 'Terms And Conditions',
                    views: {
                        '@':{
                            templateUrl:'src/pages/termsAndConditions.html'
                        }
                    }
                }
            )

        ;
    }

}());
