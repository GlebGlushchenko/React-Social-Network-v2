import post__avatar from '../../img/profile/profile__avatar.png'

import like1 from '../../img/posts/like.png'

const Post = ({
  index,
  postText,
  like,
  id,
  handlerAddLike,
  handlerRemovePost,
  handlerRemoveLike,
}) => {
  return (
    <div className="post__wrapper">
      <img src={post__avatar} alt="" />
      <div className="post__text">{postText}</div>

      <div className="like__wrapper">
        <img
          onClick={() => {
            like < 1 ? handlerAddLike(id) : handlerRemoveLike(id)
          }}
          className="like"
          width="30px"
          src={like1}
          alt=""
        />
        <p className="like__count">{like}</p>
        <p
          onClick={() => {
            handlerRemovePost(id)
          }}>
          remove
        </p>
      </div>
    </div>
  )
}

export default Post
