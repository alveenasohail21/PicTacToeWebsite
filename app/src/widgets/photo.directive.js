/**
 * @ngdoc directive
 * @name app.widgets.directive:photo
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
    .module('app.widgets')
    .directive('photoDirective', photoDirective);

  /* @ngInject */
  function photoDirective(albumsFactory){

    return {
      link: link,
      restrict: 'E',
      templateUrl: 'src/views/photo.html',
      replace: true
    };

    /////////////////////

    function link(scope, elem, attrs){
      scope.deletePhoto=deletePhoto;
      scope.uploadPicture=uploadPicture;

      function deletePhoto(id){
        albumsFactory.deletePhoto(id)
        //   .then(function (response) {
        //
        // })
;
      }
      function uploadPicture(data){
        albumsFactory.uploadPicture(data)
          .then(function (response) {

        })
        ;
      }
      function init(){

      }
      init();

    }
  }

}());
