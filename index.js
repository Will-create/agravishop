// ===================================================
// FOR PRODUCTION
// Total.js - framework for Node.js platform
// https://www.totaljs.com
// ===================================================

var fs = require('fs');
var options = {};
options.ip = 'auto';
options.port = 8001;
var framework = require('total.js');
framework.http('release', options);
