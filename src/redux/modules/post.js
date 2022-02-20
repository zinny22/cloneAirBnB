import { createAction, handleActions } from "redux-actions"
import { produce } from "immer"
import axios from "axios";

const GET_POST = "GET_POST"

const getPost = createAction(GET_POST, (postList) => ({postList}))

const initialState = {
    list: [],
}

const getPostDB = (category) => {
    return function (dispatch, getState, { history }) {
        axios
          .get(`http://52.79.227.179:3000/api/main?category=${category}`)
          .then((res) => {
            dispatch(getPost(res.data))
          })
          .catch((err) => {
            console.error(err)
          })
    }
}

export default handleActions(
    {
      [GET_POST]: (state, action) =>
        produce(state, (draft) => {
          draft.list = action.payload.postList
          console.log(draft.list)
        })
    },
    initialState
  )

const actionCreators = {
    getPost,
    getPostDB,
  }
  export { actionCreators }