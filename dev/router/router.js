define(['page'], function(page) {
	page('*', routerFn);
    page.start();
    function routerFn(ctx) {
    	if (ctx.hash === 'home') { 
    		require(['modules/home/HomeCtrl'], function(home) {
    			home.start();
    		});
        }else if (ctx.hash === 'employee') {
            
        }else if (ctx.hash === 'project') {
            
        }else {
        	page('#home');
        }
    }
});