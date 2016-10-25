/**
 * @ngdoc service
 * @name app.common.photos
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.common')
    .factory('toolFactory', toolFactory);

  /* @ngInject */
  function toolFactory(FRONT_END_TOOL_DEV_URL, FRONT_END_TOOL_PROD_URL, $auth){

    return {
      redirectToToolWithProject: redirectToToolWithProject
    };

    ////////////////////

    function prepareRedirectLink(pId, token){
      var redirectLink = '';
      var isLocalhost = (window.location.origin.indexOf('localhost') >= 0);
      if(isLocalhost){
        // create dev redirect link
        redirectLink = FRONT_END_TOOL_DEV_URL + '/' + pId + '/' + token;
      }
      else{
        // else create prod redirect link
        redirectLink = FRONT_END_TOOL_PROD_URL + '/' + pId;
      }
      return redirectLink;
    }

    function redirectToToolWithProject(pId){
      var redirectLink = prepareRedirectLink(pId, $auth.getToken());
      // console.log(redirectLink);
      window.location = redirectLink;
    }

  }

}());
