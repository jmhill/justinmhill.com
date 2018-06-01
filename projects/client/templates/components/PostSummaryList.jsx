const React = require('react');
const { PostSummary } = require('./PostSummary.js');

export const PostSummaryList = (props) => {
  let posts = props.posts;

  return (
    <div>
      {posts.map(post => {
        return (
          <PostSummary
            key={post._id}
            post={post}
          />
        );
      })}
    </div>
  );
};
