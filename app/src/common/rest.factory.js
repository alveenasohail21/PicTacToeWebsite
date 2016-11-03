/**
 * @ngdoc service
 * @name app.common.rest
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.common')
    .factory('restFactory', restFactory);

  /* @ngInject */
  function restFactory(Restangular, $localStorage){

    /* Rest Objects */
    var Users = Restangular.all('users');
    var Auth = Restangular.all('auth');
    var Photos = Restangular.all('photos');
    var Media = Restangular.all('media');
    var Products = Restangular.all('products');
    var Album= Restangular.all('albums');
    var Project= Restangular.all('projects');

    /* Return Functions */
    return {
      auth: {
        login: login,
        signup: signup,
        getAuthenticatedUser: getAuthenticatedUser,
        forgotEmailSend: forgotEmailSend,
        resetPassword: resetPassword,
        checkToken:checkToken,
        getUserDetails: getUserDetails,
        putUserDetails: putUserDetails,
        socialDisconnect: socialDisconnect
      },
      users: {
        create: createUser,
        read: readUser,
        update: updateUser,
        remove: removeUser,
        activeSocialProfiles: activeSocialProfiles,
        socialDetails: socialDetails,
        getUserBillingDetails: getUserBillingDetails,
        getUserShippingDetails: getUserShippingDetails,
        putUserBillingDetails: putUserBillingDetails,
        putUserShippingDetails: putUserShippingDetails,
        changePassword: changePassword
      },
      album:{
        deleteAlbum: deleteAlbum,
        getAlbumsList: getAlbumsList,
        deletePhoto: deletePhoto,
        getSpecificAlbum: getSpecificAlbum,
        uploadPicture: uploadPicture
      },
      project:{
        getProjects: getProjects,
        getSpecificProject: getSpecificProject,
        deleteProjects: deleteProjects,
        createProject: createProject,
        updateProject: updateProject
      },
      content:{
        getTermsAndConditions: getTermsAndConditions,
        getCurrentContent: getCurrentContent,
        getBlogMeta: getBlogMeta,
        getBlogSpecific: getBlogSpecific
      },
      orders:{
        getOrders: getOrders,
        cancelOrder: cancelOrder,
        placeOrder: placeOrder
      },
      subscribers: {
        add: addSubscriber,
        cancel: cancelSubscription
      },
      cart: {
        getCartProjects: getCartProjects,
        getPricing: getPricing
      },
      oneUrl: oneUrl
    };

    /* Define Fuctions */

    function oneUrl(url){
      return Restangular.oneUrl('dummy', url).get({}, {
        'Content-Type': 'application/x-www-form-urlencoded'
      });
    }

    function login() {
      //
    }

    function signup() {
      //
    }

    function getAuthenticatedUser(){
      return Auth.one('user').get({token: $localStorage.token});
    }

    function forgotEmailSend(email){
      return Auth.one('password').one('forget').post(null, {email: email});
    }

    function resetPassword(password, retypedPassword){
      // return Auth.one('password').one('forget').post(null, {email: email});
    }

    function checkToken(token){
      // return Auth.one('password').one('forget').post(null, {email: email});
    }

    function createUser(){
      //
    }

    function readUser(){
      //
    }

    function updateUser(){
      //
    }

    function removeUser(){
      //
    }
    function activeSocialProfiles(){
      return Users.one('social').one('active').get();
    }

    function socialDetails(data){
      return Users.one('social').one('details').get(data);
    }

    function socialDisconnect(platform){
      return Auth.one('social').one('disconnect').post(null, {platform: platform});
    }

    function getUserDetails(){
      return Auth.one('me').get();
    }

    function getUserShippingDetails(){
      return Users.one('shipping').get();
    }

    function getUserBillingDetails(){
      return Users.one('billing').get();
    }

    function putUserDetails(updates){
      var element=Users.one('details');
      element.updates=updates;
      return element.put();
    }

    function putUserShippingDetails(updates){
      return Users.one('shipping').customPUT(updates);
    }
    function putUserBillingDetails(updates){
      return Users.one('billing').customPUT(updates);
    }

    function changePassword(newPassword, currentPassword, confirmPassword){
      var element=Users.one('password');
      element.new_password=newPassword;
      element.confirm_password=confirmPassword;
      element.current_password=currentPassword;
      return element.put();
    }

    function deletePhoto(photo_id, album_id) {
      return Album.one(album_id).one('photo', photo_id).remove();
    }

    function deleteAlbum(id) {
      return Restangular.one('albums').one(id).remove();
    }

    function getAlbumsList(withPhotos) {
      return Restangular.one('albums').get(null, {photos: withPhotos});
    }
    function getCartProjects() {
      return Users.one('cart').one('projects').get();
    }
    function getPricing() {
      return Users.one('cart').one('pricing').get();
    }

    function getProjects() {
      return Restangular.one('projects').get();
    }

    function deleteProjects(id) {
      return Restangular.one('projects', id).remove();
    }

    function createProject(data) {
      return Project.post(null, data);
    }

    function updateProject(project) {
      var element=Project.one(id);
      element.updates=updates;
      return element.put();
      // return Project.one('create').one(id).post(null, {project: project});
    }

    function getOrders(queryParams) {
      return Users.one('orders').get(queryParams);
    }

    function cancelOrder(id) {
      return Users.one('orders').one(id.toString()).remove();
    }

    function placeOrder(data){
      return Users.one('orders').post(null, data);
    }

    function getTermsAndConditions() {
      return Restangular.one('terms').get();
    }

    function getCurrentContent(current) {
      return Restangular.one('content').one(current).get();
    }

    function getBlogMeta() {
      return Restangular.one('blog').one('meta').get();
    }

    function getBlogSpecific(id) {
      return Restangular.one('blog').one(id).get();
    }

    function uploadPicture(photo) {
      return Photos.one('upload').post(null, {photo: photo});
    }

    function getSpecificAlbum(id) {
      return Restangular.one('albums').one(id).get();
    }

    function getSpecificProject(id) {
      return Restangular.one('project').one(id).get();
    }

    function addSubscriber(email){
      return Restangular.one('subscribe').post(null, {email: email});
    }

    function cancelSubscription(subscriberId){
      return Restangular.one('subscribe').one(subscriberId).remove();
    }

  }
}());
