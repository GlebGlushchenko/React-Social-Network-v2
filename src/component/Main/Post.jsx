import React, { useState } from 'react';

import post__avatar from '../../img/profile/profile__avatar.png';

import like1 from '../../img/posts/like.png';

const Post = ({ postText, like }) => {
  return (
    <div className="post__wrapper">
      <img src={post__avatar} alt="" />
      <div className="post__text">{postText}</div>

      <div className="like__wrapper">
        <img className="like" width="30px" src={like1} alt="" />
        <p className="like__count">{like}</p>
      </div>
    </div>
  );
};

export default Post;
