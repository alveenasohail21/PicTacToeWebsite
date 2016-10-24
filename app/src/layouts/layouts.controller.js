/**
 * @ngdoc controller
 * @name app.layouts.controller:Layouts
 * @description < description placeholder >
 */

(function(){

	'use strict';

	angular
		.module('app.layouts')
		.controller('LayoutsCtrl', LayoutsCtrl);

	/* @ngInject */
	function LayoutsCtrl($rootScope, $location,  $anchorScroll, $auth, projectsFactory, toolFactory){
		var vm = this;

		vm.getStartedClick = getStartedClick;
		
		vm.scrollTo = function(id) {
			$location.hash(id);
			$anchorScroll();
		};

		function init(){
			lazyLoadImages();
		}

		function lazyLoadImages(){
			ImageLazyLoad.loadBackgroundImage('hero-div');
			ImageLazyLoad.loadBackgroundImage('banner');
			ImageLazyLoad.loadImage('lazy');
		}
		
		function getStartedClick(category){
			// save the category in rootScope
			$rootScope.categoryClick = category;
			// check if user is logged in first
			var isAuthenticated = $auth.isAuthenticated();
			// if not logged in, open login popup instead
			if(!isAuthenticated){
				// register the event to fire when logged in
				eventChannel.off('login');
				console.log('attached');
				eventChannel.on('login', function(){
					createNewProject(goToTool);
				});
				$('#loginModal').modal({
					keyboard: true
				});
			}
			// else create a new project
			else{
				// after project creation, go to tool with pid and token
				createNewProject(goToTool);
			}
		}
		
		function createNewProject(cb){
			if(!$rootScope.categoryClick){
				return;
			}
			var project = {
				name: 'Project ' + (new Date()).toDateString(),
				type: $rootScope.categoryClick
			};
			$rootScope.categoryClick = null;
			projectsFactory.createProject(project)
				.then(function(resp){
					if(resp.success){
						if(cb){
							// pass project
							cb(resp.data);
						}
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

		init();
	}

}());
