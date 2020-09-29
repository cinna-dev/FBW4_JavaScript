import React from 'react';

const Posts = ({ posts }) => {
  console.log(posts);
  const list = posts.map((post, i) => {
    return <li key={i}></li>;
  });
  return <ul>{list}</ul>;
};

export default Posts;
