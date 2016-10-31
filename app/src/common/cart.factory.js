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

  function cartFactory($q, restFactory, alertFactory, designTool, $rootScope){

    const DefaultItemImageSize = '260x260';

    var _data = {
      cartItems: [],
      projectItems: [],
      projectId: null
    };

    /* Return Functions */
    return {
      getCartItems: getCartItems,
      _data: _data
    };

    function getCartItems(){
      globalLoader.show();
      var deffered = $q.defer();
      restFactory.cart.getCartItems().then(function(resp){
        if(resp.success){
          if(resp.data){
            _data.cartItems = resp.data;
          }
          globalLoader.hide();
          deffered.resolve(resp.data);
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
