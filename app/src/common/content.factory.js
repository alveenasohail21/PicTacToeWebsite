/**
 * @ngdoc service
 * @name app.common.projects
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.common')
    .factory('contentFactory', contentFactory);

  /* @ngInject */
  function contentFactory(restFactory){
    return {
      getTermsAndConditions: getTermsAndConditions,
      getCurrentContent: getCurrentContent,
      getBlogMeta: getBlogMeta,
      getBlogSpecific: getBlogSpecific
    };

    ////////////////////

    function getTermsAndConditions(){
      //get terms and conditions
      var deffered = $q.defer();
      restFactory.content.getTermsAndConditions().then(function(resp){
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
    function getCurrentContent(){
      //get current content
      var deffered = $q.defer();
      restFactory.content.getCurrentContent().then(function(resp){
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
    function getBlogMeta(){
      //get meta blog
      var deffered = $q.defer();
      restFactory.content.getBlogMeta().then(function(resp){
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


    function getBlogSpecific(){
      //get a specific blog
      var deffered = $q.defer();
      restFactory.content.getBlogSpecific().then(function(resp){
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
