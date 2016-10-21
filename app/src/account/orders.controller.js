/**
 * @ngdoc controller
 * @name app.account.controller:Account
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
        .module('app.account')
        .controller('OrdersCtrl', OrdersCtrl);

    /* @ngInject */
    function OrdersCtrl(){
        var vm = this;
        // vm.orders=r_orders;
        DataTable.init("#order-history");
    }
}());