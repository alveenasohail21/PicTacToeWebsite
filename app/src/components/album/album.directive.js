/**
 * @ngdoc directive
 * @name app.components.directive:album
 * @scope true
 * @param {object} test test object
 * @restrict E
 *
 * @description < description placeholder >
 *
 */

(function(){

  'use strict';

  angular
    .module('app.components')
    .directive('albumDirective', albumDirective);

  /* @ngInject */
  function albumDirective(albumsFactory){

    return {
      link: link,
      restrict: 'E',
      replace: true,
      templateUrl: 'src/components/album/album.html',
      scope:{
        album: '=album'
      }
    };

    /////////////////////

    function link(scope, elem, attrs){
      scope.deleteAlbum=deleteAlbum;
      scope.deletePhoto=deletePhoto;
      scope.getSpecificAlbum=getSpecificAlbum;
      scope.uploadPicture=uploadPicture;
      function init() {
        
      }


      function deleteAlbum(id){
        albumsFactory.deleteAlbum(id);
      }
      function deletePhoto(id){
        albumsFactory.deletePhoto(id);
      }
      function getSpecificAlbum(id){
        albumsFactory.getSpecificAlbum(id);
      }
      function uploadPicture(){
        albumsFactory.uploadPicture();
      }

      init();
    }
  }

}());
