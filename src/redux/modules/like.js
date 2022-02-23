import {createAction, handleActions} from "redux-actions"
import {produce} from "immer"
import axios from "axios";

const IS_LIKE = "IS_LIKE"

const isLike = createAction(IS_LIKE, (is_like) => ({is_like}));

const initialState = {
    list: [],
    is_like: false
};


const likeDB = (home_id, user_id) => {
    return function (dispatch, getState, { history }) {
        axios
          .post(`http://54.180.81.174:3000/api/homes/${home_id}/likes`,{

          }, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("is_login")}`,
            }
          })
          .then((res) => {
            window.alert(res.data.success);
            window.location.reload("");
          })
          .catch((err) => {
            console.error(err)
          })
    }
}

const UnLikeDB = (home_id) => {
    return function (dispatch, getState, { history }) {
        axios
          .delete(`http://54.180.81.174:3000/api/homes/${home_id}/likes`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("is_login")}`
            }
          })
          .then((res) => {
            window.alert(res.data.success);
            window.location.reload("");
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