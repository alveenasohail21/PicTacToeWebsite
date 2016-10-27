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

		var month = new Array();
		month[0] = "January";
		month[1] = "February";
		month[2] = "March";
		month[3] = "April";
		month[4] = "May";
		month[5] = "June";
		month[6] = "July";
		month[7] = "August";
		month[8] = "September";
		month[9] = "October";
		month[10] = "November";
		month[11] = "December";

		vm.newDateFormat=new Array();
		for(var i=0;i<vm.projects.length;i++){
			var currentDate=new Date();
			var date=new Date(vm.projects[i].created_at);
			if(currentDate.getMonth()==date.getMonth() && currentDate.getDate()==date.getDate() && currentDate.getFullYear() == date.getFullYear()){
				vm.projects[i].newDateFormat="Today"
			}
			else{
				vm.projects[i].newDateFormat=month[date.getMonth()] +" "+date.getFullYear();
			}
			console.log(vm.projects[i].newDateFormat);
		}

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
