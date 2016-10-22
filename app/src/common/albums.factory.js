/**
 * @ngdoc service
 * @name app.common.photos
 * @description < description placeholder >
 */

(function(){

  'use strict';

  angular
      .module('app.common')
      .factory('albumsFactory', albumsFactory);

  /* @ngInject */
  function albumsFactory(restFactory, $q, alertFactory){
    var _data = {
      albums: []
    };

    return {
      _data: _data,
      deleteAlbum: deleteAlbum,
      getAlbumsList: getAlbumsList,
      deletePhoto: deletePhoto,
      getSpecificAlbum: getSpecificAlbum,
      uploadPicture: uploadPicture
    };

    ////////////////////

    function deleteAlbum(id){
      //delete an album
      globalLoader.show();
      var deffered = $q.defer();
      restFactory.album.deleteAlbum(id).then(function(resp){
        if(resp.success){
          _data.albums.splice(findIndexById(id, _data.albums), 1);
          globalLoader.hide();
          alertFactory.success(null, resp.message);
          deffered.resolve(resp.data);
        }
        else{
          // TODO
          globalLoader.hide();
          alertFactory.error(null, resp.message);
          deffered.reject(resp);
        }
      }, function(err){
        globalLoader.hide();
        alertFactory.error(null, err.data.message);
        deffered.reject(err);
      });
      return deffered.promise;
    }

    function getAlbumsList(withPhotos){
      // get album list
      globalLoader.show();
      var deffered = $q.defer();
      restFactory.album.getAlbumsList(withPhotos).then(function(resp){
        if(resp.success){
          if(resp.data){
            _data.albums = resp.data;
          }
          globalLoader.hide();
          deffered.resolve(resp.data);
        }
        else{
          // TODO
          alertFactory.error(null, resp.message);
          globalLoader.hide();
          deffered.reject(resp);
        }
      }, function(err){
        globalLoader.hide();
        deffered.reject(err);
      });
      return deffered.promise;
    }

    function deletePhoto(id, album_id){
      //delete selected photo
      globalLoader.show();
      var albumIndex = findIndexById(album_id, _data.albums);
      var deffered = $q.defer();
      restFactory.album.deletePhoto(id, album_id).then(function(resp){
        if(resp.success){
          globalLoader.hide();
          _data.albums[albumIndex].photos.splice(findIndexById(id, _data.albums[albumIndex].photos), 1);
          alertFactory.success(null, resp.message);
          deffered.resolve(resp.data);
        }
        else{
          // TODO
          globalLoader.hide();
          alertFactory.error(null, resp.message);
          deffered.reject(resp);
        }
      }, function(err){
        globalLoader.hide();
        alertFactory.error(null, err.data.message);
        deffered.reject(err);
      });
      return deffered.promise;

    }

    function getSpecificAlbum(id){
      //get specific album
      globalLoader.show();
      var deffered = $q.defer();
      restFactory.album.getAlbum(id).then(function(resp){
        if(resp.success){
          globalLoader.hide();
          deffered.resolve(resp.data);
        }
        else{
          // TODO
          globalLoader.hide();
          alertFactory.error(null, resp.message);
          deffered.reject(resp);
        }
      }, function(err){
        globalLoader.hide();
        deffered.reject(err);
      });
      return deffered.promise;
    }

    function uploadPicture(data){
      //upload picture
      globalLoader.show();
      var deffered = $q.defer();
      restFactory.album.uploadPicture(data).then(function(resp){
        if(resp.success){
          globalLoader.hide();
          deffered.resolve(resp.data);
        }
        else{
          // TODO
          globalLoader.hide();
          alertFactory.error(null, resp.message);
          deffered.reject(resp);
        }
      }, function(err){
        globalLoader.hide();
        deffered.reject(err);
      });
      return deffered.promise;
    }

    function findIndexById(id, dataObject){
      //find index by id
      var foundIndex = null;
      dataObject.forEach(function(obj, index){
        if(obj._id === id){
          foundIndex = index;
        }
      });
      return foundIndex;

    }
  }
}());
