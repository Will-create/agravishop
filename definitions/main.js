F.onLocale = function(req) {
	var lang = req.cookie('_lang'); // retrieve language cookie value

	if (!lang){
		// set French as default language
		return 'fr';
	}

	return lang;
};