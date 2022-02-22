import {createAction, handleActions} from "redux-actions"
import {produce} from "immer"
import axios from "axios";

const IS_LIKE = "IS_LIKE"

const isLike = createAction(IS_LIKE, () => ({}));

const initialState = {
    is_like: false
};


const likeDB = (home_id, user_id) => {
    return function (dispatch, getState, { history }) {
        axios
          .post(`/api/homes/${home_id}/likes`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("is_login")}`,
            },
          })
          .then((res) => {
            dispatch(isLike(true))
          })
          .catch((err) => {
            console.error(err)
          })
    }
}

const UnLikeDB = (home_id, user_id) => {
    return function (dispatch, getState, { history }) {
        axios
          .delete(`/api/homes/${home_id}/likes`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("is_login")}`,
            },
          })
          .then((res) => {
            dispatch(isLike(false))
          })
          .catch((err) => {
            console.error(err)
          })
    }
}

export default handleActions(
    {
      [IS_LIKE]: (state, action) =>
        produce(state, (draft) => {
          draft.is_like = action.payload.is_like;
        })
    },
    initialState,
  );



const actionCreators = {
    likeDB,
    UnLikeDB
}

export {actionCreators};