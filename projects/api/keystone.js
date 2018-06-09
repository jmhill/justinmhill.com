/* eslint-disable global-require */

module.exports = function ex(handler) {
  // Simulate config options from your production environment by
  // customising the .env file in your project's root folder.
  require('dotenv').config();

  // Require keystone
  const keystone = require('keystone');

  // Initialise Keystone with your project's configuration.
  // See http://keystonejs.com/guide/config for available options
  // and documentation.

  keystone.init({
    name: 'justinmhill.com',
    brand: 'justinmhill.com',

    // 'less': 'public',
    // 'static': 'public',
    // 'favicon': 'public/favicon.ico',

    // 'emails': 'templates/emails',

    'auto update': true,
    session: true,
    auth: true,
    'cookie secret': 'stupidTemporarySecret',
    'user model': 'User',
  });

  // Load your project's Models
  keystone.import('models');

  // Setup common locals for your templates. The following are required for the
  // bundled templates and layouts. Any runtime locals (that should be set uniquely
  // for each request) should be added to ./routes/middleware.js
  // keystone.set('locals', {
  //   _: require('lodash'),
  //   env: keystone.get('env'),
  //   utils: keystone.utils,
  //   editable: keystone.content.editable,
  // });

  // Load your project's Routes
  keystone.set('routes', require('./routes')(handler));


  // Configure the navigation bar in Keystone's Admin UI
  keystone.set('nav', {
    posts: ['posts', 'post-categories'],
    galleries: 'galleries',
    enquiries: 'enquiries',
    users: 'users',
  });

  return keystone;
};
