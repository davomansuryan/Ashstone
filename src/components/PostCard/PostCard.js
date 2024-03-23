import React from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
  return (
    <article className="post-card">
      <img
        src={post.img}
        srcSet={`${post.img}, ${post.img_2x} 2x`}
        alt={post.title}
        className="post-image"
      />
      <p className="post-tag">{post.tags}</p>
      <h3 className="post-title">{post.title}</h3>
      <div className='post-info'>
        <p className='post-autor'>{post.autor}</p>
        <p className='post-info-text post-date'>{post.date}</p>
        <p className='post-info-text'>{post.views}</p>
      </div>
      <p className='post-text'>{post.text}</p>
    </article>
  );
};

export default PostCard;