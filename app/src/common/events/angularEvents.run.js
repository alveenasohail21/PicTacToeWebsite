/*
 * Name: angularEvents.run.js
 * Purpose: Don't use it, unless its very necessary
 * */

(function(){
    'use strict';
    angular
        .module('app.common')
        .run(angularEvents);

    // need to inject $rootScope
    function angularEvents($rootScope, userFactory){

        /* ALL $ROOTSCOPE EVENTS WILL BE CAPTURED HERE */

        // example: test
        $rootScope.$on('test', function(){
            console.log("Angular Event Fired: test");
        });

        // user log out
        $rootScope.$on('logout', function(){
            console.log("Angular Event: logout");
            // remove data and token
            userFactory.removeUserFromLocal();
            // reload due to photoFactory bhand
            $rootScope.reload = true;
        });

        // social authenticate
        $rootScope.$on('socialAuthenticate', function(event, args){
            console.log("Angular Event: socialAuthenticate");
            console.log("Angular Event Args: ", args);
            // set the data in respective factory

        });

        // social disconnect
        $rootScope.$on('socialDisconnect', function(event, args){
            console.log("Angular Event: socialDisconnect");
            console.log("Angular Event Args: ", args);
            // set the data in respective factory

        });

    }
}());
