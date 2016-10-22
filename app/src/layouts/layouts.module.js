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
                            templateUrl:'src/layouts/home.html',
                            controller: 'LayoutsCtrl as vm'
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
                    footer: true,
                    views: {
                        '@':{
                            templateUrl:'src/pages/category.html',
                            controller: 'LayoutsCtrl as vm'
                        }
                    }
                }
            )
            .state('Frames', {
                    url:'/frames',
                    title: 'FRAMES',
                    footer: true,
                    views: {
                        '@':{
                            templateUrl:'src/pages/category.html',
                            controller: 'LayoutsCtrl as vm'

                        }
                    }
                }
            )
            .state('Canvas', {
                    url:'/canvas',
                    title: 'CANVAS',
                    footer: true,
                    views: {
                        '@':{
                            templateUrl:'src/pages/category.html',
                            controller: 'LayoutsCtrl as vm'


                        }
                    }
                }
            )
            .state('Magnets', {
                    url:'/magnets',
                    title: 'MAGNETS',
                    footer: true,
                    views: {
                        '@':{
                            templateUrl:'src/pages/category.html',
                            controller: 'LayoutsCtrl as vm'
                        }
                    }
                }
            )
            .state('Photobooks', {
                    url:'/photobooks',
                    title: 'PHOTOBOOKS',
                    footer: true,
                    views: {
                        '@':{
                            templateUrl:'src/pages/category.html',
                            controller: 'LayoutsCtrl as vm'
                        }
                    }
                }
            )
            .state('TermAndConditions', {
                    url:'/termsAndConditions',
                    title: 'Terms And Conditions',
                    footer: true,
                    views: {
                        '@':{
                            templateUrl:'src/pages/termsAndConditions.html'
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


        ;
    }

}());
