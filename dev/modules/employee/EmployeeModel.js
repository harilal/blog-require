define(['jquery'], function($) {
    "use strict";

    function getEmployees(callback) {
        $.getJSON("./data/employee.json", function(data) {
            callback(data);
        });
    }

    return {
        getEmployees: getEmployees
    }

});