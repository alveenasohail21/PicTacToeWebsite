/**
 * @ngdoc service
 * @name app.common.user
 * @description < description placeholder >
 */

(function(){
  'use strict';
  angular
      .module('app.common')
      .factory('userFactory', userFactory);

  function userFactory($rootScope, $q, restFactory, alertFactory){

    /* Return Functions */
    return {
      createUserOnServer: createUserOnServer,
      getUserFromServer: getUserFromServer,
      updateUserInServer: updateUserInServer,
      removeUserFromServer: removeUserFromServer,
      createUserInLocal: createUserInLocal,
      getUserFromLocal: getUserFromLocal,
      updateUserInLocal: updateUserInLocal,
      removeUserFromLocal: removeUserFromLocal,
      activeSocialProfilesFromServer: activeSocialProfilesFromServer,
      activeSocialProfiles: activeSocialProfiles,
      removeSocialProfile: removeSocialProfile,
      socialDetails: socialDetails,
      getUserBillingDetails: getUserBillingDetails,
      getUserShippingDetails: getUserShippingDetails,
      getUserDetails: getUserDetails,
      putUserBillingDetails: putUserBillingDetails,
      putUserShippingDetails: putUserShippingDetails,
      putUserDetails: putUserDetails,
      changePassword: changePassword
    };


    /* Define Fuctions */

    function createUserOnServer() {
      //
    }

    function getUserFromServer() {
      //
      var deffered = $q.defer();
      restFactory.auth.getAuthenticatedUser()
          .then(function (resp){
            // console.log("the response itself: ",resp);
            if(resp.success){
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

    function updateUserInServer() {
      //
    }

    function removeUserFromServer() {
      //
    }

    function createUserInLocal(user) {
      $rootScope.user = user;
    }

    function getUserFromLocal(){
      return $rootScope.user || null;
    }

    function updateUserInLocal (user){
      for(var obj in user){
        if(user.hasOwnProperty(obj)){
          $rootScope.user[obj] = user[obj];
        }
      }
    }

    function removeUserFromLocal() {
      delete $rootScope.user;
    }

    // get activeSocialProfiles
    function activeSocialProfilesFromServer(){
      var deffered = $q.defer();
      restFactory.users.activeSocialProfiles()
          .then(function(resp){
            // console.log(resp);
            if(resp.success){
              // if no social profile
              if(!resp.data){
                resp.data = [];
              }
              updateUserInLocal({activeSocialProfiles: resp.data});
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

    // get getActiveSocialProfilesFromFactory
    function activeSocialProfiles(){
      if($rootScope.user.activeSocialProfiles){
        return $rootScope.user.activeSocialProfiles;
      }
      else{
        return [];
      }
    }

    // update activeSocialProfiles
    function removeSocialProfile(platform){
      var index = $rootScope.user.activeSocialProfiles.indexOf(platform);
      if(index>=0){
        $rootScope.user.socialName = '';
        $rootScope.user.activeSocialProfiles.splice(index, 1);
      }
      // console.log("Active Social Profiles Update: ",$rootScope.user.activeSocialProfiles);
    }

    // get socialDetails
    function socialDetails(){
      var deffered = $q.defer();
      restFactory.users.socialDetails()
          .then(function(resp){
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

    //get user details
    function getUserDetails(){
      var deffered = $q.defer();
      restFactory.auth.getUserDetails()
          .then(function(resp){
            if(resp.success){
              deffered.resolve(resp.data);
            }
            else{
              // TODO
              alertFactory.error(null, resp.message);
              deffered.reject(resp);
            }
          }, function(err){
            alertFactory.error(null, 'Please login again');
            deffered.reject(err);
          });
      return deffered.promise;
    }

    //get shipping details
    function getUserShippingDetails(){
      var deffered = $q.defer();
      restFactory.users.getUserShippingDetails()
          .then(function(resp){
            if(resp.success){
              // console.log("shipping: ", resp);
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

    //get billing details
    function getUserBillingDetails(){
      var deffered = $q.defer();
      restFactory.users.getUserBillingDetails()
          .then(function(resp){
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

    //update user details
    function putUserDetails(userDetails){
      globalLoader.show();
      var deffered = $q.defer();
      var updatedData={
        name: userDetails.first_name,
        city: userDetails.city,
        country: userDetails.country,
        last_name: userDetails.last_name,
        mobile_number: userDetails.mobile_number,
        phone_number: userDetails.phone_number,
        full_address: userDetails.full_address,
        email: userDetails.email
      };
      restFactory.auth.putUserDetails(updatedData).then(function(resp){
        if(resp.success){
          globalLoader.hide();
          alertFactory.success(null, resp.message);
          deffered.resolve(resp.data);
        }
        else{
          globalLoader.hide();
          alertFactory.error(null, resp.message);
          deffered.reject(resp);
        }
      }, function(err){
        globalLoader.hide();
        deffered.reject(err);
      });
      return deffered.promise;
    }

    //get shipping details
    function putUserShippingDetails(shippingDetails){
      globalLoader.show();
      var shippingData={
        first_name: shippingDetails.first_name,
        city: shippingDetails.city,
        last_name: shippingDetails.last_name,
        full_address: shippingDetails.full_address,
        postal_code: shippingDetails.postal_code
      };
      var deffered = $q.defer();
      restFactory.users.putUserShippingDetails(shippingData).then(function(resp){
        if(resp.success){
          globalLoader.hide();
          alertFactory.success(null, resp.message);
          deffered.resolve(resp.data);
        }
        else{
          globalLoader.hide();
          alertFactory.error(null, resp.message);
          deffered.reject(resp);
        }
      }, function(err){
        globalLoader.hide();
        deffered.reject(err);
      });
      return deffered.promise;
    }

    //get billing details
    function putUserBillingDetails(billingDetails){
      globalLoader.show();
      var billingData={
        username: billingDetails.username,
        // last_name: billingDetails.last_name,
        city: billingDetails.city,
        phone_number: billingDetails.phone_number,
        postal_code: billingDetails.postal_code,
        area_code: billingDetails.area_code,
        full_address: billingDetails.full_address,
        email: billingDetails.email
      };
      var deffered = $q.defer();
      restFactory.users.putUserBillingDetails(billingData).then(function(resp){
        if(resp.success){
          globalLoader.hide();
          alertFactory.success(null, resp.message);
          deffered.resolve(resp.data);
        }
        else{
          globalLoader.hide();
          alertFactory.error(null, resp.message);
          deffered.reject(resp);
        }
      }, function(err){
        globalLoader.hide();
        deffered.reject(err);
      });
      return deffered.promise;
    }

    function changePassword(password){
      globalLoader.show();
      var deffered = $q.defer();
      restFactory.users.changePassword(password.newPassword, password.currentPassword, password.confirmPassword)
          .then(function(resp){
            if(resp.success){
              globalLoader.hide();
              alertFactory.success(null, resp.message);
              deffered.resolve(resp);
            }
            else{
              globalLoader.hide();
              alertFactory.error(null, resp.message);
              deffered.reject(resp);
            }
          }, function(err){
            globalLoader.hide();
            alertFactory.error(null, "Incorrect current password");
            deffered.reject(err);
          });
      return deffered.promise;
    }
  }
}());