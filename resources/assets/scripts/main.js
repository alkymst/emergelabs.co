// import external dependencies
import 'jquery';
import 'popper.js';
import 'bootstrap';
import FontAwesome from './FontAwesome';
import 'holderjs';

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());
