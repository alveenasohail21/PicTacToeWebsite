/**
 * @ngdoc controller
 * @name app.auth.controller:Auth
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.auth')
    .controller('authCtrl', authCtrl);

  /* @ngInject */
  function authCtrl(authFactory, $scope, $state){
    var vm = this;

    vm.forget = {
      email: null
    };

    vm.init = init;
    vm.login = login;
    vm.signup = signup;
    vm.socialAuthenticate = socialAuthenticate;
    vm.forgotEmailSend = forgotEmailSend;
    vm.logout = logout;

    function init(){
      //
    }
    function logout(){
      window.globalLoader.show();
      authFactory.logout();
    }
    function login(user){
      window.globalLoader.show();
      authFactory.login(user);
    }

    function signup(user){
      window.globalLoader.show();
      authFactory.signup(user);
    }

    function socialAuthenticate(provider){
      window.globalLoader.show();
      authFactory.socialAuthenticate(provider);
    }

    function forgotEmailSend(email){

      $('#pwdModal').on('hidden.bs.modal', function(e){
        $scope.forgotForm.$setPristine();
        $scope.forgotForm.$setUntouched();
        // in my case I had to call $apply to refresh the page, you may also need this.
        $scope.$apply();
      });
      $state.go("ResetPassword", {token: "token"});

      // if(email){
      //   authFactory.forgotEmailSend(email)
      //     .then(function(resp){
      //       if(resp.success){
      //         vm.forget.email = '';
      //         $('#pwdModal').modal('hide');
      //       }
      //     })
      // }
    }

    // $(document).keyup(function(e) {
    //   if (e.keyCode === 27){
    //     $("#loginModal").modal().hide();
    //     $("#signupModal").modal().hide();
    //   }
    // });
  }

}());
