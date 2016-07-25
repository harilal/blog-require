define(['jquery', 'underscore', 'text!./templates/Home.html'], function($, _, tmpl) {
    function start() {
        var utmpl = _.template(tmpl);
        $("#maincontent").html(utmpl());
    }

    return {
        start: start
    };
});