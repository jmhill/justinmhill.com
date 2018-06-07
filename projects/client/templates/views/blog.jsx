const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout.jsx');

const Blog = props => (
  <DefaultLayout>
    <div>Section: {props.section}</div>
  </DefaultLayout>
);

module.exports = Blog;
