exports.install = function() {
	ROUTE('GET /test/',test);
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