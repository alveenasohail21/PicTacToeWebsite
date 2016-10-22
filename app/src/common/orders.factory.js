/**
 * @ngdoc service
 * @name app.common.photos
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.common')
    .factory('ordersFactory', ordersFactory);

  /* @ngInject */
  function ordersFactory(restFactory, alertFactory){
    const DefaultQueryParams = {
      from: 0,
      size: 9
    };

    return {
      getOrders: getOrders,
      cancelOrder: cancelOrder
    };

    ////////////////////

    function getOrders(queryParams){
      GlobalLoader.show();
      //get all orders
      var deffered = $q.defer();
      var dataToAttachOnUrl = queryParams || DefaultQueryParams;
      restFactory.orders.getOrders(dataToAttachOnUrl).then(function(resp){
        if(resp.success){
          globalLoader.hide();
          alertFactory.success(null, resp.message);
          deffered.resolve(resp.data);
        }
        else{
          globalLoader.hide();
          alertFactory.error(null, resp.message);
          deffered.reject(resp);
        }
      }, function(err){
        globalLoader.hide();
        deffered.reject(err);
      });
      return deffered.promise;
    }

    function cancelOrder(){
      //get cancel an order

      var deffered = $q.defer();
      restFactory.orders.cancelOrder().then(function(resp){
        if(resp.success){
          globalLoader.show();
          alertFactory.success(null, resp.message);
          deffered.resolve(resp.data);
        }
        else{
          globalLoader.hide();
          alertFactory.error(null, resp.message);
          deffered.reject(resp);
        }
      }, function(err){
        globalLoader.hide();
        deffered.reject(err);
      });
      return deffered.promise;
    }

  }

}());
