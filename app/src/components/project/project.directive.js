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
  function projectDirective(projectsFactory, toolFactory){

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
      scope.updateProject=updateProject;
      scope.projectSelected = projectSelected;

      function init(){
        setCoverPhoto();
      }


      function deleteProjects(id) {
        //delete a project
        projectsFactory.deleteProjects(id);
      }

      function updateProject(id) {
        //update a project
        projectsFactory.updateProject(id);
      }

      function setCoverPhoto(){
        //set cover photo for the project
        if('photos' in scope.project && scope.project.photos.length>0){
          scope.coverPhoto = scope.project.photos[0].url + '-' + DefaultDimension + '.' + scope.project.photos[0].extension;
        }
        else if('products' in scope.project && scope.project.products.length>0){
          // no change
          scope.coverPhoto = scope.project.photos[0].url;
        }
        else {
          scope.coverPhoto = DefaultUrl;
        }
      }
      
      function projectSelected(){
        if(scope.project._id){
          toolFactory.redirectToToolWithProject(scope.project._id);
        }
      }

      init();

    }
  }

}());
