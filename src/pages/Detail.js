import React from "react";
import styled from "styled-components";
import DetailHeader from "../components/DetialHeader";
import {Grid , Text, Image, Button} from "../elements"
import Calendar from "../components/Calendar"
import { useDispatch, useSelector } from "react-redux"
import { actionCreators as postActions } from "../redux/modules/post"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';


const Detail = (props) => {
    const id = props.match.params.home_id;
    const dispatch = useDispatch()
    let post_detail = useSelector((state) => state.post.detail)


    React.useEffect(()=>{

        dispatch(postActions.getPostDetailDB(id))
        return () => {
        };
    },[]);

    return (
        <React.Fragment>
            <DetailHeader/>
        <HomeName>
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-label="자동 번역된 이름: 산슨 테라스 &quot;작은 전원주택&quot;" role="img" focusable="false" style={{padding : "6px", display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M9 0a1 1 0 0 1 .993.883L10 1v5h5a1 1 0 0 1 .993.883L16 7v8a1 1 0 0 1-.883.993L15 16H7a1 1 0 0 1-.993-.883L6 15v-5H1a1 1 0 0 1-.993-.883L0 9V1A1 1 0 0 1 .883.007L1 0h8zm1.729 7l-1.393.495.233.217.13.132c.125.127.227.245.308.352l.073.103.048.073.045.077H7.308v1.309h1.207l.166.52.09.266.112.29a6.294 6.294 0 0 0 1.109 1.789c-.495.315-1.119.607-1.87.87l-.331.112-.346.108-.445.134L7.72 15l.407-.125.386-.128c1.007-.349 1.836-.752 2.486-1.214.57.405 1.277.764 2.12 1.08l.369.134.386.128.406.125.72-1.153-.445-.134-.26-.08-.345-.115c-.783-.27-1.43-.57-1.94-.895a6.3 6.3 0 0 0 1.068-1.694l.128-.32.114-.33.165-.521h1.208V8.449H11.64l-.093-.231a3.696 3.696 0 0 0-.554-.917l-.126-.149-.14-.152zm1.35 2.758l-.042.133-.076.224-.103.264A4.985 4.985 0 0 1 11 11.76a4.952 4.952 0 0 1-.743-1.127l-.115-.254-.103-.264-.076-.224-.042-.133h2.158zM9 1H1v8h5V7c0-.057.005-.113.014-.167H3.827L3.425 8H2l2.257-6h1.486l1.504 4H9V1zM5 3.411L4.253 5.6h1.502L5 3.411z"></path></svg>
            <div style={{fontSize: "26px"}}>&nbsp;{post_detail ? post_detail.homes.home_name : ""}</div>
        </HomeName>
        <TopRate>
            <div style={{display: "flex"}}>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{padding : "3px", color : "red", display: "block", height: "14px", width: "14px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
            {post_detail ? post_detail.homes.rateAvg : ""}
            {/* 여기 onClick 페이지 이동 -> 후기로  */}
            &nbsp;·&nbsp;후기
            {post_detail ? post_detail.homes.comment_count : ""}개
            &nbsp;·&nbsp;
            <FontAwesomeIcon style={{color: "red", padding: "3px"}} icon={faMedal}/>
            <text style={{fontWeight: "500", color: "gray"}}>
            &nbsp;슈퍼호스트
            </text>
            &nbsp;·&nbsp;
            <text style={{fontWeight: "500", color: "gray"}}>
            {post_detail ? post_detail.homes.address : ""}
            </text>
            </div>
            <Share>[공유하기][❤저장]</Share>
        </TopRate>
        <Grid is_detail is_flex padding = "24px 15% 0px 15%">
                <BigImage>
                    <Image  border_radius ="10px 0px 0px 10px / 10px 0px 0px 10px" shape = "square" />
                </BigImage>
                <SmallImage>
                    <Image  shape = "square" />
                    <Image  border_radius ="0px 10px 0px 0px / 0px 10px 0px 0px" shape = "square" />
                    <Image  shape = "square" />
                    <Image  border_radius ="0px 0px 10px 0px / 0px 0px 10px 0px" shape = "square" />
                </SmallImage>
        </Grid>
        
        <Grid is_detail is_flex padding = "0px 15% 0px 15%">
        <LeftGrid>
            <div style={{display: "flex"}}>
            <Text bold size ="22px">
                user님이 호스팅하는 초소형 주택 
                <br/>
                <span style={{fontSize: "16px", fontWeight: "400"}}>
                최대인원 N명 침실 N개 욕실 N개 
                </span>    
            </Text>
            <Image margin = "3% -70% 3% 43.5%" size = "56px"/>
            </div>
            <Hr/>
            <Grid padding ="32px 0px 32px 0px" >
            <Text bold size ="16px">
                Daigo님은 슈퍼호스트입니다
                <br/>
                <span style={{fontSize: "14px", fontWeight: "400"}}>
                슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
                </span>
            </Text>
            <Text bold size ="16px">
                Daigo님은 슈퍼호스트입니다
                <br/>
                <span style={{fontSize: "14px", fontWeight: "400"}}>
                게스트가 자주 찾는 편의시설
                </span>
            </Text>
            <Text bold size ="16px">
                3월 5일 전까지 무료 취소 가능
            </Text>
            </Grid>
            <Hr/>
            <Grid padding = "32px 0px 0px 0px">
            <Text margin = "0px" size ="16px">
                일부 정보는 자동 번역되었습니다.&nbsp;
                <span style={{fontSize: "16px", fontWeight: "600", textDecoration: "underline"}}>
                원문 보기
                </span>
            </Text>
            <DetailText>
            나가노현 사쿠호읍 오히나타에서<br/>
            식민지에서 잠시 떨어진 자연 숲길의 산변에 작은 전원주택을 지었습니다.<br/>
            시간은 이곳에서 우아하게 흐르는 반면, 농장 노동이나 산에서 일하는 시간은 줄어듭니다.<br/>
            산맥을 바라보며 커피나 맥주를 즐길 수 있는 특별한 시간입니다. 반대편에 있는 모라이.<br/>
            자연에 둘러싸인 채 천천히 책을 읽고 산책을 하며 숲 속의 해먹에 누워 새들의 노래를 들으며<br/>
            시간을 보낼 수 있습니다<br/>
            <br/>
            <text style=
            {{fontSize: "16px", 
            fontWeight: "600", 
            textDecoration: "underline", 
            margin: "0px 0px 0px 0px"}}>
                더 보기 {'>'}
            </text>
            </DetailText>
            </Grid>
            <Hr/>

        <Grid padding = "48px 0px 48px 0px">
        <Text margin = "0px 0px 24px 0px " bold size = "22px">
            숙소 편의시설
        </Text>
        <TextBox>
        <Text margin = "0px 0px 16px 0px " size = "16px">
            산 전망
        </Text>
        <Text margin = "0px 0px 16px 0px " size = "16px">
            건물 내 무료주차
        </Text>
        <Text margin = "0px 0px 16px 0px " size = "16px">
            뒷마당
        </Text>
        <Text margin = "0px 0px 16px 0px " size = "16px">
            냉장고
        </Text>
        <Text margin = "0px 0px 16px 0px " size = "16px">
            흡연가능
        </Text>
        <Text margin = "0px 0px 16px 0px " size = "16px">
            주방
        </Text>
        <Text margin = "0px 0px 16px 0px " size = "16px">
            파티오 또는 발코니
        </Text>
        <Text margin = "0px 0px 16px 0px " size = "16px">
            실내 벽난로
        </Text>
        <Text margin = "0px 0px 16px 0px " size = "16px">
            SONY 블루투스 음향시스템
        </Text>
        <Text margin = "0px 0px 16px 0px " size = "16px">
            업무 전용 공간
        </Text>
        <button>편의시설 N개 모두보기</button>
        </TextBox>
        </Grid>
        <Hr/>
        <Grid padding = "48px 0px 48px 0px">
        <Text margin = "0px" bold size = "22px">
            체크인 날짜를 선택해주세요.  
        </Text>
        <span style={{padding : "8px 0px 0px 0px", fontSize: "14px", fontWeight: "400"}}>
                최대인원 N명 침실 N개 욕실 N개 
        </span> 
        </Grid>
        <Calendar/>
        </LeftGrid>
        
        <RightGrid>
        <MoveCard>하이루</MoveCard>
        </RightGrid>
        </Grid>
        <Grid is_detail padding = "0px 15% 0px 15%">
        <Grid>
        <Hr/>
        </Grid>
        <Grid padding = "48px 0px 48px 0px">
            <Icon>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{padding : "8px", color : "red", display: "block", height: "16px", width: "16px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>  
                <Text is_flex padding = "0px 0px 32px 0px" margin = "0px" bold size = "22px">
                4.95. 후기 504개
                </Text>
            </Icon>
        </Grid>
        <Grid padding = "0px 0px 0px 0px">
        <Hr/>
        </Grid>
        <Grid padding = "48px 0px 48px 0px">
            <Text is_flex padding = "0px 0px 32px 0px" margin = "0px" bold size = "22px">
                호스팅 지역
            </Text>
                여긴 지도입니다
        </Grid>
        <Grid padding = "0px 0px 0px 0px">
        <Hr/>
        </Grid>
        <Grid padding = "48px 0px 48px 0px">
        <Host>
            <Image margin = "0px 24px 0px 0px" size = "64px"/>
                <Text margin = "0px" bold size = "22px">
                            호스트: Daigo님<br style={{padding:"0px"}}/>
                        <span style={{margin : "0px", padding: "0px", fontSize: "14px", fontWeight: "400"}}>
                            회원 가입일: 2012년11월
                        </span>
                </Text>
        </Host>
            <Hoogi>
                <Icon2>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{padding : "3px", color : "red", display: "block", height: "16px", width: "16px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
                    &nbsp;후기 1,027개&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Icon2>
                <Icon2>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{padding : "3px", color : "red", display: "block", height: "16px", width: "16px", fill: "currentcolor"}}><path d="M16 .798l.555.37C20.398 3.73 24.208 5 28 5h1v12.5C29 25.574 23.21 31 16 31S3 25.574 3 17.5V5h1c3.792 0 7.602-1.27 11.445-3.832L16 .798zm7 9.08l-9.5 9.501-4.5-4.5L6.879 17l6.621 6.621L25.121 12 23 9.879z"></path></svg>
                    &nbsp;본인 인증 완료&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Icon2>
                <Icon2>
                    <FontAwesomeIcon style={{color: "red", padding: "3px"}} icon={faMedal}/>
                    &nbsp;슈퍼 호스트
                </Icon2>
            </Hoogi>
        </Grid>
        </Grid>
        </React.Fragment>
    )
}

const HomeName = styled.div`
    font-weight: 600;
    font-size : 14px;
    display: flex;
    padding : 0px 15% 0px 15%;
    @media screen and (max-width: 743px) { padding : 3% };
`


const TopRate = styled.div`
    font-weight: 600;
    font-size : 14px;
    display: flex;
    justify-content: space-between;
    padding : 0px 15% 0px 15%;
    @media screen and (max-width: 743px) { padding : 3% };
`

const Share = styled.div`
    display: flex;
`

const BigImage = styled.div`
    width : 100%;
    padding : 0.7% 0.8% 0% 0%;
`
const SmallImage = styled.div`
    width : 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 1.5%;
    column-gap: 1.5%;
    @media screen and (max-width: 743px) { display: none } 
`
const LeftGrid = styled.div`
    width: 60%;
    padding-bottom: 48px;
    margin-top : 2%;
`
const TextBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
`
const RightGrid = styled.div`
    width: 40%;
`
const MoveCard = styled.div`
    position:fixed; 
    width:175px; 
    display:inline-block; 
    right:400px; /* 창에서 오른쪽 길이 */ 
    top:94%; /* 창에서 위에서 부터의 높이 */
     background-color: transparent; margin:0; 
`
const Hr = styled.hr`
    background-color: #dddddd;
    height: 1px;
    border: 0px;
    margin: 0px;
`

const DetailText = styled.div`
    display: -webkit-box;
    padding : 32px 0px 86px 0px;
    width : 100%;
    overflow: hidden;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
`

const Icon = styled.div`
    display: flex;
    padding : 8px;
`
const Icon2 = styled.div`
    display: flex;
   
`

const Host = styled.div`
    display: flex;
    margin: 0px 0px 24px 0px;
`

const Hoogi = styled.div`
    display: flex;
`




export default Detail;