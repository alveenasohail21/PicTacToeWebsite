(function(){

  'use strict';

  angular.module('app.core')
      .config(configuration)
      .run(routingEvents);

  /* @ngInject */
  function configuration($urlRouterProvider){

    $urlRouterProvider.otherwise('/');
  }

  /* @ngInject */
  function routingEvents($rootScope, $auth, Restangular, userFactory, alertFactory, $state){

    var publicStates = ['Landing'];

    //on routing error
    $rootScope.$on('$stateNotFound',   function(event, unfoundState, fromState, fromParams){
      //do some logging and toasting
    });

    //on routing success
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      //do some title setting
      $rootScope.stateUrl = toState.url;
      $rootScope.appTitle = "Pictaktoe";
      $rootScope.pageTitle = toState.title || 'Pictaktoe';
    });

    //on routing start
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      // Check if User is Auth
      if($auth.isAuthenticated()){
        Restangular.setDefaultHeaders({'token': 'Bearer {'+$auth.getToken()+'}'});
        //Check if the data exists of user on rootScope
        if(!userFactory.getUserFromLocal()){
          // if not present, get from token in localStorage through $auth factory
          var user = $auth.getPayload();
          userFactory.createUserInLocal(user);
        }
      }
    });
  }
}());
