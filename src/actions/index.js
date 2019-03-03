import axios from "axios";
import { SAVE_COMMENT } from "actions/types";
import { FETCH_COMMENTS } from "./types";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    comment
  };
}

export async function fetchComments() {
  const comments = await axios.get("http://jsonplaceholder.typicode.com/comments");

  return {
    type: FETCH_COMMENTS,
    comments
  };
    // return (dispatch, getState) => {
    //     dispatch({ type: FETCH_COMMENTS, comments });
    // }
}
