/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

// const keystone = require('keystone');
// const middleware = require('./middleware');

// const importRoutes = keystone.importer(__dirname);

// Common Middleware
// keystone.pre('routes', middleware.initLocals);
// keystone.pre('render', middleware.flashMessages);

// // Import Route Controllers
// const routes = {
//   views: importRoutes('./views'),
// };

// Setup Route Bindings
// 'app' parameter is express application,
// so anything we can do to an express app, we can do here.
module.exports = handler => (app) => {
  // Provide a test endpoint
  app.get('/api/test', (request, response) => response.json({ data: 'It worked!' }));
  
  // TODO: get rid of the below bindings and mount the api router here
  // app.get('/about', routes.views.about);
  // app.get('/blog/:category?', routes.views.blog);
  // app.get('/blog/post/:post', routes.views.post);
  // app.all('/contact', routes.views.contact);
  // app.get('/gallery', routes.views.gallery);
  // app.get('/projects', routes.views.projects);
  
  // Use the client-provided handler for all other (non-api) requests to the server
  // This enables server-side rendering for page requests
  app.get('*', (request, response) => handler(request, response));
  
  // NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
  // app.get('/protected', middleware.requireUser, routes.views.protected);
};
