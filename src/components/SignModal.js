import React, { useState } from "react";
import styled from "styled-components";
import {Text} from "../elements"

const SignModal = ({setIsSignup}) => {
    const[v, setV] = useState(true);

  return(
     <React.Fragment>
         <Black onClick={()=>setIsSignup(false)}/>
         <Wrap>
            <Header>
                <div onClick={()=>{setV(!v)}}>
                    <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill:" none", height: "16px", width: "16px", stroke: "#222222", strokeWidth: "3", overflow: "visible",cursor:"pointer"}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                </div>
                <div>회원가입</div>
                <div></div>
            </Header>
            <Text size="22px" bold>에어비엔비에 오신걸 환영합니다</Text>
            <Input placeholder={"email"} padding="0px 30px"></Input>
            <Input placeholder={"nickname"}></Input>
            <Input placeholder={"password"}></Input>
            <Text color="gray">작성하신 메일 주소를 통해 메일을 확인하겠습니다.<strong style={{textDecoration:"underline"}}>개인정보 처리방침</strong> </Text>
            <Button>회원가입</Button>
            <div style={{    
                width:" 100%",
                marginTop: "16px",
                marginBottom: "16px",
                fontWeight: "400", 
                fontSize:"12px",
                lineHeight: "16px"}}>
                    <div style={{
                        overflow: "hidden",
                        textAlign: "center"
                    }}><span>또는</span></div></div>
        </Wrap>
    </React.Fragment>
  )
};

const Input =styled.input`
padding: 16px;
margin-bottom: 10px;
border:1px solid gray;
border-radius: 7px;
cursor: pointer;
:focus{
    border:none;
    outline: 1px solid rgb(255, 56, 92);
} 
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
  background-color: rgba(0, 0, 0, 0.65);
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