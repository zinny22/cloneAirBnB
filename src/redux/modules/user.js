import {createActions, handleActions } from "redux-actions";
import{produce} from "immer";
import { useState } from "react";

//
const SET_USER ="SET_USER";
const LOG_OUT ="LOG_OUT";
const GET_USER ="GET_USER";

const setUser = createActions(SET_USER,()=>({}))
const logOut = createActions(LOG_OUT,(user)=>({user}))
const getUser = createActions(GET_USER,(user)=>({user}))

const initialState ={
    user:null,
    is_login:false,
}


// export default handleActions(
//     {
//         [SET_USER]:(state, action)=>
//     }
// )