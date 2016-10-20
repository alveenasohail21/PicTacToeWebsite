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
  function albumsFactory(restFactory, $q){
    var _data = {
      albums: [],
      photos: []
    };


    var photos=[{
      id: 1,
      src: 'http://placehold.it/200x200',
      name: 'test photo 1',
      date: 'test date 1'
    },{
      id: 2,
      src: 'http://placehold.it/200x200',
      name: 'test photo 2',
      date: 'test date 2'
    },{
      id: 3,
      src: 'http://placehold.it/200x200',
      name: 'test photo 3',
      date: 'test date 3'
    },{
      id: 4,
      src: 'http://placehold.it/200x200',
      name: 'test photo 4',
      date: 'test date 4'
    }];

    return {
      _data: _data,
      photos: photos,
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

    function getAlbumsList(withPhotos){
      // get album list
      globalLoader.show();
      var deffered = $q.defer();
      restFactory.album.getAlbumsList(withPhotos).then(function(resp){
        if(resp.success){
          _data.albums = resp.data;
          for(var i in resp.data){
            _data.photos.push(resp.data[i].photos);
          }
          console.log(_data.photos);
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

    function deletePhoto(id){
      //delete selected photo
      // DELETE - photos/:id
      //      globalLoader.show();

      // var deffered = $q.defer();
      // restFactory.album.deletePhoto(id).then(function(resp){
      //   if(resp.success){
      //      globalLoader.hide();
      // _data.photos.splice(findIndexById(id, _data.photos), 1);

      //     deffered.resolve(resp.data);
      //   }
      //   else{
      //     // TODO
      //      globalLoader.hide();
      //     alertFactory.error(null, resp.message);
      //     deffered.reject(resp);
      //   }
      // }, function(err){
      //      globalLoader.hide();
      //   deffered.reject(err);
      // });
      // return deffered.promise;

      $.each(photos, function( index, value ) {
        if(value.id===id){
          photos.splice(index, 1);
        }
      });
      return photos;
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
      //find a project by id -returns index.
      $.each(dataObject, function( index, value ) {
        if(value.id==id) return index;
      });
    }
  }
}());
