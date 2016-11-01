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
                "svg/buildings.svg",
                "svg/car.svg",
                "svg/car-logo.svg",
                "svg/cart.svg",
                "svg/gray-delete.svg",
                "svg/help.svg",
                "svg/logo-icon.svg",
                "svg/logo-text.svg",
                "svg/plus.svg",
                "svg/ptt-loader.svg",
                "svg/road.svg",
                "svg/white-delete.svg",
                "img/home-hero-top.jpg",
                "img/home-hero-bottom-left.jpg",
                "img/home-hero-bottom-center.jpg",
                "img/home-hero-bottom-right.jpg",
                "img/home-bottom-banner.jpg",
                "img/category-img-1.png",
                "img/category-img-2.png",
                "img/category-img-3.png",
                "img/category-img-4.png",
                "img/hero-img-1.jpg",
                "img/project-type.png",
                "img/point.png",
                "img/plus.png",
                "img/user.jpg",
                "img/user-pic.png",
                "img/white-tick.png",
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
                    /*
                     *  Open these functions when you need to load assets and fonts on run time
                     * */
                    loadFonts();
                    loadImagesAndSvgs();
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
