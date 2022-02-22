import {createAction, handleActions } from "redux-actions";
import{produce} from "immer";
import axios from "axios";


//액션 함수 
const SET_USER ="SET_USER";
const LOG_OUT ="LOG_OUT";


//액션생성함수 
const logout = createAction(LOG_OUT,(user)=>({user}))
const setUser = createAction(SET_USER, () => ({}));

const initialState ={
    user:null,
    is_login:false,
}

//미들웨어
//로그인 미들웨어 
const logInDB = (id, pwd)=>{
    return async function(dispatch,getState, {history}){
        await axios.post('http://54.180.81.174:3000/api/login',{
            user_id: id,
            user_pwd : pwd
        })
        .then((response)=>{
            window.alert("로그인이 완료 되었습니다")
            localStorage.setItem("is_login", response.data.token)
            dispatch(setUser())
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}
//회원가입 미들웨어 
const signUpDB = (id,nick,pwd,confirmpwd) =>{
    return function(dispatch,getState, {history}){
        console.log(id,nick,pwd,confirmpwd)
        axios.post('http://54.180.81.174:3000/api/signup',{
            user_id:id,
            user_nick:nick,
            user_pwd: pwd,
            confirmPassword: confirmpwd
        })
        .then((response)=>{
            console.log(response)
            window.alert(response.data.success)
            history.push('/')
        })
        .catch((error)=>{
            window.alert(error)
        }) 
    }
}

//로그아웃 미들웨어
const logOutDB =()=>{
    return function(dispatch, getState, {history}){
        dispatch(logout())
        history.push('/')
    }
}

export default handleActions(
    {
        [SET_USER]:(state, action) => produce(state, (draft)=>{
            draft.is_login = true;
            console.log(draft.is_login)
        }),
        [LOG_OUT]:(state, action) => produce (state,(draft)=>{
            localStorage.clear();
            draft.is_login =false;
        }),
    },
    initialState
)

const actionCreators ={
    signUpDB,
    logInDB,
    logOutDB,
    setUser,
    logout
}
export {actionCreators}