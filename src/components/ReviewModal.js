import React from "react";
import styled from "styled-components";
import person from "../person.png"

const ReviewModal = ({setIsReview}) => {
  return(
     <React.Fragment>
         <Black onClick={()=>setIsReview(false)}/>
         <Wrap>
            <Header>
                <div onClick={()=>setIsReview(false)}>
                    <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill:" none", height: "16px", width: "16px", stroke: "#222222", strokeWidth: "3", overflow: "visible",cursor:"pointer"}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                </div>
            </Header>
            <div style={{position:"sticky", top:"0", backgroundColor:"white"}}>
                <Text> ⭐️ 4.92. 후기150개 </Text>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", position:"relative"}}>
                <Input></Input>
                <Button>작성</Button>
                </div>
            </div>
            <div>
            <div style={{display:"flex", alignItems:"center", marginTop:"20px"}}>
                <img src={person} alt="user_image" style={{width:"50px", height:"50px", margin:"0px 20px 0px 0px"}}/>
                <div>
                    <p style={{fontSize:"16px", fontWeight:"600", color:"rgb(34,34,34)"}}>hyejin<br/><span style={{fontSize:"10px"}}>17시간전</span></p>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", marginLeft:"30px"}}>
                    <Sbutton>수정</Sbutton>
                    <Sbutton>삭제</Sbutton>
                </div>
            </div>
            <p>여기 숙소 너무 좋아요~ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</p>
            </div>
            <div>
            <div style={{display:"flex", alignItems:"center", marginTop:"20px"}}>
                <img src={person} alt="user_image" style={{width:"50px", height:"50px", margin:"0px 20px 0px 0px"}}/>
                <div>
                    <p style={{fontSize:"16px", fontWeight:"600", color:"rgb(34,34,34)"}}>hyejin<br/><span style={{fontSize:"10px"}}>17시간전</span></p>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", marginLeft:"30px"}}>
                    <Sbutton>수정</Sbutton>
                    <Sbutton>삭제</Sbutton>
                </div>
            </div>
            <p>여기 숙소 너무 좋아요~ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</p>
            </div>

        </Wrap>
    </React.Fragment>
  )
};

const Text = styled.p`
font-size: 25px;
font-weight: 700;
color: rgb(34,34,34);
`

const Button =styled.button`
border-radius: 40px;
border: 1px solid rgb(235,235,235);
background-color:rgb(235,235,235) ;
padding:8px;
color: rgb(34,34,34);
font-size: 15px;
position: absolute;
right: 2px;

`
const Input = styled.input`
border-radius: 40px;
padding: 4px;
border: 1px solid gray;
width: 90%;
font-size: 17px;
:focus{
    border:none;
    outline: 2px solid rgb(34,34,34);
} 
`

const Sbutton = styled.button`
border-radius: 30px;
border: none;
background-color:rgb(235,235,235);
color: rgb(34,34,34);
width: 50px;
padding: 4px;
margin-left: 3px;
`

const Wrap = styled.div`
    background: rgb(255, 255, 255);
    width: 100%;
    height: 90%;
    max-width: 740px ;
    display: flex ;
    flex-direction: column ;
    box-shadow: rgb(0 0 0 / 28%) 0px 8px 28px ;
    border-radius: 12px ;
    padding: 30px;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 1011;
    overflow-x : hidden;
    overflow-y : scroll;
    padding-top: 0%;
    margin: auto;
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
    position: relative;
    position: sticky;
    position: -webkit-sticky; 
    z-index: 10;
    top: 0;
    background-color: white;
    padding: 1.2%;
    `

export default ReviewModal;