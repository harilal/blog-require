define(['jquery', 'underscore', 'text!./templates/ProjectsList.html'], function($, _, tmpl) {
    function start() {
        var utmpl = _.template(tmpl);
        $("#maincontent").html(utmpl());
    }

    return {
        start: start
    };
});