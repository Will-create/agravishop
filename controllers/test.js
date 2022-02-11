exports.install = function() {
	ROUTE('GET /test/',test);
};

function test(path) {

	var controller = this;
	var uri = controller;



	controller.plain(uri);
}