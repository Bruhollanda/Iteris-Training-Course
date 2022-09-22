import React from 'react';
import { useState } from 'react';
import "./BlogPost.css";

export default function BlogPost({ post }) {
  const [getCounter, setCounter] = useState(0);
  const [getPost, setPost] = useState(post);

  const handleShareClick = () => {
    setCounter(getCounter + 1);
  };

  const handleCheckImage = () => {
    const toggleImage = !post.showImage;
    console.log(toggleImage);
    setPost({ ...post, showImage: toggleImage });
  };

  return (
    <>
      <br /> <br /> 
      <span>Counter: { getCounter }</span>
      <br />
      <button onClick={ handleShareClick }>Click here</button>
      <article>
        <label>
          Show Image: {" "}
          <input
            type="checkbox"
            defaultChecked={ getPost.showImage }
            onChange={ handleCheckImage }
          />
        </label>
        <h2>{ post.title }</h2>
        { post.showImage ?
            <div>
              <img src={ post.image } alt={ post.title } />
            </div>
          :
          <></>
        }
        <p>{ post.text }</p>
      </article>
    </>
  )
}
