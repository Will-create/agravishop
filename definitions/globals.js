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
  var cookie = $.req.cookie('_lang');
  if (!cookie){
    $.next();
	  return;
	}

  if(cookie == 'en'){
    var url = $.controller.url;
    //$.controller.plain(split);
    if($.req.split[$.req.split.length -1] != 'en'){
    $.controller.redirect(url == '/' ?'/en' : url+'en' );
    return;
    }
    $.next();
  }else{

    $.next();
  }


    // or
    // $.next(false);

});
ON('controller',function($){
	var self = $;
	PREF.language = self.req.language;
	var cookie = self.cookie('_lang');
	console.log('This user '+ self.ip +' has heen given a cookie _lang : '+cookie );
	if (!cookie){
		self.cookie('_lang',$.req.language,'5 days');

	}
});
