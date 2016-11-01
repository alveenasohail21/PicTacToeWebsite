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
    function OrdersCtrl(r_orders, ordersFactory, $timeout, $rootScope){
        var vm = this;
        // vm.getOrders=getOrders;
        vm.orders = r_orders.orders;
        vm.orderToCancel = null;

        vm.openConfirmCancelModal = openConfirmCancelModal;
        vm.cancelOrder = cancelOrder;

        $timeout(function(){
            DataTable.init("#order-history");
        });

        function openConfirmCancelModal(order){
            vm.orderToCancel = order;
            $('#confirmCancelOrderModal').modal({
                keyboard: true
            });
        }

        function cancelOrder(){

            if(vm.orderToCancel){
                ordersFactory.cancelOrder(vm.orderToCancel.id)
                    .then(function(resp){
                        if(resp.success){
                            $rootScope.messageModal = {
                                heading: 'Order has been cancelled',
                                rightBtnText: 'Done',
                                showLeftBtn: false
                            };

                            $('#messageModal').modal({
                                keyboard: true
                            })

                        }
                    })
            }
        }

    }
}());