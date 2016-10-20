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
          // "header@Account": {
          //   templateUrl:'src/layout/appHeader.html',
          //   controller: 'authCtrl as vm'
          // },
          "content@Account": {
            templateUrl:'src/account/account.html'
          },
          // "footer@Account": {
          //   templateUrl:'src/layout/footer.html'
          // },
          // "account-header@Account": {
          //   templateUrl:'src/account/account-header.html'
          // },
          "account-content@Account": {
            templateUrl:'src/account/projects.html'
          }
        }
      })
      .state('Account.Projects',{
        url:'/projects',
        resolve: {
          projects: function (projectsFactory) {
            return projectsFactory.getProjects();
          }
        },
        views: {
          "@": {
            templateUrl:'src/account/projects.html',
            controller: 'ProjectCtrl as vm'
          }
        }
      })
      .state('Account.PhotoManagement', {
        url:'/photo_management',
        header: true,
        footer: true,
        resolve: {
          albums: function (albumsFactory) {
            return albumsFactory.getAlbumsList();
          }
        },
        views: {
          "@": {
            templateUrl:'src/account/photo-management.html',
            controller: 'PhotoCtrl as vm'
          }
        }
      })
      .state('Account.AlbumManagement', {
        url:'/album_management',
        header: true,
        footer: true,
        resolve: {
          albums: function (albumsFactory) {
            return albumsFactory.getAlbumsList();
          }
        },
        views: {
          "@": {
            templateUrl:'src/account/album-management.html',
            controller: 'AlbumCtrl as vm'
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
          // "header@Account.History": {
          //   templateUrl:'src/layout/appHeader.html',
          //   controller: 'authCtrl as vm'
          // },
          "content@Account.History": {
            templateUrl:'src/account/history.html'
          },
          // "footer@Account.History": {
          //   templateUrl:'src/layout/footer.html'
          // },
          // "account-header@Account.History": {
          //   templateUrl:'src/account/account-header.html'
          // },
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
          // "header@Account.Settings": {
          //   templateUrl:'src/layout/appHeader.html',
          //   controller: 'authCtrl as vm'
          // },
          "content@Account.Settings": {
            templateUrl:'src/account/settings.html',
            controller: 'SettingsCtrl as vm'
          },
          // "footer@Account.Settings": {
          //   templateUrl:'src/layout/footer.html'
          // },
          // "account-header@Account.Settings": {
          //   templateUrl:'src/account/account-header.html',
          //   controller: 'SettingsCtrl as vm'
          // },
          "account-content@Account.Settings": {
            templateUrl:'src/account/settings.html',
            controller: 'SettingsCtrl as vm'
          }
        }
      })
  }
}());
