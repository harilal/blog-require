define(['jquery', 'underscore', './EmployeeModel', 'text!./templates/EmployeeList.html'],
    function($, _, model, tmpl) {
        function start() {

            model.getEmployees(function(data) {
                console.log(data);
                var utmpl = _.template(tmpl);

                $("#maincontent").html(utmpl({
                    list: data.Employees
                }));

            });
        }

        return {
            start: start
        };
    });