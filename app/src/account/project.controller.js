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
	function ProjectCtrl(projectsFactory, toolFactory){
		var vm = this;

		/*variable assignment*/
		vm.projects = projectsFactory._data.projects;
		vm.newProject={};

		/*method assignment*/
		vm.createProject = createProject;

		function createProject(project, form) {
			//create a project
			projectsFactory.createProject(project)
				.then(function(resp){
					if(resp.success){
						// empty values
						vm.newProject = {};
						// reset form
						form.$setPristine();
						form.$setUntouched();
						// close modal
						$('newProject').modal('hide');
						goToTool(resp.data);
					}
					else{
						alertFactory.error(null, resp.message);
					}
				}, function(err){
					alertFactory.error(null, err.data.message);
				})
		}

		function goToTool(project){
			if(project._id){
				toolFactory.redirectToToolWithProject(project._id);
			}
		}

	}
}());
