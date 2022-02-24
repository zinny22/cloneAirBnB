import React from "react";
import styled from "styled-components";
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import{ImInstagram} from "react-icons/im";
import {BiWon} from "react-icons/bi"
import {GrLanguage} from "react-icons/gr";

const Footer = () => {
  return (
    <Wrap>
        <Div1>
        <Div>
            <p style={{fontWeight:"700", fontSize:"14px"}}>에어비엔비 지원</p>
            <Grid>
              <P>도움말 센터</P>
              <P>안전 정보</P>
              <P>예약 취소 옵션</P>
              <P>에어비엔비의 코로나19 대응 방안</P>
              <P>장애인 지원</P>
              <P>이웃 민원신고</P>
            </Grid>
        </Div>
        <Div>
            <p style={{fontWeight:"700", fontSize:"14px"}}>커뮤니티</p>
            <Grid>
            <P>Airbnb.org: 재난 구호 숙소</P>
            <P>아프간 난민 지원</P>
            <P>차별 철폐를 위한 노력</P>
            </Grid>
        </Div>
        <Div>
            <p style={{fontWeight:"700", fontSize:"14px"}}>호스팅</p>
            <Grid>
            <P>호스팅 시작하기</P>
            <P>에어커버: 호스트를 위한 보호 프로그램</P>
            <P>호스팅 자료 둘러보기</P>
            <P>커뮤니티 포럼 방문하기</P>
            <P>책임감 있는 호스팅</P>
            </Grid>
        </Div>
        <Div>
            <p style={{fontWeight:"700", fontSize:"14px"}}>소개</p>
            <Grid>
            <P>뉴스룸</P>
            <P>새로운 기능에 대해 알아보기</P>
            <P>에어비앤비 공동창업자의 메시지</P>
            <P>채용정보</P>
            <P>투자자 정보</P>
            <P>에어비앤비 Luxe</P>
            </Grid>
        </Div>
        </Div1>
        <Div2>
           <Div3><div>© 2022 Airbnb, Inc.</div><div>·개인정보 처리방침·이용약관·사이트맵·한국의 변경된 환불 정책·회사 세부정보</div></Div3>

            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div div style={{margin:"5px"}}><P><GrLanguage/> 한국어 (KR)</P></div>
                <P style={{margin:"0px 10px 0px 0px"}}><BiWon/> KRW</P>
                <FaFacebookF style={{margin:"0px 10px 0px 0px"}}/>
                <FaTwitter style={{margin:"0px 10px 0px 0px"}} />
                <ImInstagram style={{margin:"0px 10px 0px 0px"}}/>
                <svg viewBox="0 0 1024 1024" role="img" aria-hidden="false" aria-label="네이버 블로그로 이동하기" focusable="false" style={{height: "18px", width: "18px", display: "block", fill: "currentcolor",margin:"0px 10px 0px 0px"}}><path d="m984 1024h-944c-22.1 0-40-17.9-40-40v-944c0-22.1 17.9-40 40-40h944c22.1 0 40 17.9 40 40v944c0 22.1-17.9 40-40 40z" fill="#00c73c"></path><path d="m757 203.2h-490.4c-70.4 0-127.5 57.1-127.5 127.5v303.5c0 70.7 57.3 127.9 127.9 127.9h173.8l58.7 101.6c5.4 9.3 18.9 9.3 24.2 0l58.7-101.6h174.2c70.6 0 128.5-57.8 128.5-128.5v-302.4c0-70.7-57.3-128-128.1-128z" fill="#fff"></path><g fill="#ff812c"><path d="m390.7 495.6c0 38.7-28 68.5-62.1 68.5-17.4 0-30.1-6-38.7-15.8v12.2h-38.9v-173.1h38.9v55.5c8.6-9.9 21.3-15.8 38.7-15.8 34 0 62.1 29.8 62.1 68.5zm-36.4 0c0-21.1-14-34.3-33.4-34.3s-33.4 13.2-33.4 34.3 14 34.3 33.4 34.3c19.3 0 33.4-13.2 33.4-34.3z"></path><path d="m477.6 495.6c0-38.7 30.6-68.5 68.8-68.5s68.8 29.9 68.8 68.5c0 38.7-30.6 68.5-68.8 68.5s-68.8-29.8-68.8-68.5zm101.1 0c0-19.9-14-33.2-32.3-33.2s-32.3 13.2-32.3 33.2c0 19.9 14 33.2 32.3 33.2 18.2 0 32.3-13.2 32.3-33.2z"></path><path d="m704.6 616.1c34.5 0 68.5-18.4 68.5-62.1v-123.3h-37.9v13.2c-8.6-10.6-21-16.9-37.9-16.9-36.9 0-63.9 30.1-63.9 66 0 35.8 27 65.9 63.9 65.9 16.9 0 29.3-6.2 37.9-16.9v12c0 18.4-11.2 27.8-29.3 27.8h-1.3zm-.7-90.5c-19.9 0-34-13.2-34-32.6s14-32.6 34-32.6c19.9 0 34 13.2 34 32.6s-14.1 32.6-34 32.6z"></path><path d="m394.3 382.7v35.1c13.4 2.6 21.3 11.8 21.3 27.4v115.3h38.9v-115.3c0-40.3-28.6-59.4-60.2-62.5z"></path></g></svg>
                <svg enable-background="new 0 0 1024 1024" viewBox="0 0 1024 1024" role="img" aria-hidden="false" aria-label="네이버 포스트로 이동하기" focusable="false" style={{height: "18px", width: "18px", display: "block", fill: "currentcolor",margin:"0px 10px 0px 0px"}}><path d="m984 1024h-944c-22.1 0-40-17.9-40-40v-944c0-22.1 17.9-40 40-40h944c22.1 0 40 17.9 40 40v944c0 22.1-17.9 40-40 40z" fill="#fff"></path><g fill="#00c73c"><path d="m0 198h1024v7h-1024z"></path><path d="m0 405h1024v7h-1024z"></path><path d="m0 612h1024v7h-1024z"></path><path d="m0 819h1024v7h-1024z"></path></g><path d="m307 537 188.2 324.1c7.5 12.9 26.1 12.9 33.6 0l188.2-324.1z" fill="#f4e49d"></path><path d="m307 0h410v537h-410z" fill="#00e831"></path><path d="m392 0h240v537h-240z" fill="#00c73c"></path><path d="m392 148.5v240h240v-240zm188 182h-47.8l-41.2-62.8v62.8h-47v-124h45.8l42.2 62.4v-62.4h48z" fill="#fff"></path><path d="m632 0h85v537h-85z" fill="#00a32a"></path><path d="m528.8 861.1 188.2-324.1h-85l-119.5 333.7c6.3-.1 12.6-3.3 16.3-9.6z" fill="#e0c141"></path><path d="m448.8 781.2 46.4 79.9c7.5 12.9 26.1 12.9 33.6 0l46.4-79.9z" fill="#2d2d2d"></path></svg>
            </div>

        </Div2>
    </Wrap>
  );
};

const P = styled.p`
font-size: 75%;
`

const Grid = styled.div`
display: grid;
justify-content: space-around;
grid-template-columns: 1fr 1fr 1fr ;
padding: 10px;
@media screen and (min-width: 935px) {
  display: contents;
}
`

const Div =styled.div`
margin: 10px 0px;
border-bottom: 1px solid #DDDDDD;
padding: 0px 30px;
@media screen and (min-width: 935px) {
    margin: 15px 0px;
    border-bottom: none;
}
`

const Wrap = styled.div`
bottom:0;
width:100%;
height:6%;
background-color:#F7F7F7 ;
display: contents;
padding: 30px;

/* @media screen and (min-width: 1192px) {
    
}

@media screen and (min-width: 1125px) {
    
} */

@media screen and (min-width: 935px) {
bottom:0;
width:100%;
height:6%;
background-color:#F7F7F7 ;
  }
`

const Div1 = styled.div`
display: contents;
width:100%;
margin: auto;
padding: 20px;

@media screen and (min-width: 935px) {
    display:flex;
    justify-content:space-around;
    width:70%;
    margin: auto;
  }
`
 
const Div2 = styled.div`
    display: flex; 
    align-content:center; 
    align-items:center;
    width: 70%;
    margin: auto;
    padding: 10px 0px; 
    flex-direction: column-reverse;
    
@media screen and (min-width: 935px) {
    display: flex; 
    flex-direction: inherit;
    justify-content:space-around;
    align-content:center; 
    align-items:center;
    border-top: 1px solid #DDDDDD;
    width: 70%;
    margin: auto;
    padding: 10px 0px;
  }
`

const Div3 =styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 75%;
@media screen and (min-width: 935px) {
  display: flex;
  justify-content: space-around;
  /* grid-template-columns: 1fr 1fr;  */
  align-items: center;
  font-size: 75%;
}
`
export default Footer;