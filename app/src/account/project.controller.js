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
		vm.newProject={};// modal
		/*method assignment*/
		vm.createProject = createProject;
		vm.showProject = showProject;
		vm.projectsArray=new Array();
		var currentDate=new Date();
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

		var initialObject={
			date: 'Today',
			created_at: new Date()
		};
		vm.projectsArray[0]=initialObject;
		for(var i=0; i<vm.projects.length;i++){
			var date=new Date(vm.projects[i].created_at);
			var key=month[date.getMonth()] +" "+date.getFullYear();
			var formattedDate=convertToCurrentTimeZone(date);
			if(!matchDate(formattedDate, currentDate))  addKey(key);
		}
		function addKey(key) {
			var newObject={
				date: key
			};
			var index=findIndexById(key);
			if (!index || !index===0) {
				vm.projectsArray.push(newObject);
			}
		}

		function findIndexById(key){
			var foundIndex = null;
			vm.projectsArray.forEach(function(element, index){
				if(element.date === key){
					foundIndex = index;
				}
			});
			return foundIndex;
		}

		function convertToCurrentTimeZone(date){
			var formattedDate=new Date(date);
			var timezoneOffset=date.getTimezoneOffset();
			formattedDate.setMinutes(date.getUTCMinutes()-timezoneOffset);
			return formattedDate;
		}

		function matchDate(date1, date2){
			// console.log(date1, date2);
			return (date1.getMonth()==date2.getMonth() &&
			date1.getDate()==date2.getDate() &&
			date1.getFullYear() == date2.getFullYear())
		}
		function showProject(projectKey, project){
			var date=new Date(project.created_at);
			var formattedDate=convertToCurrentTimeZone(date);

			var key= matchDate(formattedDate, currentDate) ? 'Today' : month[date.getMonth()] +" "+date.getFullYear();
			// var key= month[date.getMonth()] +" "+date.getFullYear();
			if(key===projectKey) return true;
			return false;
		}


		/////////////////////////////////////////////////
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
