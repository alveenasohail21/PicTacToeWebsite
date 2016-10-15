/*
 * Name: assets.run.js
 * Purpose: Load necessary assets at run time
 * */

(function(){

    'use strict';

    angular.module('app.common')
        .run(function(){

            /*
            * All images and svgs to load
            * */
            var imagesAndSvgs = [
                "images/logo_icon.png",
                "svgs/gray-camera.svg"
            ];

            /*
            * add the classes to load for fonts
            * */
            var fontClasses = [
                "font-myriad-regular",
                "font-myriad-bold",
                "font-opensans-semibold",
                "font-opensans-regular",
                "font-opensans-bold",
                "font-opensans-light",
            ];

            // initializer
            function init(){
                $(document).ready(function() {
                    console.log("Assets: Loading");
                    /*
                     *  Open these functions when you need to load assets and fonts on run time
                     * */
                    // loadImagesAndSvgs();
                    loadFonts();
                    // stopDebug();
                });
            }

            // load svgs and images
            function loadImagesAndSvgs(){
                for(var i=0; i<imagesAndSvgs.length; i++){
                    (function(){
                        var img = new Image();
                        img.src = imagesAndSvgs[i];
                    }());
                }
            }

            // load fonts
            function loadFonts(){
                for(var i=0; i<fontClasses.length; i++){
                    (function(){
                        var hiddenElem = $('<p class="'+ fontClasses[i] +'">.</p>');
                        hiddenElem.css({'margin-top':'4000px', 'position': 'fixed'});
                        $('body').append(hiddenElem);
                    }());
                }
            }

            // stop debug mode
            function stopDebug(){
                console.log = function(){

                }
            }

            // call initializer
            init();

        })

}());
