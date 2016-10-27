/**
 * @ngdoc controller
 * @name app.account.controller:Album
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
        .module('app.account')
        .controller('logoutCtrl', logoutCtrl);

    /* @ngInject */
    function logoutCtrl($state){
        var vm = this;
        //variable assignment
        console.log("landing");

        $state.go('Landing');

    }

}());
