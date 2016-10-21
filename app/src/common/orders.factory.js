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
  function ordersFactory(restFactory){

    var _data={
      history: []
    };

    const DefaultQueryParams = {
      from: 0,
      size: 9
    };

    return {
      _data: _data,
      getOrders: getOrders
    };


    ////////////////////

    function getOrders(queryParams){
      //get all orders
      // users/orders?from=0&size=9
      var deffered = $q.defer();

      var dataToAttachOnUrl = queryParams || DefaultQueryParams;

      restFactory.orders.getOrders(dataToAttachOnUrl).then(function(resp){
        if(resp.success){
          deffered.resolve(resp.data);
        }
        else{
          // TODO
          alertFactory.error(null, resp.message);
          deffered.reject(resp);
        }
      }, function(err){
        deffered.reject(err);
      });
      return deffered.promise;
    }
  }

}());
