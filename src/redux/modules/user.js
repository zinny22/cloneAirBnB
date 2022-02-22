import {createAction, handleActions } from "redux-actions";
import{produce} from "immer";
import axios from "axios";


//액션 함수 
const SET_USER ="SET_USER";
const LOG_OUT ="LOG_OUT";


//액션생성함수 
const logout = createAction(LOG_OUT,(user)=>({user}))
const setUser = createAction(SET_USER, (user) => ({user}));

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
            console.log(response)
            localStorage.setItem("is_login", response.data.token)
            dispatch(setUser({
                is_login: response.data.token,
                user_id:response.data.user.user_id,
                user_nick:response.data.user.user_nick
            }
            ))
        })
        .catch((error)=>{
            console.log(error);
            window.alert("아이디 비밀번호가 일치하지 않습니다")
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

//로그인 체크 미들웨어
const loginCheckDB =()=>{
    return function(dispatch, getState, {history}){
        axios.get('http://54.180.81.174:3000/api/auth',
        {headers: {Authorization : `Bearer ${localStorage.getItem("is_login")}`}})
        .then((response)=>{
            console.log(response)
            dispatch(setUser({
                is_login: response,
                user_id:response.data.user.user_id,
                user_nick:response.data.user.user_nick
            }))
            // history.push('/')
        })
        .catch((error)=>{
            window.alert(error)
        })
    }
}

//중복체크 미들웨어
const dubCheckIdFB =(id)=>{
    return function(dispatch, getState, {history}){
        axios.post('http://54.180.81.174:3000/api/signup/checkid',
        {user_id: id})
        .then((response)=>{
            console.log(response)
            console.log(response.data.success)
            console.log(response.data.fail)
            window.alert(response.data.msg)
        }).catch((error)=>{
            console.log(error)
            // window.alert(error.data.fail)
        })
    }
}

const dubCheckNickFB =(nick)=>{
    return function(dispatch, getState, {history}){
        axios.post('http://54.180.81.174:3000/api/signup/checknick',
        {user_nick: nick})
        .then((response)=>{
            console.log(response)
            window.alert(response.data.msg)
        }).catch((error)=>{
            console.log(error)
            // window.alert(error.data.fail)
        })
    }
}

export default handleActions(
    {
        [SET_USER]:(state, action) => produce(state, (draft)=>{
            draft.user = action.payload.user
            draft.is_login = true;
            console.log(draft.is_login)
            console.log(draft.user)
        }),
        [LOG_OUT]:(state, action) => produce (state,(draft)=>{
            localStorage.clear();
            draft.user=null
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
    logout,
    loginCheckDB,
    dubCheckIdFB,
    dubCheckNickFB
}
export {actionCreators}