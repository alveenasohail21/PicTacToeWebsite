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
    function photoDirective(albumsFactory){

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

            }

            function deletePhoto(id){
                //delete photo by id
                albumsFactory.deletePhoto(id, scope.albumId);
            }

            init();

        }
    }

}());
