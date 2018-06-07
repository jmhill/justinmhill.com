const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout.jsx');

const Projects = props => (
  <DefaultLayout>
    <div>Section: {props.section}</div>
  </DefaultLayout>
);

module.exports = Projects;
