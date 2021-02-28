import post__avatar from '../../img/profile/profile__avatar.png';

import like1 from '../../img/posts/like.png';

const Post = ({ index, postText, like, onAddLike, id, onRemoveLike, onRemovePost }) => {
  return (
    <div className="post__wrapper">
      <img src={post__avatar} alt="" />
      <div className="post__text">{postText}</div>

      <div className="like__wrapper">
        <img
          onClick={() => (like >= 1 ? onRemoveLike(id) : onAddLike(id))}
          className="like"
          width="30px"
          src={like1}
          alt=""
        />
        <p className="like__count">{like}</p>
        <p onClick={() => onRemovePost(index)}>remove</p>
      </div>
    </div>
  );
};

export default Post;
