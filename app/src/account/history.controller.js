/**
 * @ngdoc controller
 * @name app.account.controller:Account
 * @description < description placeholder >
 */

(function(){

    'use strict';

    angular
        .module('app.account')
        .controller('HistoryCtrl', HistoryCtrl);

    /* @ngInject */
    function HistoryCtrl(r_orders){
        var vm = this;
        vm.orders=r_orders;
        DataTable.init("#order-history");
    }
}());