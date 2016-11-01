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
  function routingEvents($rootScope, $auth, Restangular, userFactory, alertFactory, $state, cartFactory){

    var publicStates = ['Landing', 'Photobooks', 'Canvas', 'Magnets', 'Frames',
      'Prints', 'Account.Orders', 'TermAndConditions', 'Faq', 'Contactus', 'Aboutus', 'Help'];

    //on routing error
    $rootScope.$on('$stateNotFound',   function(event, unfoundState, fromState, fromParams){
      //do some logging and toasting
    });

    //on routing success
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      window.globalLoader.hide(); //hide loader state change complete
      //do some title setting
      $rootScope.stateUrl = toState.url;
      $rootScope.appTitle = "Pictaktoe";
      $rootScope.pageTitle = toState.title || 'Pictaktoe';
      $rootScope.currentState = toState.name;
      $rootScope.footer = toState.footer || false;
    });

    //on routing start
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      window.globalLoader.show(); //show loader state change
      $('.modal').modal('hide');
      // Check if User is Auth
      if($auth.isAuthenticated()){
        //if the user is authenticated.
        Restangular.setDefaultHeaders({'token': 'Bearer {'+$auth.getToken()+'}'});

        //Check if the data exists of user on rootScope
        if(!userFactory.getUserFromLocal()){
          event.preventDefault();
          // if not present
          userFactory.getUserDetails().then(function (response) {
            userFactory.createUserInLocal(response);
            // check if cartProjects exists
            // if(!$rootScope.cartProjects){
            //   // if not get cartProjects
            //   cartFactory.getCartProjects()
            //       .then(function (resp){
            //         if(resp.success){
            //           console.log(resp.data);
            //           $rootScope.cartProjects = (resp.data)?resp.data:[];
            //           $state.go(toState.name);
            //         }
            //       })
            //
            // }
            // else{
            //   $state.go(toState.name);
            // }
            $state.go(toState.name);

          }, function(err){
            $auth.removeToken();
            $state.go('Landing');
          });
          // var user = $auth.getPayload();
        }
      }
      else{
        // if the user is not authenticated
        if(publicStates.indexOf(toState.name)>=0){
          //Allow public state access
          window.globalLoader.hide();
          // console.log("Router: going to "+toState.name+" not authenticated and going to a public state, Valid");
        }
        else{
          //Deny private state access
          window.globalLoader.hide();
          console.log("going to "+toState.name+" not authenticated and going to a private state, invalid");
          event.preventDefault();
          alertFactory.error('Not authorized: ', 'Please login first');
          $state.go('Landing');
        }
      }
    });
  }
}());
