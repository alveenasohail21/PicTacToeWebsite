/**
 * @ngdoc service
 * @name app.common.user
 * @description < description placeholder >
 */

(function(){
  'use strict';
  angular
    .module('app.common')
    .factory('cartFactory', cartFactory);

  function cartFactory($q, restFactory, alertFactory){

    var _data = {
      pricing: null
    };

    /* Return Functions */
    return {
      getCartProjects: getCartProjects,
      getPricing: getPricing
    };

    function getCartProjects(){
      globalLoader.show();
      var deffered = $q.defer();
      restFactory.cart.getCartProjects().then(function(resp){
        if(resp.success){
          globalLoader.hide();
          // TODO: get pricing and add in each project
          // if(!_data.pricing){
          //   resp.data = updateCartProjectPricing(resp.data);
          // }
          // else{
            // call api
            // on resp update price
          // }
          deffered.resolve(resp);
        }
        else{
          // TODO
          alertFactory.error(null, resp.message);
          globalLoader.hide();
          deffered.reject(resp);
        }
      }, function(err){
        globalLoader.hide();
        deffered.reject(err);
      });
      return deffered.promise;
    }

    function getPricing(){
      globalLoader.show();
      var deffered = $q.defer();
      restFactory.cart.getPricing().then(function(resp){
        if(resp.success){
          globalLoader.hide();
          deffered.resolve(resp);
        }
        else{
          // TODO
          alertFactory.error(null, resp.message);
          globalLoader.hide();
          deffered.reject(resp);
        }
      }, function(err){
        globalLoader.hide();
        deffered.reject(err);
      });
      return deffered.promise;
    }

    /* Define Fuctions */
  }
}());
