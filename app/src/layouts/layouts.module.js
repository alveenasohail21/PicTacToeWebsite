/**
 * @ngdoc overview
 * @name app.layouts
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
        .module('app.layouts', [])
        .run(run)
        .config(configuration);

    /* @ngInject */
    function configuration($stateProvider){

        //add your state mappings here
        $stateProvider
            .state('Landing', {
                    url:'/',
                    title: 'Pictaktoe',
                    views: {
                        '@':{
                            templateUrl:'src/layouts/home.html',
                            controller: 'LayoutsCtrl as vm'
                        }
                    },
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
            .state('Faq', {
                    url:'/faq',
                    title: 'FAQ',
                    footer: true,
                    views: {
                        '@':{
                            templateUrl:'src/pages/faq.html'
                        }
                    }
                }
            )
            .state('Contactus', {
                    url:'/contactUs',
                    title: 'Contact Us',
                    footer: true,
                    views: {
                        '@':{
                            templateUrl:'src/pages/contactUs.html'
                        }
                    }
                }
            )
            .state('Aboutus', {
                    url:'/aboutUs',
                    title: 'About Us',
                    footer: true,
                    views: {
                        '@':{
                            templateUrl:'src/pages/aboutUs.html'
                        }
                    }
                }
            )
            .state('Help', {
                    url:'/help',
                    title: 'Help',
                    footer: true,
                    views: {
                        '@':{
                            templateUrl:'src/pages/help.html'
                        }
                    }
                }
            )
            .state('Reset', {
                    url:'/reset/:id',
                    title: 'Reset Password',
                    footer: true,
                    views: {
                        '@':{
                            templateUrl:'src/layouts/home.html'
                        }
                    },
                    resolve:{
                        checkToken: function (authFactory, $stateParams, $state, $rootScope) {
                            authFactory.checkToken($stateParams.id).then(function (response) {
                                if(response.code==200){
                                    $rootScope.token=$stateParams.id;
                                    $('#resetModal').modal('show');
                                }
                                else{
                                    $state.go('Landing');
                                }
                            })
                        }
                    }
            }
            )


        ;
    }
    function run($rootScope, $auth, $state) {
        $rootScope.navigateToPage=function(page){
            var isAuthenticated= $auth.isAuthenticated();
            if(isAuthenticated){
                $state.go(page);
            }
            else{
                $('#loginModal').modal({
                    keyboard: true
                });
            }
        };
    }

}());
