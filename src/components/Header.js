import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../elements/Logo";

const Header = () => {
    // const [v, setV] = useState(false)
  return (
      <React.Fragment>
      <Wrap>
        <Logo />
        <div style={{ position: "relative" }}>
        <ElTextarea placeholder={"검색 시작하기"} />
        <svg
            viewBox="0 0 32 32"
            style={{
              display: "block",
              fill: "#ff385c",
              width: "15px",
              stroke: "#ff385c",
              strokeWidth: "5.33333",
              textAlign: "right",
              right: "-170",
              top: "50%",
              transform: "translateY(-50%)",
              position: "absolute"
            }}>
            <g fill="none">
              <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
            </g>
          </svg>
        </div>

        <Wrap>
            <Textbutton>호스트 되기</Textbutton>
            <svg
            style={{
              display: "rgb(34, 34, 34)",
              height: "16px",
              width: "16px",
              fill: "black",
              padding: "20px",
              cursor: "pointer",
            }}>
            <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
            </svg>

            {/* <Button onClick={()=>{
                setV(!v)
            }}>
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
            </Button> */}
        </Wrap>
      </Wrap>
      {/* {v&&<Box>
            <Buttons>로그인</Buttons><br/>
            <Buttons>회원가입</Buttons>
       </Box>} */}
      </React.Fragment>
  );
};

const Wrap = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 5.5rem;
  margin: 0;
  /* background-color: yellow; */
  @media screen and (min-width: 1607px) {
  }
  @media screen and (min-width: 960px) and (max-width: 1607px) {
  }
  @media screen and (min-width: 551px) and (max-width: 960px) {
  }
  @media screen and (min-width: 0px) and (max-width: 551px) {
  }
`;

const ElTextarea = styled.input`
  width: 200%;
  padding: 13px;
  height: 15px;
  align-items: center;
  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 40px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  color: black;
  display: inline-flex;
  text-align: left;
  cursor: pointer;
  position: relative;
  :hover{
      box-shadow: #ddd 0px 4px 5px 0px;
  }
`;

const Button = styled.button`
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  border: 1px solid #ddd;
  background: transparent;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  margin: 0px 50px 0px 0px;
  overflow: visible;
  padding: 5px 5px 5px 12px;
  text-align: inherit;
  text-decoration: none;
  align-items: center;
  border-radius: 21px;
  height: 42px;
  vertical-align: middle;
  position: relative;
  justify-content: space-between;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover{
      box-shadow: #ddd 0px 4px 5px 0px;
  }
`;

const Textbutton = styled.button`
  margin: auto;
  height: 50px;
  border: none;
  background: transparent;
  color: #222222;
  cursor: pointer;
  text-align: center;
  justify-content: center;
`;

const Box = styled.div`
  border: 1px solid #dddddd;
  border-radius: 5px;
  width: 200px;
  height: 80px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
  position: relative;
  left: 900px;
  top: 0px;
  @media screen and (min-width: 1607px) {
  }
  @media screen and (min-width: 960px) and (max-width: 1607px) {
  }
  @media screen and (min-width: 551px) and (max-width: 960px) {
  }
  @media screen and (min-width: 0px) and (max-width: 551px) {
  }
`
const Buttons = styled.button`
border:1px solid;
width: 100%;
background: transparent;
justify-content: center;
font-size: 22px;
display: flex;
cursor: pointer;
`


export default Header;


