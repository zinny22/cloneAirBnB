import { createAction, handleActions } from "redux-actions"
import { produce } from "immer"
import axios from "axios";

const GET_POST = "GET_POST"
const GET_POSTDETAIL = "GET_POSTDETAIL"
const ADD_POST ="ADD_POST"
const ADD_IMAGE ="ADD_IMAGE"

const getPost = createAction(GET_POST, (postList) => ({postList}))
//postDetail 은 내가 원하는 명으로 저장 
const getPostDetail = createAction(GET_POSTDETAIL, (postDetail) => ({postDetail}))
const addPost = createAction(ADD_POST, (post)=>({post}))
const addImage = createAction(ADD_IMAGE, (imgurl)=>({imgurl}))


const initialState = {
    list: [],
    imgurl:[] 
}

const addPostDB = (home, address, introduce, price,category,image_url)=>{
  // console.log(home, address, introduce, price,category,image_url)
  return function(dispatch, getState, { history }){
    const _postList ={
      home_name:home,
      category:address,
      address:introduce,
      image_url:image_url,
      introduce:category,
      price:price
    }
    let postList ={..._postList}
    axios.post('http://54.180.81.174:3000/api/hosting',
      { home_name:home,
        category:address,
        address:introduce,
        image_url:image_url,
        introduce:category,
        price:price},
        {headers: {
          Authorization: `Bearer ${localStorage.getItem("is_login")}`,
        }}
        
        )
      .then((response)=>{
        window.alert(response.data.success)
        dispatch(addPost(postList))
        history.push('/')
      })
      .catch((error)=>{
        console.log(error)
      })
  }
}

const getPostDB = (category) => {
    return function (dispatch, getState, { history }) {
        axios
          .get(`http://54.180.81.174:3000/api/homes?category=${category}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("is_login")}`,
            },
          })
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

const upLoadDB =(formData)=>{
  console.log(formData)
  return function(dispatch, getState, {history}){
    axios
    .post('http://54.180.81.174:3000/api/imgs', formData, {            
      headers: {
      Authorization: `Bearer ${localStorage.getItem("is_login")}`,
    },})
    .then((response)=>{
      console.log(response.data.imgurl)
      dispatch(addImage(response.data.imgurl))
    })
    .catch((err)=>{
      console.log(err)
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
      [ADD_POST]: (state, action) =>
      produce(state, (draft)=>{
        draft.list.unshift(action.payload.postList)
      }),
      [ADD_IMAGE]:(state, action)=>
      produce(state,(draft)=>{
        draft.imgurl = action.payload.imgurl
      })
    },
    initialState
  )

const actionCreators = {
    getPost,
    getPostDB,
    getPostDetail,
    getPostDetailDB,
    addPostDB,
    addPost,
    upLoadDB
  }
  export { actionCreators }