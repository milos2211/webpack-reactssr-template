import { FETCH_POSTS, GET_POST } from "../actions/posts"

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case GET_POST:
      return {
        ...state,
        post: action.post
      }
    default:
      return state;
  }
};
