/**
 * @ngdoc directive
 * @name app.widgets.directive:project
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
    .directive('projectDirective', projectDirective);

  /* @ngInject */
  function projectDirective(projectsFactory){
    return {
      link: link,
      restrict: 'E',
      templateUrl: 'src/views/project.html',
      replace: true
    };

    /////////////////////

    function link(scope, elem, attrs){
      scope.deleteProjects=deleteProjects;
      scope.createProject=createProject;
      scope.updateProject=updateProject;


      function init(){

      }

      function createProject() {
        projectsFactory.createProject(id).then(function (response) {

        });
      }

      function deleteProjects(id) {

        projectsFactory.deleteProjects(id)
        //   .then(function (response) {
        //
        // });

      }

      function updateProject(id) {
        projectsFactory.updateProject(id).then(function (response) {

        });
      }

    }

    init();


  }

}());
