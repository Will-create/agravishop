exports.install = function() {
	ROUTE('GET /test/',test);
	ROUTE('GET /reboot/',reboot);
	ROUTE('GET /pref/',pref);
	ROUTE('GET /cache/',cache);
};

function test() {
	var self = this;
			var filter = NOSQL('pages').find();
		filter.callback(function (err, docs, count){
			console.log(err);
			console.log(docs);
			console.log(count);
			self.json(err);
		});
}
function reboot() {
	var self = this;

			setTimeout(function() {
				 F.refresh();
			},2000);
	self.plain('Application will refresh in 2s');



}
function pref() {
	var self = this;
	console.log(FUNC.clients());
	self.json(FUNC.clients(self.ip));



}
function cache() {
	var self = this;

	switch(self.query.cmd){
		case 'list' :
			var data = F.cache.items;
			self.json({cache : data});
			break;
		case 'clear' :
			F.cache.clear();
			self.plain('Application cache is cleared!');
			break;
		default :
			self.plain('Unknow command');
	}
}