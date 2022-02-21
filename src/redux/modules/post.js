import { createAction, handleActions } from "redux-actions"
import { produce } from "immer"
import axios from "axios";

const GET_POST = "GET_POST"
const GET_POSTDETAIL = "GET_POSTDETAIL"

const getPost = createAction(GET_POST, (postList) => ({postList}))
//postDetail 은 내가 원하는 명으로 저장 
const getPostDetail = createAction(GET_POSTDETAIL, (postDetail) => ({postDetail}))


const initialState = {
    list: [],
}

const getPostDB = (category) => {
    return function (dispatch, getState, { history }) {
        axios
          .get(`http://54.180.81.174:3000/api/homes?category=${category}`)
          .then((res) => {
            dispatch(getPost(res.data))
          })
          .catch((err) => {
            console.error(err)
          })
    }
}

const getPostDetailDB = (home_id) => {
  return function (dispatch, getState, { history }) {
      axios
        .get(`http://54.180.81.174:3000/api/homes/${home_id}`)
        .then((res) => {
          dispatch(getPostDetail(res.data))
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
        }),
      [GET_POSTDETAIL]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload)
        draft.detail = action.payload.postDetail
        console.log(draft.detail)
      }),  
    },
    initialState
  )

const actionCreators = {
    getPost,
    getPostDB,
    getPostDetail,
    getPostDetailDB,
  }
  export { actionCreators }