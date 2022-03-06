exports.install = function() {

	GROUP(['#middleware1'], function() {
   			ROUTE('/*', view_cms);
    });

	ROUTE('/language/fr/',set_french)
	ROUTE('/language/en/',set_english)

	// Posts
	ROUTE('#posts', view_posts, ['*Post']);
	ROUTE('#post', view_posts_detail, ['*Post']);
	ROUTE('#notices', view_notices, ['*Notice']);
};

function view_cms() {
	var self = this;
	self.CMSpage();
}

// this controller sets the user language to french
function set_french(){
	var self = this;
	console.log('Set language to french');
	self.res.cookie('_lang','fr','5 days');
	this.redirect('/');
}

// this controller sets the user language to english
function set_english(){
	var self = this;
	console.log('set the user language to english');
	self.cookie('_lang','en','5 days');
	this.redirect('/');

}

function view_posts() {
	var self = this;
	var options = {};

	options.page = self.query.page;
	options.published = true;
	options.limit = 10;
	// options.category = 'category_linker';

	self.sitemap();
	self.$query(options, self.callback('posts'));
}

function view_posts_detail(linker) {

	var self = this;
	var options = {};

	options.linker = linker;
	// options.category = 'category_linker';

	self.$workflow('render', options, function(err, response) {

		if (err) {
			self.throw404();
			return;
		}

		self.sitemap();
		self.sitemap_replace(self.sitemapid, response.name);
		self.view('cms/' + response.template, response);
	});
}

function view_notices() {
	var self = this;
	var options = {};

	options.published = true;

	self.sitemap();
	self.$query(options, self.callback('notices'));
}