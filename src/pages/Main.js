import React, { useState } from "react";
import styled from 'styled-components'
import Header from '../components/Header'
import Card from '../components/Card'
import { Image, Text } from "../elements";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';

const Main = ()=> {
    const categoryList = ['초소형 주택', '해변 근처', '멋진 수영장', '농장', '통나무집']
    const [clickCategory, setClickCategory] = useState(0);

    return(
        <React.Fragment>
          <Header></Header>
          <Nav>
            <CategoryArea>
              {categoryList.map((a, idx) => {
                return (
                  <CategoryContent style={{borderBottom: idx === clickCategory ? "3px solid rgb(34, 34, 34)" : ""}} key={idx} onClick={()=> {
                    setClickCategory(idx);
                  }}>
                      <Category>
                        <div className="category_icon" style={{display: idx === clickCategory ? "block" : "none"}}></div>
                        <p style={{color: idx === clickCategory ? "#000" : "#717171"}} >{a}</p>
                      </Category>
                  </CategoryContent>
                    )
                  })}
            </CategoryArea>
          </Nav>
          <CardContentsArea>
              <CardListArea>
                  <Card></Card>
              </CardListArea>
          </CardContentsArea>
          <MapBtn onClick={()=> window.alert("사용 가능하지 않은 서비스입니다.")}>
            <span>지도 표시하기</span>
            <FontAwesomeIcon icon={faMap}/>
          </MapBtn>
        </React.Fragment>
    )
}

const Nav = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 5;
  background-color: #fff;
  padding: 15px 80px 0px 80px;
  box-sizing: border-box;
`
const CategoryArea = styled.div`
  -webkit-box-align: center !important;
  box-sizing: border-box;
  display: flex !important;
  align-items: center !important;
  width: 100%;
`
const CategoryContent = styled.div`
  &:nth-child(1) .category_icon{
    background: url(https://a0.muscache.com/pictures/c54d41c5-c279-442f-9ec3-afbc1c5104cb.jpg) no-repeat center; background-size: cover;
  }
  &:nth-child(2) .category_icon{
    background: url(https://a0.muscache.com/pictures/483c0cae-5bfe-45b3-b4e4-8697253b2875.jpg) no-repeat center; background-size: cover;
  } 
  &:nth-child(3) .category_icon{
    background: url(https://a0.muscache.com/pictures/ea71f998-267a-4ffd-9ca8-ee70814dd775.jpg) no-repeat center; background-size: cover;
  } 
  &:nth-child(4) .category_icon{
    background: url(https://a0.muscache.com/pictures/373869d1-31bb-4a47-95d9-ccd5e478b715.jpg) no-repeat center; background-size: cover;
  } 
  &:nth-child(5) .category_icon{
    background: url(https://a0.muscache.com/pictures/ddab88e4-da9d-4e7c-8af8-165507476572.jpg) no-repeat center; background-size: cover;
  }
  transition: -ms-transform 100ms ease-out 0s, -webkit-transform 100ms ease-out 0s, transform 100ms ease-out 0s !important;
`

const Category = styled.div`
  margin: 6px 6px 6px 0;
  padding: 10px;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  transition: box-shadow 0.2s ease, -ms-transform 0.1s ease, -webkit-transform 0.1s ease, transform 0.1s ease;
  &:hover {
    background: #F7F7F7;
  }
  &:after {
    content: ""; display: block; visibility: hidden; clear: both;
  }
  p {
    margin: 0; line-height: 18px; font-weight: 600; float: right; font-size: 14px;
  }
  .category_icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    float: left;
  }
`

const CardContentsArea = styled.div`
  background-color: transparent;
  margin-top: 30px;
  @media (min-width: 1128px) {
    margin: 30px auto 0;
    position: relative;
    padding-left: 80px;
    padding-right: 80px;
    max-width: none;
    margin-bottom: 50px;
  }
`

const CardListArea = styled.div`
  display: grid;
  gap: 24px;
  box-sizing: border-box;
  @media screen and (min-width: 1607px) {
    grid-template-columns: repeat(5, minmax(0px, 1fr));
  }
  @media screen and (min-width: 960px) and (max-width: 1607px) {
    row-gap: 32px;
    grid-template-columns: repeat(4, minmax(0px, 1fr)) !important;
  }
  @media screen and (min-width: 551px) and (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
  }
  @media screen and (min-width: 0px) and (max-width: 551px) {
    grid-template-columns: repeat(1, minmax(0px, 1fr));
  }
`

const MapBtn = styled.button`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  border-color: rgba(0, 0, 0, 0.08) !important;
  background: #222222 !important;
  cursor: pointer !important;
  border-radius: 24px !important;
  outline: none !important;
  padding: 14px 19px !important;
  transition: -ms-transform 0.25s ease,-webkit-transform 0.25s ease,transform 0.25s ease !important;
  &:hover {
    box-shadow: 0px 0px 0px 1px transparent, 0px 0px 0px 4px transparent, 0px 6px 16px rgb(0 0 0 / 12%) !important;
    transform: translateX(-50%) scale(1.04) !important;
  }
  span {
    color: #fff; font-weight: 600; font-size: 14px;
  }
  svg {
    color: #fff; margin-left: 10px;
  }
`

export default Main