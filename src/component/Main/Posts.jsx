import React, { useState } from 'react';
import Post from './Post';

const Posts = () => {
  const massages = {
    mess: [
      { id: 1, text: 'Hi', like: 0 },
      { id: 2, text: 'Wellcome', like: 0 },
      { id: 3, text: 'lorem ipsum', like: 0 },
      { id: 4, text: 'Lorem Ipsum has been', like: 0 },
      { id: 5, text: 'Bye', like: 0 },
      { id: 6, text: 'lorem ipsum', like: 0 },
    ],
  };

  const [postText, setPostText] = useState(massages);

  const [test, setTest] = useState(null);

  const onChangeInput = (text) => {
    setTest(text.currentTarget.value);
  };

  const OnAddPost = () => {
    setPostText({
      mess: [...postText.mess, { text: test }],
    });
    setTest('');
  };

  return (
    <div className="posts">
      <h2>Post</h2>
      <div className="posts__wrapper">
        <div className="posts__content">
          {postText.mess.map((post, index) => (
            <Post key={index} postText={post.text} />
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
