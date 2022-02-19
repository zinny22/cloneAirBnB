import React, { useState } from "react";
import styled from "styled-components";
import {Text} from "../elements"

const FilterModal = ({setIsFilter}) => {
    const[v, setV] = useState(true);

  return(
     <React.Fragment>
         <Black onClick={()=>setIsFilter(false)}/>
         <Wrap>
            <Header>
                <div onClick={()=>{setV(!v)}}>
                    <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill:" none", height: "16px", width: "16px", stroke: "#222222", strokeWidth: "3", overflow: "visible",cursor:"pointer"}}><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                </div>
                <div>필터 추가하기</div>
                <div></div>
            </Header>
            <div>            
                <Text size="22px" bold>취소 수수료 없음</Text>
                <div style={{display:"flex", justifyContent:"space-between"}}>                
                    <Text>무료 취소가 가능한 숙소만 표시</Text>
                    <Circle><Circles/></Circle>
                </div>

                <Line/>
            </div>
            <div>            
                <Text size="22px" bold>검증된 숙소</Text>
                <div style={{display:"flex", justifyContent:"space-between"}}> 
                <Text>에어비엔비 플러스</Text>
                <Text>퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션</Text>
                <Circle><Circles/></Circle>
                </div>
                <Line/>
            </div>
            <div>            
                <Text size="22px" bold>숙소 유형</Text>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div style={{display:"flex", justifyContent:"space-between", width:"28%", alignItems:"center"}}>
                        <input type={"checkbox"}  style={{zoom: "1.8"}}/>
                        <div>
                        <Text>집 전체 <br/> 집 전체를 단독으로 사용합니다</Text>
                        </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between", width:"50%", alignItems:"center"}}>
                        <input type={"checkbox"}  style={{zoom: "1.8",marginRight:"10px"}}/>
                        <div>
                        <Text>개인실 <br/> 침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께 이용할 수도 있습니다</Text>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <div style={{display:"flex", justifyContent:"space-between", width:"47%", alignItems:"center"}}>
                    <input type={"checkbox"}  style={{zoom: "1.8", marginRight:"10px"}}/>
                    <div>
                    <Text >호텔 객실 <br/> 부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다</Text>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"space-between", width:"50%", alignItems:"center"}}>
                    <input type={"checkbox"}  style={{zoom: "1.8",marginRight:"10px"}}/>
                    <div>
                    <Text>다인실 <br/> 사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께 이용합니다</Text>
                    </div>
                </div>
                </div>


                <Line/>
            </div>
            <div>            
                <Text size="22px" bold>가격 범위</Text>
                <Text>평균 1박 요금은 57,237원 입니다</Text>
                <Line/>
            </div>
            <div>            
                <div style={{display:"flex", justifyContent:"space-between"}}> 
                <Text>즉시 예약 <br/> 호스트 승인을 기다릴 필요 없이 예약할 수 있는 숙소</Text>
                <Circle><Circles/></Circle>
                </div>
                <Line/>
            </div>
            <div>            
                <Text size="22px" bold>침실과 침대</Text>
                <Text>무료 취소가 가능한 숙소만 표시</Text>
                <Line/>
            </div>
            <div>            
                <Text size="22px" bold>편의시설 더 보기</Text>
                <div style={{display:"flex", justifyContent:"space-between"}}> 
                <Text>슈퍼호스트</Text>
                <Text>슈퍼호스트의 숙소에 머물러보세요</Text>
                <Text>더 알아보기</Text>
                <Circle><Circles/></Circle>
                </div>
                <Line/>
            </div>
            <div>            
                <Text size="22px" bold>접근성 편의</Text>
                <Text>무료 취소가 가능한 숙소만 표시</Text>
                <Line/>
            </div>
            <div>            
                <Text size="22px" bold>시설</Text>
                <Text>무료 취소가 가능한 숙소만 표시</Text>
                <Line/>
            </div>
            <div>            
                <Text size="22px" bold>숙소규칙</Text>
                <Text>무료 취소가 가능한 숙소만 표시</Text>
                <Line/>
            </div>
            <div>            
                <Text size="22px" bold>호스트 언어</Text>
                <Text>무료 취소가 가능한 숙소만 표시</Text>
            </div>

            <Footer>
                <Text>전체 해제</Text>
                <Button>300개 이상의 숙소보기</Button>
            </Footer>
        </Wrap>
    </React.Fragment>
  )
};


const Line = styled.hr`
border: 0.5px solid rgb(235, 235, 235);
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
    width: 800px;
    height: 80%;
    max-width: 100vw ;
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
    overflow: scroll;
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

const Footer= styled.div`
    -webkit-box-pack: justify;
    -webkit-box-align: center t;
    display: flex ;
    flex: 0 0 auto ;
    border-top: 1px solid rgb(235, 235, 235) ;
    padding: 16px 24px ;
    align-items: center ;
    justify-content: space-between ;
    font-size: 16px;
    line-height: 20px;
`

const Circle = styled.button`
    border-radius: 32px ;
    border-style: solid ;
    border-width: 1px;
    cursor: pointer ;
    height: 32px ;
    position: relative ;
    min-width: 48px t;
    width: 48px ;
    outline: none ;
    background-color: rgb(176, 176, 176);
    border-color: rgb(176, 176, 176);
`

const Circles = styled.button`
    -webkit-box-pack: center ;
    -webkit-box-align: center ;
    background-color: rgb(255, 255, 255) ;
    border-radius: 50% ;
    border-style: solid ;
    border-color: rgb(176, 176, 176);
    border-width: 2px ;
    height: 32px ;
    left: -1px;
    position: absolute ;
    top: -1px ;
    transform: translate3d(0px, 0px, 0px) ;
    width: 32px ;
    display: flex ;
    align-items: center;
    justify-content: center;
    transition: -ms-transform 250ms ease-in-out 0s, -webkit-transform 250ms ease-in-out 0s, transform 250ms ease-in-out 0s !important;
`

export default FilterModal;