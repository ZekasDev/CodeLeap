import { createStore, applyMiddleware } from "redux";
import { nanoid } from "nanoid";

const initialState = {
  username: "",
  posts: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "ADD_POST":
      const newPost = {
        ...action.payload,
        id: nanoid(),
      };
      return { ...state, posts: [newPost, ...state.posts] };
    case "DELETE_POST":
      const postId = action.payload;
      const filteredPosts = state.posts.filter((post) => post.id !== postId);
      return { ...state, posts: filteredPosts };
    case "EDIT_POST":
      const { id, title, content } = action.payload;
      const editedPosts = state.posts.map((post) => {
        if (post.id === id) {
          return { ...post, title, content };
        }
        return post;
      });
      return { ...state, posts: editedPosts };
    default:
      return state;
  }
}

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("state", JSON.stringify(store.getState()));
  return result;
};

const store = createStore(
  rootReducer,
  JSON.parse(localStorage.getItem("state")) || initialState,
  applyMiddleware(localStorageMiddleware)
);

export default store;
