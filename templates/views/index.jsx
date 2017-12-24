const React = require('react');

module.exports = (props) => {
  return (
    <div>
      <div>Hello World!</div>
      <div>{props.section}</div>
    </div>
  );
};
