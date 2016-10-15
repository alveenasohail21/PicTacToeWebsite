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
    return {
      getOrders: getOrders
    };

    ////////////////////

    function getOrders(){
      //get all orders
      var deffered = $q.defer();
      restFactory.orders.getOrders().then(function(resp){
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
