/**
 * @ngdoc directive
 * @name app.components.directive:project
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
      .directive('projectDirective', projectDirective);

  /* @ngInject */
  function projectDirective(projectsFactory){

    const DefaultUrl="svg/logo-icon.svg";
    const DefaultDimension = "260x260";

    return {
      link: link,
      restrict: 'E',
      templateUrl: 'src/components/project/project.html',
      replace: true,
      scope: {
        project: "=project"
      }
    };

    /////////////////////

    function link(scope, elem, attrs){

      scope.defaultCover = DefaultUrl;

      scope.deleteProjects=deleteProjects;
      scope.createProject=createProject;
      scope.updateProject=updateProject;

      function init(){
        console.log(scope.project);

        if('photos' in scope.project && scope.project.photos.length>0){
          scope.coverPhoto = scope.project.photos[0].url + '-' + DefaultDimension + '.' + scope.project.photos[0].extension;
        }
        else if('products' in scope.project && scope.project.products.length>0){
          // no change
          scope.coverPhoto = scope.project.photos[0].url;
        }

      }

      function createProject() {
        projectsFactory.createProject(id).then(function (response) {

        });
      }

      function deleteProjects(id) {
        projectsFactory.deleteProjects(id);
      }

      function updateProject(id) {
        projectsFactory.updateProject(id).then(function (response) {

        });
      }

      init();

    }

  }

}());
