var keystone = require('keystone');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var props = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  props.section = 'projects';

  // Render the view
  view.render('projects');
};