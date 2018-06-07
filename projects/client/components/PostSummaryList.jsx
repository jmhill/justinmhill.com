const React = require('react');
const { PostSummary } = require('./PostSummary.js');

export const PostSummaryList = (props) => {
  const posts = props.posts;

  return (
    <div>
      {posts.map(post => (
        <PostSummary
          key={post._id}
          post={post}
        />
        ))}
    </div>
  );
};
