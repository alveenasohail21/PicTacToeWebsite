/*
 * Name: eventChannel.js
 * Purpose: Library to handle custom events, this will be bind to window.eventChannel
 * Example Usage:
 * --------------
 * Call through -> window.eventChannel OR eventChannel
 * --------------
 * Register Event
 * eventChannel.on('eventName', callbackFunction );
 * --------------
 * Fire Event
 * eventChannel.fire('eventName');
 * --------------
 * Unregister All Callback of a Particular Event
 * eventChannel.off('eventName');
 * */


// class details
function ImageLazyLoad(){

}

// prototype functions
ImageLazyLoad.prototype = {

    constructor: ImageLazyLoad,

    loadBackgroundImage: function(element) {
        $(document).ready(function() {
            $("div."+element).lazyload({
                effect : "fadeIn"
            });
        });
    },
    loadImage: function(element) {
        $(document).ready(function() {
            $("img."+element).lazyload({
                effect : "fadeIn"
            });
        });
    }

};

// bind data table instance to window (for global usage)
window.ImageLazyLoad = new ImageLazyLoad();