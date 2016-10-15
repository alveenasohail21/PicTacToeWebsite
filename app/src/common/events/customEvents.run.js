/*
 * Name: customEvents.run.js
 * Purpose: Use eventChannel instead of Angular events, register custom events and their callbacks here
 * */

(function(){
    'use strict';
    angular
        .module('app.common')
        .run(customEvents);

    // no need to inject $rootScope
    function customEvents(){

        /* ALL CUSTOM EVENTS WILL BE CAPTURED HERE */

        // example: test
        eventChannel.on('test', function(){
            console.log("Custom Event Fired: test");
        });

        eventChannel.on('socketFired', function(){
            console.log("Custom Event Fired: socketFired");
            // pass the data to factories
        })

    }
}());
