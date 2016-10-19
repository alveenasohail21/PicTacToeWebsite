/**
 * @ngdoc overview
 * @name app.auth
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
        .module('app.auth', [])
        .config(configuration);

    /* @ngInject */
    function configuration($stateProvider){

        // //add your state mappings here
        // $stateProvider
        //     .state('Login', {
        //             url:'/login',
        //             title: "Pictaktoe - Login",
        //             contentClass: "login",
        //             header: true,
        //             footer: true,
        //             views: {
        //                 "@": {
        //                     templateUrl:'src/layout/main.html'
        //                 },
        //                 "header@Login": {
        //                     templateUrl:'src/layout/appHeader.html',
        //                     controller: 'authCtrl as vm'
        //                 },
        //                 "content@Login": {
        //                     templateUrl:'src/auth/login.html',
        //                     controller: 'authCtrl as vm'
        //                 },
        //                 "footer@Login": {
        //                     templateUrl:'src/layout/footer.html'
        //                 }
        //             }
        //         }
        //     )
        //
        //     .state('Signup', {
        //             url:'/signup',
        //             title: "Pictaktoe - Sign up",
        //             contentClass: "signup",
        //             header: true,
        //             footer: true,
        //             views: {
        //                 "@": {
        //                     templateUrl:'src/layout/main.html'
        //                 },
        //                 "header@Signup": {
        //                     templateUrl:'src/layout/appHeader.html',
        //                     controller: 'authCtrl as vm'
        //
        //                 },
        //                 "content@Signup": {
        //                     templateUrl:'src/auth/signup.html',
        //                     controller: 'authCtrl as vm'
        //                 },
        //                 "footer@Signup": {
        //                     templateUrl:'src/layout/footer.html'
        //                 }
        //             }
        //         }
        //     )
        //
        //     .state('ForgotPassword', {
        //             url:'/forgotpassword',
        //             title: "Forgot Password - Pictaktoe",
        //             contentClass: "forgot-password",
        //             header: true,
        //             footer: true,
        //             views: {
        //                 "@": {
        //                     templateUrl:'src/layout/main.html'
        //                 },
        //                 "header@Signup": {
        //                     templateUrl:'src/layout/appHeader.html',
        //                     controller: 'authCtrl as vm'
        //                 },
        //                 "content@Signup": {
        //                     templateUrl:'src/auth/forgotPassword.html',
        //                     controller: 'authCtrl as vm'
        //                 },
        //                 "footer@Signup": {
        //                     templateUrl:'src/layout/footer.html'
        //                 }
        //             }
        //         }
        //     )
        //
        //     // .state('ResetPassword', {
        //     //     url:'/resetPassword',
        //     //     title: "Reset Password - Pictaktoe",
        //     //     contentClass: "reset-password",
        //     //     header: true,
        //     //     footer: true,
        //     //
        //     //     views: {
        //     //       "@": {
        //     //         templateUrl:'src/layout/main.html'
        //     //       },
        //     //       "header@Signup": {
        //     //         templateUrl:'src/layout/header.html'
        //     //       },
        //     //       "content@Signup": {
        //     //         templateUrl:'src/auth/resetPassword.html',
        //     //         controller: 'authCtrl as vm'
        //     //       },
        //     //       "footer@Signup": {
        //     //         templateUrl:'src/layout/footer.html'
        //     //       }
        //     //     }
        //     //   }
        //     // )
        //     .state('ResetPassword', {
        //             url:'/resetPassword',
        //             params : { token: null },
        //             title: "Reset Password - Pictaktoe",
        //             contentClass: "reset-password",
        //             header: true,
        //             footer: true,
        //             views: {
        //                 "@": {
        //                     templateUrl:'src/layout/main.html'
        //                 },
        //                 "header@Signup": {
        //                     templateUrl:'src/layout/appHeader.html',
        //                     controller: 'authCtrl as vm'
        //                 },
        //                 "content@Signup": {
        //                     templateUrl:'src/auth/resetPassword.html',
        //                     controller: 'authCtrl as vm'
        //                 },
        //                 "footer@Signup": {
        //                     templateUrl:'src/layout/footer.html'
        //                 }
        //             }
        //         }
        //     )

    }

}());
