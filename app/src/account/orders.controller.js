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
    function OrdersCtrl(r_orders, ordersFactory, $timeout){
        var vm = this;
        // vm.getOrders=getOrders;
        vm.orders = r_orders.orders;

        console.log(vm.orders);

        $timeout(function(){
            DataTable.init("#order-history");
        });
    }
}());