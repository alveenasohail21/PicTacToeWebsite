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


  function SettingsCtrl(userFactory){
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

    function init() {
      getUserDetails();
      getUserShippingDetails();
      getUserBillingDetails();
    }
    function getUserDetails(){
      userFactory.getUserDetails().then(function (response) {
        vm.userDetails=response;
        console.log(response);
      });
    }
    function getUserShippingDetails(){
      userFactory.getUserShippingDetails().then(function (response) {
        vm.shippingDetails=response;
        console.log("shipping details: ", vm.shippingDetails);
      });
    }
    function getUserBillingDetails(){
      userFactory.getUserBillingDetails().then(function (response) {
        vm.billingDetails=response;
        console.log("billing details: ", vm.billingDetails);
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
    function cancelShipping(){
      vm.showShippingForm=false;
    }
    function confirmBilling(){
      userFactory.putUserBillingDetails(vm.billingDetails).then(function (response) {
        vm.showBillingForm=false;
      });
    }
    function cancelBilling(){
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
    function cancelPassword() {
      vm.showPasswordForm=false;
    }
    function savePassword() {
      userFactory.changePassword(vm.password).then(function (response) {
        console.log(response);
      });
      vm.showPasswordForm=false;
    }
    init();
  }

}());
