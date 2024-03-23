import React, { useState, useEffect } from 'react';
import PostCard from '../PostCard/PostCard';
import './Posts.css';
import postData from '../../data/data.json'; 


const Posts = ({ searchTerm }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postData); 
  }, []);

  const searchLower = searchTerm?.toLowerCase() || '';

  const filteredPosts = posts.filter(post => {
    const titleLower = post.title?.toLowerCase() || '';
    const descriptionLower = post.text?.toLowerCase() || '';
    return titleLower.includes(searchLower) || descriptionLower.includes(searchLower);
  });


  return (
    <div className="container">
      <div className="posts-grid">
        {filteredPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;