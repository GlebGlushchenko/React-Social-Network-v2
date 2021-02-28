import React, { useState } from 'react';
import Post from './Post';

const Posts = ({ posts }) => {
  const [postText, setPostText] = useState(posts);

  const [test, setTest] = useState('');

  const onChangeInput = (text) => {
    setTest(text.currentTarget.value);
  };

  const OnAddPost = () => {
    setPostText({
      postText: [...postText.postText, { text: test }],
    });
    setTest('');
  };

  return (
    <div className="posts">
      <h2>Post</h2>
      <div className="posts__wrapper">
        <div className="posts__content">
          {postText.postText.map((post, index) => (
            <Post like={post.like} key={post.id} postText={post.text} />
          ))}
        </div>
        <div className="posts__control">
          <input
            value={test}
            onChange={onChangeInput}
            className="posts__controle__input"
            type="text"
            placeholder="Input text"
          />
          <button onClick={OnAddPost} className="posts__controle__btn">
            POST
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;

{
  /* <Post postText={textPost} />
          <Post postText={textPost} />
          <Post postText={textPost} /> */
}
