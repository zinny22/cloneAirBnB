import React, { useState } from "react";
import styled from 'styled-components'
import Header from '../components/Header'
import Card from '../components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { actionCreators as postActions } from "../redux/modules/post"
import { useDispatch, useSelector } from "react-redux"
import Map from '../components/Map'
import Footer from "../components/Footer";
import FilterModal from "../components/FilterModal";

const Main = ()=> {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    
    const categoryList = ['초소형 주택', '해변 근처', '멋진 수영장', '농장', '통나무집']
    const [clickCategory, setClickCategory] = useState(0);

    React.useEffect(()=>{
      dispatch(postActions.getPostDB('초소형 주택'))
      window.addEventListener('scroll', updateScroll);

      return () => {
        window.removeEventListener("scroll", updateScroll);
      };
    },[]);

    const dispatch = useDispatch()
    let post_list = useSelector((state) => state.post.list.homes
    )

    const [toggleMap, setToggleMap] = React.useState(false)
    const [isModal, setIsModal] = React.useState(false)


    console.log(post_list)
    return(
        <React.Fragment>
          <Header></Header>
          <Nav className={110 < scrollPosition ? "change_nav" : ""}>
            <CategoryArea>
              {categoryList.map((a, idx) => {
                return (
                  <CategoryContent key={idx} onClick={()=> {setClickCategory(idx); dispatch(postActions.getPostDB(a));}}>
                      <Category idx={idx} clickCategory={clickCategory} className={110 < scrollPosition ? "change_category" : ""}>
                        <div className="category_icon" style={{display: idx === clickCategory ? "block" : "none"}}></div>
                        <p style={{color: idx === clickCategory ? "#000" : "#717171"}} >{a}</p>
                      </Category>
                  </CategoryContent>
                    )
                  })}
            </CategoryArea>
            <FilterArea>
              <FilterBtn>언제든</FilterBtn>
              <FilterBtn>인원</FilterBtn>
              <FilterBtn onClick={()=> setIsModal(true)}>필터
                {
                  isModal &&<FilterModal/>
                }
              </FilterBtn>
            </FilterArea>
          </Nav>
          {toggleMap === false ? (
            <CardContentsArea>
              <CardListArea>
                { post_list &&
                  post_list.map((info, idx) => {
                    return (
                      <React.Fragment key={idx}>
                        <Card info={info} />
                      </React.Fragment>
                    )
                  })
                }
              </CardListArea>
            </CardContentsArea>
          ) : (
          <Map post_list={post_list}/>
          )}
          <MapBtn onClick={()=> setToggleMap(!toggleMap)}>
            {toggleMap === false ? (
              <React.Fragment>
                <span>지도 표시하기</span>
                <FontAwesomeIcon icon={faMap}/>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <span>목록 보기</span>
                <FontAwesomeIcon icon={faList}/>
              </React.Fragment>
            )}
          </MapBtn>
          <Footer/>
        </React.Fragment>
    )
}

const Nav = styled.div`
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 5;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0;
  transition: box-shadow 0.2s;
  &.change_nav {
    box-shadow: 0px 15px 15px -15px #80808085;
  }
  display: flex;
  @media screen and (min-width: 1128px) {
    padding: 12px 80px 10px;
    max-width: none;
  }
  @media screen and (min-width: 800px) and (max-width: 1128px) {
    padding: 12px 24px 10px;
    max-width: none;
  }
  @media screen and (min-width: 0) and (max-width: 800px){
    flex-direction: column-reverse;
    position: static;
  }
`
const CategoryArea = styled.div`
  -webkit-box-align: center !important;
  box-sizing: border-box;
  display: flex !important;
  align-items: center !important;
  width: 100%;
  @media screen and (min-width: 0) and (max-width: 800px){
    justify-content: center;
  }
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
`

const FilterArea = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 0) and (max-width: 800px){
    justify-content: center;
    border-radius: 30px;
    padding: 10px 16px;
    background-color: rgb(247, 247, 247);
    width: 200px;
    margin: 10px auto 20px;
  }
`
const FilterBtn = styled.button`
  height: 40px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 30px;
  padding: 10px 16px;
  cursor: pointer;
  min-width: 74px;
  color: rgb(34, 34, 34);
  &:not(:first-child){
    margin-left: 8px;
  }
  @media screen and (min-width: 0) and (max-width: 800px){
    border: none;
    padding: 0;
    border-radius: 0;
    background-color: transparent;
    &:not(:first-child){
      margin-left: 0px;
    }
  }
`

const Category = styled.div`
  margin: 6px 0;
  padding: 12px 15px;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  position: relative;
  ${(props)=> props.idx === props.clickCategory ? `pointer-events: none;` : ""};
  &:hover {
    background: #F7F7F7;
  }
  &:after {
    content: ""; display: block; visibility: hidden; clear: both;
  }
  &:before {
    content: ""; position: absolute; width: 0%; height: 2.5px; bottom: -6px; left: 50%; transform: translateX(-50%); background-color: rgb(34,34,34); 
    transition: all 0.3s ease-in-out; ${(props)=> props.idx === props.clickCategory ? `width: 80%;` : ""}
  }
  &.change_category:before {
    bottom: -16px;
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
  @media screen and (min-width: 0) and (max-width: 800px){
    &:before {
      content: ""; width: 0%; height: 0;
    }
  }
`

const CardContentsArea = styled.div`
  background-color: transparent;
  margin-top: 25px;
  @media screen and (min-width: 1128px) {
    padding: 0 80px 60px 80px;
    max-width: none;
  }
  @media screen and (min-width: 0px) and (max-width: 1128px) {
    padding: 0 24px 60px 24px;
    max-width: none;
  }
`

const CardListArea = styled.div`
  display: grid;
  gap: 25px;
  box-sizing: border-box;
  @media screen and (min-width: 1607px){
    grid-template-columns: repeat(5, minmax(0px, 1fr)) !important;
    row-gap: 32px;
  }
  @media screen and (min-width: 1232px) and (max-width: 1607px) {
    grid-template-columns: repeat(4, minmax(0px, 1fr));
    row-gap: 32px;
  }
  @media screen and (min-width: 878px) and (max-width: 1232px) {
    grid-template-columns: repeat(3, minmax(0px, 1fr)) !important;
  }
  @media screen and (min-width: 551px) and (max-width: 878px) {
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