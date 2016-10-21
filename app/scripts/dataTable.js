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
function DataTable(){

}

// prototype functions
DataTable.prototype = {
    constructor: DataTable,
    init: function(element) {
        $(document).ready(function() {
            $(element).DataTable({
                "bFilter": false,
                "bLengthChange": false
            });
        });
    }

};

// bind eventChannel instance to window (for global usage)
window.DataTable = new DataTable();