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
      templateUrl: 'src/components/album/album.html'
    };

    /////////////////////

    function link(scope, elem, attrs){
      scope.deleteAlbum=deleteAlbum;
      scope.deletePhoto=deletePhoto;
      scope.getSpecificAlbum=getSpecificAlbum;
      scope.uploadPicture=uploadPicture;


      function deleteAlbum(id){
        albumsFactory.deleteAlbum(id)
        //   .then(function (response) {
        //
        // })
        ;
      }
      function deletePhoto(id){
        albumsFactory.deletePhoto(id).then(function (response) {

        });
      }
      function getSpecificAlbum(id){
        console.log("get specific album: ", id);
        albumsFactory.getSpecificAlbum(id).then(function (response) {

        });
      }
      function uploadPicture(){
        albumsFactory.uploadPicture().then(function (response) {

        });
      }

      function init() {

      }
      init();
    }
  }

}());
