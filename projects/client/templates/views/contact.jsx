const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout.jsx');

const Contact = (props) => {
  return (
    <DefaultLayout>
      <div>Section: {props.section}</div>
    </DefaultLayout>
  );
};

module.exports = Contact;