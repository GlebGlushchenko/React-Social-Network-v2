import React, { useState } from 'react';

import post__avatar from '../../img/profile/profile__avatar.png';

import like from '../../img/posts/like.png';

const Post = ({ postText }) => {
  const [likeCount, setLikeCount] = useState(0);

  const onAddLike = () => {
    if (likeCount <= 0) {
      setLikeCount(likeCount + 1);
    } else if (likeCount >= 1) {
      setLikeCount(likeCount - 1);
    }
  };
  return (
    <div className="post__wrapper">
      <img src={post__avatar} alt="" />
      <div className="post__text">{postText}</div>

      <div className="like__wrapper">
        <img onClick={onAddLike} className="like" width="30px" src={like} alt="" />
        <p className="like__count">{likeCount}</p>
      </div>
    </div>
  );
};

export default Post;
