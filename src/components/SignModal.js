import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {Text} from "../elements"
import { actionCreators as userActions} from "../redux/modules/user";

const SignModal = ({setIsSignup}) => {
    const dispatch = useDispatch();

    //이메일 닉네임 패스워드 정규식
    const idCheck = /^[A-Za-z0-9]{4,16}$/
    const nickCheck = /[A-Za-z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{4,10}$/
    const pwdCheck = /^[A-Za-z0-9]{4,16}$/

    //각각 인풋 값
    const [id, setId] = React.useState("")
    const [nick, setNick] = React.useState("")
    const [pwd, setPwd] = React.useState("")
    const [confirmpwd, setConfirmpwd] = React.useState("")
    

    const signup =()=>{

        if (id === "" || nick === "" || pwd === "" || confirmpwd === "") {
            window.alert("입력창을 확인해주세요");
            return;
          }
        if(!idCheck.test(id)){
            window.alert("아이디 형식이 맞지 않습니다")
            return;
        }
        if(!nickCheck.test(nick)){
            window.alert("닉네임 형식이 맞지 않습니다")
            return;
        }
        if(!pwdCheck.test(pwd)){
            window.alert("비밀번호 형식이 맞지 않습니다")
            return;
        }
        if(pwd !== confirmpwd){
            window.alert("비밀번호를 다시한번 확인해주세요")
            return;
        }
        if(id === pwd){
            window.alert("아이디와 비밀번호가 똑같습니다")
        }
        
        dispatch(userActions.signUpDB(id,nick,pwd,confirmpwd))
    }

    const dubCheckId =()=>{
        if(id ===""){
            window.alert("아이디를 입력해 주세요")
            return;
        }
        dispatch(userActions.dubCheckIdFB(id))
    }

    const dubCheckNick =()=>{
        if(nick ===""){
            window.alert("닉네임을 입력해 주세요")
            return;
        }
        dispatch(userActions.dubCheckNickFB(nick))
    }
return(
     <React.Fragment>
         <Black onClick={()=>setIsSignup(false)}/>
         <Wrap>
            <Header>
                <div onClick={()=>setIsSignup(false)}>
                    <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill:" none", height: "16px", width: "16px", stroke: "#222222", strokeWidth: "3", overflow: "visible",cursor:"pointer"}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                </div>
                <div>회원가입</div>
                <div></div>
            </Header>
            <Text size="22px" bold>에어비엔비에 오신걸 환영합니다</Text>
            <div style={{displayL:"flex", justifyContent:"space-around"}}>
                <Input placeholder={"id는 영문 대,소문자와 숫자를 포함한 4~16자"} padding="0px 30px" onChange={(e)=>{setId(e.target.value)}}></Input>
                <Cbutton onClick={dubCheckId}>중복체크</Cbutton>
            </div>
            <div style={{displayL:"flex", justifyContent:"space-around"}}>
                <Input placeholder={"nickname은 한글, 영문, 숫자만 가능 4~10자리"} onChange={(e)=>{setNick(e.target.value)}}></Input>
                <Cbutton onClick={dubCheckNick}>중복체크</Cbutton>
            </div>
            <input type={"password"} onChange={(e)=>{setPwd(e.target.value)}} style={{
                padding: "16px",
                marginBottom: "10px",
                border:"1px solid gray",
                borderRadius: "7px",
                cursor: "pointer",
                }}
                placeholder={"password는 영문 대,소문자와 숫자를 포함한 4~16자"}/>
            <input type={"password"} onChange={(e)=>{setConfirmpwd(e.target.value)}} style={{
                padding: "16px",
                marginBottom: "10px",
                border:"1px solid gray",
                borderRadius: "7px",
                cursor: "pointer",
                }}
                placeholder={"password를 한번 더 확인해주세요"}/>
            <Text color="gray">작성하신 메일 주소를 통해 메일을 확인하겠습니다.<strong style={{textDecoration:"underline"}}>개인정보 처리방침</strong> </Text>
            <Button onClick={()=>{signup(); setIsSignup(false);}}>회원가입</Button>
        </Wrap>
    </React.Fragment>
  )
};

const Input =styled.input`
padding: 16px;
margin-bottom: 10px;
border:1px solid gray;
border-radius: 7px;
cursor:auto;
width: calc(100% - 100px);
box-sizing: border-box;
:focus{
    border:none;
    outline: 1px solid rgb(255, 56, 92);
} 
`
const Cbutton =styled.button`
border-radius: 6px;
border: none;
background-color:rgb(255, 56, 92) ;
padding: 16px;
color: white;
width: 90px;
margin-left: 10px;
` 

const Button =styled.button`
border-radius: 6px;
border: none;
background-color:rgb(255, 56, 92) ;
padding: 16px;
color: white;
margin: 10px 0px 0px 0px;
`

const Wrap = styled.div`
    background: rgb(255, 255, 255);
    width: 600px;
    height: 50%;
    max-width: 100vw ;
    display: flex ;
    flex-direction: column ;
    box-shadow: rgb(0 0 0 / 28%) 0px 8px 28px ;
    border-radius: 12px ;
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 1011;
`

const Black= styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1010;
  background-color: rgba(0, 0, 0, 0.50);
`

const Header= styled.div`
    -webkit-box-pack: justify;
    -webkit-box-align: center ;
    display: flex ;
    flex: 0 0 auto ;
    align-items: center ;
    justify-content: space-between ;
    padding: 0px 24px ;
    min-height: 48px ;
    border-bottom: 1px solid rgb(235, 235, 235);
    color: rgb(34, 34, 34) ;
    font-size: 16px ;
    line-height: 20px ;
    font-weight: 800;
`

export default SignModal;