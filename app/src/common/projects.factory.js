/**
 * @ngdoc service
 * @name app.common.projects
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.common')
		.factory('projectsFactory', projectsFactory);

  /* @ngInject */
  function projectsFactory(restFactory){

    var projects=[{
      id: 1,
      src: 'http://placehold.it/200x200',
      name: 'test project 1',
      date: 'test date 1'
    },{
      id: 2,
      src: 'http://placehold.it/200x200',
      name: 'test project 2',
      date: 'test date 2'
    },{
      id: 3,
      src: 'http://placehold.it/200x200',
      name: 'test project 3',
      date: 'test date 3'
    },{
      id: 4,
      src: 'http://placehold.it/200x200',
      name: 'test project 4',
      date: 'test date 4'
    }];

		return {
		  projects: projects,
			getProjects: getProjects,
			getSpecificProject: getSpecificProject,
			deleteProjects: deleteProjects,
			createProject: createProject,
			updateProject: updateProject
		};

		////////////////////

		function getProjects(){
      //get all projects
      // GET - /projects
      var deffered = $q.defer();
      restFactory.project.getProjects().then(function(resp){
        if(resp.success){
          deffered.resolve(resp.data);
        }
        else{
          // TODO
          alertFactory.error(null, resp.message);
          deffered.reject(resp);
        }
      }, function(err){
        deffered.reject(err);
      });
      return deffered.promise;
		}

		function deleteProjects(id){
      //delete project
      // DELETE - /projects/:id

      // var deffered = $q.defer();
      // restFactory.project.deleteProjects().then(function(resp){
      //   if(resp.success){
      //     deffered.resolve(resp.data);
      //   }
      //   else{
      //     // TODO
      //     alertFactory.error(null, resp.message);
      //     deffered.reject(resp);
      //   }
      // }, function(err){
      //   deffered.reject(err);
      // });
      // return deffered.promise;

      $.each(projects, function( index, value ) {
        if(value.id===id){
          projects.splice(index, 1);
        }
      });
      return projects;
		}

		function createProject(data){
      //create project
      var deffered = $q.defer();
      restFactory.project.createProject(data).then(function(resp){
        if(resp.success){
          deffered.resolve(resp.data);
        }
        else{
          // TODO
          alertFactory.error(null, resp.message);
          deffered.reject(resp);
        }
      }, function(err){
        deffered.reject(err);
      });
      return deffered.promise;
		}

		function updateProject(data){
      //update project
      var deffered = $q.defer();
      restFactory.project.updateProject(data).then(function(resp){
        if(resp.success){
          deffered.resolve(resp.data);
        }
        else{
          // TODO
          alertFactory.error(null, resp.message);
          deffered.reject(resp);
        }
      }, function(err){
        deffered.reject(err);
      });
      return deffered.promise;
		}

		function getSpecificProject(id){
      //update project
      var deffered = $q.defer();
      restFactory.project.getSpecificProject(id).then(function(resp){
        if(resp.success){
          deffered.resolve(resp.data);
        }
        else{
          // TODO
          alertFactory.error(null, resp.message);
          deffered.reject(resp);
        }
      }, function(err){
        deffered.reject(err);
      });
      return deffered.promise;
		}
	}

}());
