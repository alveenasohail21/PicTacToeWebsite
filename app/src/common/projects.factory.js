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
    function projectsFactory(restFactory, $q){

        var _data = {
            projects: []
        };

        return {
            _data: _data,
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
                    _data.projects = resp.data;
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

            var deffered = $q.defer();
            restFactory.project.deleteProjects(id).then(function(resp){
                if(resp.success){
                    _data.projects.splice(findIndexById(id), 1);
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

        function createProject(data){
            //create project
            var deffered = $q.defer();
            restFactory.project.createProject(data).then(function(resp){
                if(resp.success){
                    _data.projects.push(resp.data);
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

        function findIndexById(id){
            //find a project by id -returns index.
            $.each(_data.projects, function( index, value ) {
                if(value.id==id) return index;
            });
        }
    }

}());
