/**
 * @ngdoc controller
 * @name app.account.controller:Settings
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
      .module('app.account')
      .controller('SettingsCtrl', SettingsCtrl);


  function SettingsCtrl(userFactory, authFactory, activeSocial){
    var vm = this;

    //Assign variables
    vm.showShippingForm=false;
    vm.showBillingForm=false;
    vm.enableInfoEdit=false;
    vm.showPasswordForm=false;

    //Assign methods
    vm.editShippingDetails=editShippingDetails;
    vm.editBillingDetails=editBillingDetails;
    vm.editDetails=editDetails;
    vm.cancelBilling=cancelBilling;
    vm.confirmBilling=confirmBilling;
    vm.cancelShipping=cancelShipping;
    vm.confirmShipping=confirmShipping;
    vm.showInfoEdit=showInfoEdit;
    vm.cancelEditInfo=cancelEditInfo;
    vm.saveUserInfo=saveUserInfo;
    vm.enableChangePassword=enableChangePassword;
    vm.savePassword=savePassword;
    vm.cancelPassword=cancelPassword;
    vm.socialLink=socialLink;
    vm.checkLink=checkLink;
    console.log(activeSocial);

    function init() {
      getUserDetails();
      getUserShippingDetails();
      getUserBillingDetails();
    }
    function getUserDetails(){
      userFactory.getUserDetails().then(function (response) {
        vm.userDetails=response;
      });
    }
    function getUserShippingDetails(){
      userFactory.getUserShippingDetails().then(function (response) {
        vm.shippingDetails=response;
      });
    }
    function getUserBillingDetails(){
      userFactory.getUserBillingDetails().then(function (response) {
        vm.billingDetails=response;
      });
    }
    function editBillingDetails(){
      vm.showBillingForm=true;
    }
    function editShippingDetails(){
      vm.showShippingForm=true;
    }

    function editDetails(){
      editBillingDetails();
      editShippingDetails();
    }
    function confirmShipping(){
      userFactory.putUserShippingDetails(vm.shippingDetails).then(function (response) {
        vm.showShippingForm=false;
      });
    }
    function cancelShipping(form){
      // vm.shippingDetails = {};
      // resetForm(form);
      vm.showShippingForm=false;
    }
    function confirmBilling(){
      userFactory.putUserBillingDetails(vm.billingDetails).then(function (response) {
        vm.showBillingForm=false;
      });
    }
    function cancelBilling(form){
      // vm.billingDetails = {};
      // resetForm(form);
      vm.showBillingForm=false;
    }
    function showInfoEdit(){
      vm.enableInfoEdit=true;
    }
    function saveUserInfo() {
      userFactory.putUserDetails(vm.userDetails).then(function (response) {
        console.log(response);
      });
    }
    function cancelEditInfo() {
      vm.enableInfoEdit=false;
    }
    function enableChangePassword() {
      vm.showPasswordForm=true;
    }
    function cancelPassword(form) {
      vm.password = {};
      resetForm(form);
      vm.showPasswordForm=false;
    }
    function savePassword(form) {
      userFactory.changePassword(vm.password).then(function (response) {
        if(response.success){
          cancelPassword(form);
        }
        else{
          vm.password = {};
          resetForm(form);
        }
      }, function(err){
        vm.password = {};
        resetForm(form);
      });
    }

    function resetForm(form){
      form.$setPristine();
      form.$setUntouched();
    }

    function socialLink(provider) {
      if(checkLink(provider)){
        authFactory.socialDisconnect(provider).then(function (response) {
          console.log(response);
        })
      }
      else{
        authFactory.socialAuthenticate(provider).then(function (response) {
          console.log(response);
        })
      }
    }
    
    function checkLink(provider) {
      return activeSocial.indexOf(provider) !== -1;
    }
    init();

  }

}());
