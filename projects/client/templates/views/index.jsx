const React = require('react');
const DefaultLayout = require('../layouts/DefaultLayout.jsx');

const Index = (props) => {
  return (
    <DefaultLayout>
      <div>Section: {props.section}</div>
    </DefaultLayout>
  );
};

module.exports = Index;
