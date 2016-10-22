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
    function OrdersCtrl(r_orders, ordersFactory){
        var vm = this;
        // vm.getOrders=getOrders;
        vm.orders = r_orders;
        console.log(vm.orders);
        DataTable.init("#order-history");
    }
}());