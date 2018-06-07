const React = require('react');

const ContentBlock = (props) => {
  const content = props.content;

  return (
    <div>
      <h2 className="content-subhead">{content.title}</h2>
      <p>{content.body}</p>
    </div>
  );
};

module.exports = ContentBlock;

ContentBlock.propTypes = {
  content: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string,
  }).isRequired,
};
