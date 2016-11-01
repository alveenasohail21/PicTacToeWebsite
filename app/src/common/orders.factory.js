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
  function ordersFactory(restFactory, alertFactory, $q){
    const DefaultQueryParams = {
      from: 0,
      size: 9
    };

    return {
      getOrders: getOrders,
      cancelOrder: cancelOrder,
      placeOrder:placeOrder
    };

    ////////////////////

    function getOrders(queryParams){
      globalLoader.show();
      //get all orders
      var deffered = $q.defer();
      var dataToAttachOnUrl = (queryParams)?(queryParams):(DefaultQueryParams);
      restFactory.orders.getOrders(dataToAttachOnUrl).then(function(resp){
        if(resp.success){
          globalLoader.hide();
          // alertFactory.success(null, resp.message);
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
    function placeOrder(projectId, items){
      var deferred = $q.defer();
      globalLoader.show();
      var data = {
        project_id: projectId,
        items: items
      };
      restFactory.orders.placeOrder(data)
          .then(function(resp){
            if(resp.success){
              alertFactory.success(null , resp.message);
              deferred.resolve(resp);
            }
            else{
              alertFactory.error(null, resp.message);
              deferred.reject(resp);
            }
            globalLoader.hide();
          }, function(err){
            alertFactory.error(null, err.data.message);
            globalLoader.hide();
            deferred.reject(err);
          });
      return deferred.promise;
    }

  }

}());
