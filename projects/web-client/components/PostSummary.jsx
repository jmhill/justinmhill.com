const React = require('react');

const PostSummary = (props) => {
  const post = props.post;

  return (
    <section className="post">
      <h2 className="post-title">
        <a href={post.url}>{post.title}</a>
      </h2>
      <p className="post-meta">{formatDate(post.datePublished)}</p>
      <div className="post-description">
        {post.summary}
        <a href={post.url}> Read more...</a>
      </div>
    </section>
  );
};

function formatDate(dateString) {
  const date = new Date(dateString);
  const format = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  return date.toLocaleDateString('en-US', format);
}

PostSummary.propTypes = {
  post: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    datePublished: React.PropTypes.string,
    summary: React.PropTypes.string,
  }),
};
