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
    const id = props.match.params._id;
    const dispatch = useDispatch()
    let post_list = useSelector((state) => state.post.list.homes)
    console.log(post_list ? true : false)

    React.useEffect(()=>{

        dispatch(postActions.getPostDetailDB(id))

        return () => {
        };
      },[]);
    

    
    return (
        <React.Fragment>
            <DetailHeader/>
        <Grid width = "100%" is_detail padding = "0px 15% 0px 15%">
            <Text bold size = "26px">산슨 테라스 "작은 전원주택"</Text>
        </Grid>
        <Grid is_detail padding = "0px 15% 0px 15%">
            <Text size = "14px">[❤4.910] 후기N개 슈퍼호스트 . [장소이름] [공유하기] [❤저장]</Text>
        </Grid>
        <Grid is_detail is_flex padding = "0px 15% 0px 15%">
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
        <Text is_flex padding = "0px 0px 32px 0px" margin = "0px" bold size = "22px">
            <Icon>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "16px", width: "16px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
            </Icon>
            4.95. 후기 504개
        </Text>
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
        <Image background-image = "url(https://a0.muscache.com/im/pictures/user/854c3d72-d48e-4037-bc5b-83162f5765fb.jpg?aki_policy=profile_large)" margin = "0px 24px 0px 0px" size = "64px"/>
        <Text margin = "0px" bold size = "22px">
                호스트: Daigo님<br style={{padding:"0px"}}/>
                <span style={{margin : "0px", padding: "0px", fontSize: "14px", fontWeight: "400"}}>
                    회원 가입일: 2012년11월
                </span>
        </Text>
        </Host>
            <Hoogi>
                <Text is_flex margin = "0px 12px 0px 12px" size = "16px">
                    <Icon2>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "16px", width: "16px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
                    </Icon2>
                    &nbsp;후기 1,027개
                </Text>
                <Text is_flex margin = "0px 12px 0px 12px" size = "16px">
                    <Icon2>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "16px", width: "16px" ,fill: "currentcolor"}}><path d="M16 .798l.555.37C20.398 3.73 24.208 5 28 5h1v12.5C29 25.574 23.21 31 16 31S3 25.574 3 17.5V5h1c3.792 0 7.602-1.27 11.445-3.832L16 .798zm7 9.08l-9.5 9.501-4.5-4.5L6.879 17l6.621 6.621L25.121 12 23 9.879z"></path></svg>
                    </Icon2>
                    &nbsp;본인 인증 완료
                </Text>
                <Text is_flex margin = "0px 12px 0px 12px" size = "16px">
                    <Icon2>
                    <FontAwesomeIcon icon={faMedal}/>
                    </Icon2>
                    &nbsp;슈퍼호스트
                </Text>
            </Hoogi>
        </Grid>
        </Grid>
        </React.Fragment>
    )
}

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
    color : red;
    padding : 8px
`
const Icon2 = styled.div`
    color : red;
    padding : 3px
`

const Host = styled.div`
    display: flex;
    margin: 0px 0px 24px 0px;
`

const Hoogi = styled.div`
    display: flex;
`




export default Detail;