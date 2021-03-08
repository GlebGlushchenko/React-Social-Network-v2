import React, { useState } from 'react'
import { addPostAC, updateNewPostTextAC } from '../redux/profileReducer'
import Post from './Post'

const Posts = ({
  profilePage,
  OnAddPost,
  onChangeInput,
  onAddLike,
  onRemovePost,
  onRemoveLike,
}) => {
  const newPostElement = React.createRef()

  const handlerChangeUnputText = () => {
    onChangeInput(newPostElement.current.value)
  }

  const handlerAddPost = () => {
    OnAddPost()
  }

  const handlerAddLike = (id) => {
    onAddLike(id)
  }

  const handlerRemovePost = (id) => {
    onRemovePost(id)
  }

  const handlerRemoveLike = (id) => {
    onRemoveLike(id)
  }

  return (
    <div className="posts">
      <h2>Post</h2>
      <div className="posts__wrapper">
        <div className="posts__content">
          {profilePage.posts.map((post, index) => (
            <Post
              handlerRemoveLike={handlerRemoveLike}
              handlerRemovePost={handlerRemovePost}
              handlerAddLike={handlerAddLike}
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
            ref={newPostElement}
            value={profilePage.newPostText}
            onChange={handlerChangeUnputText}
            className="posts__controle__input"
            type="text"
            placeholder="Input text"
          />
          <button onClick={handlerAddPost} className="posts__controle__btn">
            POST
          </button>
        </div>
      </div>
    </div>
  )
}

export default Posts

{
  /* <Post postText={textPost} />
          <Post postText={textPost} />
          <Post postText={textPost} /> */
}
