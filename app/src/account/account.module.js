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
        abstract: true
      })

      .state('Account.Projects',{
        url:'/projects',
        title: 'Projects',
        footer: true,
        resolve: {
          projects: function (projectsFactory) {
            return projectsFactory.getProjects();
          }
        },
        views: {
          "@": {
            templateUrl:'src/account/project-management.html',
            controller: 'ProjectCtrl as vm'
          }
        }
      })
      .state('Account.PhotoManagement', {
        url:'/photo_management',
        title: 'Photo Management',
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
        title: 'Album Management',
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

      .state('Account.Orders', {
        url:'/orders',
        title: 'Orders History',
        footer: true,
        resolve: {
          r_orders: function (ordersFactory){
            return ordersFactory.getOrders()
          }
        },
        views: {
          "@": {
            templateUrl:'src/account/orders.html',
            controller: 'OrdersCtrl as vm'
          }
        }
      })

      .state('Account.Settings', {
        url:'/settings',
        title: 'Profile Settings',
        footer: true,
        views: {
          "@": {
            templateUrl:'src/account/settings.html',
            controller: 'SettingsCtrl as vm'
          }
        }
      })
  }
}());
