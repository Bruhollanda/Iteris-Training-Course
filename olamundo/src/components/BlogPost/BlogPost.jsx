import React from 'react';
import "./BlogPost.css";

export default function BlogPost({ post }) {
  return (
    <article>
      <h2>{ post.title }</h2>
      <img src={ post.image } alt={ post.title } />
      <p>{ post.text }</p>
    </article>
  )
}
