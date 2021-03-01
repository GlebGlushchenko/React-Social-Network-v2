import React, { useState } from 'react';
import Post from './Post';

const Posts = ({ profilePage, addPost }) => {
  const [posts, setPosts] = useState(profilePage);

  const [inputText, setInputText] = useState('');

  const onChangeInput = (text) => {
    setInputText(text.currentTarget.value);
  };

  const OnAddPost = () => {
    // setPosts({
    //   ...posts,
    //   posts1: [...posts.posts1, { text: inputText, like: 0 }],
    // });

    // setInputText(' ');
    addPost(inputText);
  };

  const onRemovePost = (id) => {
    setPosts({
      posts1: [
        ...posts.posts1.filter((_, curId) => {
          if (id !== curId) {
            console.log(curId);
            return true;
          }
          return false;
        }),
      ],
    });
  };

  const onAddLike = (id) => {
    console.log(id);
    setPosts({
      ...posts,
      posts1: [
        ...posts.posts1.map((post) => {
          return post.id === id ? { ...post, like: post.like + 1 } : post;
        }),
      ],
    });
  };

  const onRemoveLike = (id) => {
    setPosts({
      ...posts,
      posts1: [
        ...posts.posts1.map((post) => {
          return post.id === id ? { ...post, like: post.like - 1 } : post;
        }),
      ],
    });
  };

  return (
    <div className="posts">
      <h2>Post</h2>
      <div className="posts__wrapper">
        <div className="posts__content">
          {profilePage.posts.map((post, index) => (
            <Post
              onRemovePost={onRemovePost}
              onAddLike={onAddLike}
              onRemoveLike={onRemoveLike}
              id={post.id}
              like={post.like}
              key={index}
              postText={post.text}
              index={index}
            />
          ))}
        </div>
        <div className="posts__control">
          <input
            value={inputText}
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
