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
  function toolFactory($auth){

    const DevLink = 'http://localhost:7030';
    const ProdLink = 'http://pictaktoe.com/tool/#/upload';

    return {
      redirectToToolWithProject: redirectToToolWithProject
    };

    ////////////////////

    function prepareRedirectLink(pId, token){
      var redirectLink = '';
      var isLocalhost = (window.location.origin.indexOf('localhost') >= 0);
      if(isLocalhost){
        // create dev redirect link
        redirectLink = DevLink + '?pid=' + pId + '&token=' + token;
      }
      else{
        // else create prod redirect link
        redirectLink = ProdLink + '?pid=' + pId;
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
