define(['page'], function(page) {
    page('*', routerFn);
    page.start();

    function routerFn(ctx) {
        if (ctx.hash === 'home') {
            require(['modules/home/HomeCtrl'], function(home) {
                home.start();
            });
        } else if (ctx.hash === 'employee') {
            require(['modules/employee/EmployeeCtrl'], function(home) {
                home.start();
            });

        } else if (ctx.hash === 'project') {
            require(['modules/projects/ProjectsCtrl'], function(home) {
                home.start();
            });

        } else {
            page('#home');
        }
    }
});