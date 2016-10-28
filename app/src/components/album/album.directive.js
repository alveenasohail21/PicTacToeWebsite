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
  function albumDirective(albumsFactory, $timeout){

    const DefaultUrl="svg/logo-icon.svg";
    const DefaultDimension = "800x800";


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
      scope.hideLoader=false;
      function init() {
        setCoverPhoto();
        $timeout(function () {
          var src = $('#'+attrs.albumid).css('background-image');
          var url = src.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
          var img = new Image();
          img.onload =function hide() {
            scope.hideLoader=true;
          };
          img.src = url;
          if (img.complete) img.onload();
        }, 1000);
      }

      function deleteAlbum(id){
        //delete album by id
        albumsFactory.deleteAlbum(id);
      }

      function deletePhoto(id){
        //delete photo by id
        albumsFactory.deletePhoto(id);
      }

      function getSpecificAlbum(id){
        //get album by id
        albumsFactory.getSpecificAlbum(id);
      }

      function uploadPicture(){
        //upload photo
        albumsFactory.uploadPicture();
      }

      function setCoverPhoto(){
        //set cover photo for the albums
        if('photos' in scope.album && scope.album.photos.length>0){
          scope.coverPhoto = scope.album.photos[0].url + '-' + DefaultDimension + '.' + scope.album.photos[0].extension;
          // $timeout(function () {
          //   ImageLazyLoad.loadBackgroundImage('album');
          // })
        }
      }
      init();
    }
  }

}());
