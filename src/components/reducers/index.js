import { combineReducers } from "redux";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_POSTS":
      return [...state, action.payload];

    default:
      return state;
  }
};

const postsIdReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_POSTS_ID":
      return [...state, action.payload];
    default:
      return state;
  }
};

export const Reducers = combineReducers({
  posts: postsReducer,
  postsIds: postsIdReducer,
});
