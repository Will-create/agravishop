const CLIENTS = {};
FUNC.clients = function(ip){
	if(ip){
		CLIENTS[ip];
	} else{
	return CLIENTS;
	}
};
// Reads custom settings
$WORKFLOW('Settings', 'load');

$WORKFLOW('Page', 'fix');


MIDDLEWARE('middleware1', function($) {
	if($.req.split[$.req.split.length -1] == 'en'){
		console.log('English page is requested',$.req.host);
		CLIENTS[$.ip] = {language : 'en'};
		$.next();
	}else{
	if($.req.language == 'en'){
		var url = $.controller.url;
		CLIENTS[$.ip] = {language : 'en'};
		//$.controller.plain(split);
		$.controller.redirect(url == '/' ?'/en' : url+'en' );
		return;
	}else{
		CLIENTS[$.ip] = {language : 'fr'};
		return;

		$.next();
	}


	}
    // or
    // $.next(false);

});
ON('controller',function($){
		CLIENTS[$.ip] = {language : $.req.language};
});