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

      // firt get pricing
      if(!_data.pricing){
        getPricing().then(function(resp){
          getCartProjectFunc();
        })
      }
      else{
        getCartProjectFunc();
      }

      function getCartProjectFunc(){
        restFactory.cart.getCartProjects().then(function(resp){
          if(resp.success){

            if(resp.data){
            // add sizing
            for(var i=0; i<resp.data.length; i++){

              resp.data[i].items = updateItemSizeDetails(resp.data[i].items);

              resp.data[i].items = updatePricing(resp.data[i].type, resp.data[i].items);

              resp.data[i].total_price = calculateTotalPrice(resp.data[i].items);

            }
            }
            else{
              resp.data = [];
            }

            globalLoader.hide();

            // TODO: get pricing and add in each project
            deffered.resolve(resp);
          }
          else{
            // TODO
            console.log(resp);
            alertFactory.error(null, resp.message);
            globalLoader.hide();
            deffered.reject(resp);
          }
        }, function(err){
          globalLoader.hide();
          deffered.reject(err);
        });
      }

      return deffered.promise;
    }

    function updatePricing(type, items){
      var priceStructure = null;
      for(var i=0;i<_data.pricing.length; i++){
        if(type.toUpperCase() == _data.pricing[i].type.toUpperCase()){
          priceStructure = _data.pricing[i];
          break;
        }
      }

      if(priceStructure != null){
        for(var j=0; j<items.length; j++){
          for(var k=0; k<priceStructure.dimensions.length; k++){
            if(items[j].canvasSizeDetails.dimensions.title.inches == priceStructure.dimensions[k].title){
              items[j].unit_price = priceStructure.dimensions[k].price;
              items[j].total_price = parseInt(items[j].quantity) * parseInt(items[j].unit_price);
            }
          }
        }
        return items;
      }
      else{
        return items;
      }
    }

    function calculateTotalPrice(items){
      var totalPrice = 0;
      for(var i=0; i<items.length; i++) {
        totalPrice += items[i].total_price;
      }
      return totalPrice;
    }

    function getPricing(){
      var deffered = $q.defer();
      restFactory.cart.getPricing().then(function(resp){
        if(resp.success){
          _data.pricing = resp.data;
          deffered.resolve(resp);
        }
        else{
          alertFactory.error(null, resp.message);
          deffered.reject(resp);
        }
      }, function(err){
        deffered.reject(err);
      });
      return deffered.promise;
    }

    function updateItemSizeDetails(items){
      for(var i=0; i<items.length; i++){
        items[i].canvasSizeDetails = designTool.findItemSizeDetails(items[i]);
        // convert url as well
        items[i].url = convertUrl(items[i]);
      }
      return items;
    }

    function convertUrl(item){
      if(item.isProduct){
        return $rootScope.safeUrlConvert(item.url);
      }
      return $rootScope.safeUrlConvert(item.url+ '-' + DefaultItemImageSize + '.' + item.extension);
    }

    /* Define Fuctions */
  }
}());
