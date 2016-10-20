/**
 * @ngdoc controller
 * @name app.account.controller:Project
 * @description < description placeholder >
 */

(function(){

	'use strict';

	angular
		.module('app.account')
		.controller('ProjectCtrl', ProjectCtrl);

	/* @ngInject */
	function ProjectCtrl(projectsFactory){
		var vm = this;

		/*variable assignment*/
		vm.projects = projectsFactory._data.projects;
		vm.newProject={};

		/*method assignment*/
		vm.createProject = createProject;

		function createProject(project) {
			//create a project
			projectsFactory.createProject(project);
			vm.newProject={};
		}
		/////////////////////
	}
}());
