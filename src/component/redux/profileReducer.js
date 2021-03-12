const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_POST = 'ADD_POST'
const ADD_LIKE = 'ADD_LIKE'
const REMOVE_LIKE = 'REMOVE_LIKE'
const REMOVE_POST = 'REMOVE_POST'

const initialState = {
  posts: [
    { id: 1, text: 'Hi', like: 0 },
    { id: 2, text: 'Wellcome', like: 0 },
    { id: 3, text: 'lorem ipsum', like: 0 },
    { id: 4, text: 'Lorem Ipsum has been', like: 0 },
    { id: 5, text: 'Bye', like: 0 },
    { id: 6, text: 'lorem ipsum', like: 1 },
  ],
  newPostText: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 6, text: state.newPostText }],
        newPostText: '',
      }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      }

    case ADD_LIKE:
      return {
        ...state,
        posts: [
          ...state.posts.map((post) =>
            post.id === action.id ? { ...post, like: post.like + 1 } : post,
          ),
        ],
      }
    case REMOVE_POST:
      return {
        ...state,
        posts: [
          ...state.posts.filter((_, curId) => {
            if (action.id !== curId) {
              return true
            }
            return false
          }),
        ],
      }
    case REMOVE_LIKE:
      return {
        ...state,
        posts: [
          ...state.posts.map((post) =>
            post.id === action.id ? { ...post, like: post.like - 1 } : post,
          ),
        ],
      }
    default:
      return state
  }
}

export const addPostAC = () => ({ type: ADD_POST })

export const updateNewPostTextAC = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText,
})

export const addLikeAC = (id) => ({
  type: ADD_LIKE,
  id: id,
})

export const onRemovePostAC = (id) => ({
  type: REMOVE_POST,
  id: id,
})

export const onRemoveLikeAC = (id) => ({
  type: REMOVE_LIKE,
  id: id,
})

export default profileReducer
