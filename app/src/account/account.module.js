/**
 * @ngdoc overview
 * @name app.account
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
    .module('app.account', [])
    .config(configuration);

  /* @ngInject */
  function configuration($stateProvider){
    $stateProvider
      .state('Account', {
        url: '/account',
        header: true,
        footer: true,

        // abstract: true
        views: {
          "@": {
            templateUrl:'src/account/main.html'
          },
          "header@Account": {
            templateUrl:'src/layout/appHeader.html',
            controller: 'authCtrl as vm'
          },
          "content@Account": {
            templateUrl:'src/account/account.html'
          },
          "footer@Account": {
            templateUrl:'src/layout/footer.html'
          },
          "account-header@Account": {
            templateUrl:'src/account/account-header.html'
          },
          "account-content@Account": {
            templateUrl:'src/account/projects.html'
          }
        }
      })
      .state('Account.Projects',{
        url:'/projects',
        header: true,
        footer: true,

        resolve: {
          projects: function (projectsFactory) {
            var projectList;
            // projectsFactory.getProjects().then(function (response) {
            //   projectList=response;
            // });
            projectList=[{
              src: 'http://placehold.it/200x200',
              name: 'test project 1',
              date: 'test date 1'
            },{
              src: 'http://placehold.it/200x200',
              name: 'test project 2',
              date: 'test date 2'
            },{
              src: 'http://placehold.it/200x200',
              name: 'test project 3',
              date: 'test date 3'
            },{
              src: 'http://placehold.it/200x200',
              name: 'test project 4',
              date: 'test date 4'
            }];
            return projectList;
          }
        },
        views: {
          "@": {
            templateUrl:'src/account/account.html',
            controller: 'ProjectCtrl as vm'
          },
          "header@Account.Projects": {
            templateUrl:'src/layout/appHeader.html',
            controller: 'authCtrl as vm'
          },
          "content@Account.Projects": {
            templateUrl:'src/account/account.html'
          },
          "footer@Account.Projects": {
            templateUrl:'src/layout/footer.html'
          },
          "account-header@Account.Projects": {
            templateUrl:'src/account/account-header.html'
          },
          "account-content@Account.Projects": {
            templateUrl:'src/account/projects.html'
          }
        }
      })
      .state('Account.PhotoManagement', {
        url:'/photo_management',
        header: true,
        footer: true,

        views: {
          "@": {
            templateUrl:'src/account/account.html',
            controller: 'PhotoCtrl as vm'
          },
          "header@Account.PhotoManagement": {
            templateUrl:'src/layout/appHeader.html',
            controller: 'authCtrl as vm'
          },
          "content@Account.PhotoManagement": {
            templateUrl:'src/account/photo-management.html'
          },
          "footer@Account.PhotoManagement": {
            templateUrl:'src/layout/footer.html'
          },
          "account-header@Account.PhotoManagement": {
            templateUrl:'src/account/account-header.html'
          },
          "account-content@Account.PhotoManagement": {
            templateUrl:'src/account/photo-management.html'
          }
        }
      })
      .state('Account.AlbumManagement', {
        url:'/album_management',
        header: true,
        footer: true,
        resolve: {
          albums: function (albumsFactory) {
            var albumList;
            // albumsFactory.getAlbumsList(withPhoto).then(function (response) {
            //   albumList=response;
            // });
            albumList=[{
              src: 'http://placehold.it/200x200',
              name: 'test album 1',
              date: 'test date 1'
            },{
              src: 'http://placehold.it/200x200',
              name: 'test album 2',
              date: 'test date 2'
            },{
              src: 'http://placehold.it/200x200',
              name: 'test album 3',
              date: 'test date 3'
            },{
              src: 'http://placehold.it/200x200',
              name: 'test album 4',
              date: 'test date 4'
            }];
            return albumList;
          }
        },
        views: {
          "@": {
            templateUrl:'src/account/account.html',
            controller: 'AlbumCtrl as vm'
          },
          "header@Account.AlbumManagement": {
            templateUrl:'src/layout/appHeader.html',
            controller: 'authCtrl as vm'
          },
          "content@Account.AlbumManagement": {
            templateUrl:'src/account/album-management.html',
          },
          "footer@Account.AlbumManagement": {
            templateUrl:'src/layout/footer.html'
          },
          "account-header@Account.AlbumManagement": {
            templateUrl:'src/account/account-header.html'
          },
          "account-content@Account.AlbumManagement": {
            templateUrl:'src/account/album-management.html'
          }
        }
      })
      .state('Account.History', {
        url:'/history',
        header: true,
        footer: true,

        views: {
          "@": {
            templateUrl:'src/account/account.html'
          },
          "header@Account.History": {
            templateUrl:'src/layout/appHeader.html',
            controller: 'authCtrl as vm'
          },
          "content@Account.History": {
            templateUrl:'src/account/history.html'
          },
          "footer@Account.History": {
            templateUrl:'src/layout/footer.html'
          },
          "account-header@Account.History": {
            templateUrl:'src/account/account-header.html'
          },
          "account-content@Account.History": {
            templateUrl:'src/account/history.html'
          }
        }
      })
      .state('Account.Settings', {
        url:'/settings',
        header: true,
        footer: true,

        views: {
          "@": {
            templateUrl:'src/account/account.html'
          },
          "header@Account.Settings": {
            templateUrl:'src/layout/appHeader.html',
            controller: 'authCtrl as vm'
          },
          "content@Account.Settings": {
            templateUrl:'src/account/settings.html',
            controller: 'SettingsCtrl as vm'
          },
          "footer@Account.Settings": {
            templateUrl:'src/layout/footer.html'
          },
          "account-header@Account.Settings": {
            templateUrl:'src/account/account-header.html',
            controller: 'SettingsCtrl as vm'
          },
          "account-content@Account.Settings": {
            templateUrl:'src/account/settings.html',
            controller: 'SettingsCtrl as vm'
          }
        }
      })
  }
}());
