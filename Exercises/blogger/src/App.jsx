import React, { useState, useEffect } from 'react';
import Posts from './components/Posts.jsx';
import Blogger from './components/Blogger.jsx';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  //componentDidMount , componentDidUpdate, componentWillUnmount
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  const blogging = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blogs</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Blogger
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        changePageNumber={blogging}
      />
    </div>
  );
};

export default App;
