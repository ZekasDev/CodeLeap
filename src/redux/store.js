import { createStore, applyMiddleware } from "redux";

const initialState = {
  username: "",
  posts: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.payload] };
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
