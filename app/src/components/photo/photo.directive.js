/**
 * @ngdoc directive
 * @name app.components.directive:photo
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
        .directive('photoDirective', photoDirective);

    /* @ngInject */
    function photoDirective(albumsFactory, $timeout){

        const DefaultUrl="svg/logo-icon.svg";
        const DefaultDimension = "800x800";

        return {
            link: link,
            restrict: 'E',
            templateUrl: 'src/components/photo/photo.html',
            replace: true,
            scope:{
                photo: '=photo',
                albumId: '=albumId'
            }
        };

        /////////////////////

        function link(scope, elem, attrs){

            scope.deletePhoto=deletePhoto;

            function init(){
                setCoverPhoto();
                $timeout(function () {
                    var img = new Image('#loader-photo');
                    img.onload =function hide() {
                        scope.hideLoader=true;
                    };
                    if (img.complete) img.onload();
                }, 100);
            }

            function deletePhoto(id){
                //delete photo by id
                albumsFactory.deletePhoto(id, scope.albumId);
            }

            function setCoverPhoto(){
                //set cover photo for the albums
                if('url' in scope.photo){
                    scope.coverPhoto = scope.photo.url + '-' + DefaultDimension + '.' + scope.photo.extension;
                }
            }

            init();

        }
    }

}());
