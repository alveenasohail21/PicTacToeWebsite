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
  function albumsFactory(restFactory){
    var albums=[{
      id: 1,
      src: 'http://placehold.it/200x200',
      name: 'test album 1',
      date: 'test date 1'
    },{
      id: 2,
      src: 'http://placehold.it/200x200',
      name: 'test album 2',
      date: 'test date 2'
    },{
      id: 3,
      src: 'http://placehold.it/200x200',
      name: 'test album 3',
      date: 'test date 3'
    },{
      id: 4,
      src: 'http://placehold.it/200x200',
      name: 'test album 4',
      date: 'test date 4'
    }];

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
      albums: albums,
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
      // DELETE - /albums/:id
      // var deffered = $q.defer();
      // restFactory.album.deleteAlbum(id).then(function(resp){
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



      $.each(albums, function( index, value ) {
        if(value.id===id){
          albums.splice(index, 1);
        }
      });
      return albums;
    }

    function getAlbumsList(withPhotos){
      //get album list
      // GET - /albums?photos=true|false

      // var deffered = $q.defer();
      //
      // restFactory.album.getAlbumsList(withPhotos).then(function(resp){
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
      return albums;
    }

    function deletePhoto(id){
      //delete selected photo
      // DELETE - photos/:id
      // var deffered = $q.defer();
      // restFactory.album.deletePhoto(id).then(function(resp){
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


      $.each(photos, function( index, value ) {
        if(value.id===id){
          photos.splice(index, 1);
        }
      });
      return photos;



    }

    function getSpecificAlbum(id){
      //get specific album
      // GET - /albums/:id
      var deffered = $q.defer();
      restFactory.album.getAlbum(id).then(function(resp){
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

    function uploadPicture(data){
      //upload picture
      var deffered = $q.defer();
      restFactory.album.uploadPicture(data).then(function(resp){
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
