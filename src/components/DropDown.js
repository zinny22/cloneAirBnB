import React, { useState,useRef } from "react";
import {Button} from "../elements/index"
import styled from "styled-components";


const DropDown =()=>{
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    return (
       <Container>
            <Button onClick={onClick}>
            <svg
              viewBox="0 0 32 32"
              style={{
                display: "block",
                fill: "none",
                height: "16px",
                width: "16px",
                stroke: "#222222",
                strokeWidth: "3",
                overflow: "visible",
                padding: "0px 10px 0px 0px",
              }}>
              <g fill="none" fill-rule="nonzero">
                <path d="m2 16h28"></path>
                <path d="m2 24h28"></path>
                <path d="m2 8h28"></path>
              </g>
            </svg> 

            <svg
              viewBox="0 0 32 32"
              style={{
                display: "block",
                height: "100%",
                width: "100%",
                fill: "#222222",
              }}
            >
              <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
            </svg>
            </Button>
            <Div className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <nav ref={dropdownRef} >
                <ul>
                    <li><button>로그인</button></li>
                    <li><button>회원가입</button></li>
                </ul>
            </nav>
            </Div>

       </Container>
    )
}

const Container = styled.div`
position: relative;
`

const Div = styled.div`
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: 60px;
  right: 0;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  .active{
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`

export default DropDown