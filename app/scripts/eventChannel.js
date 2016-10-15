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
function EventChannel(){
    this.list = {};
}

// prototype functions
EventChannel.prototype = {

    constructor: EventChannel,

    on: function(name, callback) {

        if(!this.list[name])
            this.list[name] = [];

        this.list[name].push({callback:callback});

    },

    off:function(name){
        if(this.list[name])
            delete this.list[name];
    },

    fire: function(name){

        for(var i in this.list){

            if(i === name) {
                var details = {
                    name: '',
                    data: null
                };
                var args = Array.prototype.slice.call(arguments);
                details.name = args[0];
                args.splice(0, 1);
                details.data = args;
                for(var j=0; j< this.list[name].length; j++) {
                    this.list[name][j].callback.apply(this, [details]);
                }
            }
        }
    }

};

// bind eventChannel instance to window (for global usage)
window.eventChannel = new EventChannel();