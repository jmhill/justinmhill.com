const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout.jsx');

const About = (props) => {
  return (
    <DefaultLayout>
      <div>Section: {props.section}</div>
    </DefaultLayout>
  );
};

module.exports = About;
