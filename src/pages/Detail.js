import React from "react";
import styled from "styled-components";
import {Grid , Text, Image, Button} from "../elements"

const Detail = (props) => {
    return (
        <React.Fragment>
        <Grid width = "80%" is_detail padding = "0px 15% 0px 15%">
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
                <span style={{fontSize: "14px", fontWeight: "400"}}>
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
        <Text margin = "0px 0px 24px 0px " bold size = "22px">
            Sakuho,Minamisaku District 에서 7박
        </Text>
        </Grid>
        </LeftGrid>
        
        
        <RightGrid>
        <MoveCard>하이루</MoveCard>
        </RightGrid>
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




export default Detail;