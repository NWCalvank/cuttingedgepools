global.jQuery = require('jquery');
require('bootstrap');
// stylesheets
require('../css/pages/about-us/main.css');
require('../css/pages/contact-us/main.css');
require('../css/pages/driveways/main.css');
require('../css/pages/home/main.css');
require('../css/pages/liners/main.css');
require('../css/pages/our-work/main.css');
require('../css/pages/services/main.css');

//logic
let bannerLogic = require('./banner');
let imageInfo = require('./imageInfo');
bannerLogic();
imageInfo();
