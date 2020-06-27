import axios from "axios";

const baseUrl = "https://hacker-news.firebaseio.com/v0";

export const getPostsIds = () => async (dispatch) => {
  const response = await axios.get(`${baseUrl}/newstories.json`);
  dispatch({
    type: "GET_POSTS_ID",
    payload: response.data,
  });
};

export const getPosts = (id) => async (dispatch) => {
  const response = await axios.get(`${baseUrl}/item/${id}.json`);
  console.log(response);
  dispatch({
    type: "GET_POSTS",
    payload: response.data,
  });
};
