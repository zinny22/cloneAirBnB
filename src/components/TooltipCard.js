import React, { useState } from 'react'
import styled from 'styled-components'
import { Img, Text } from "../elements";
import { MdGrade } from 'react-icons/md'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {Navigation, Pagination} from "swiper";
import {history} from "../redux/configureStore";

const TooltipCard = props => {
    const [swiper, setSwiper] = useState(null);
    SwiperCore.use([Navigation, Pagination]);
    const swiperOption = {
        navigation: true,
        pagination: true,
        onSwiper: setSwiper,
    }

    const { info } = props

    return (
      <Grid>
          <ToolSwiper {...swiperOption} ref={setSwiper}>
              {
                  info.image_url.map((a, i) => {
                      return(
                          <SwiperSlide key={i}>
                              <ImgArea image_url={a} onClick={()=> {history.push(`/detail/${info.id}`);}}></ImgArea>
                          </SwiperSlide>

                      )
                        
                  })
              }
          </ToolSwiper>
        <Contents>
          <Content>
            <MdGrade />
            <Text fontSize="14px" margin="0" color="#222222">
              4.98
            </Text>
            <Text fontSize="14px" margin="0 0 5px 5px" color="#717171">
              (2)
            </Text>
          </Content>
          <Content>
            <Text fontSize="16px" margin="0 0 5px 0">{info.category}</Text>
          </Content>
          <Content>
            <Text fontSize="16px" margin="0 0 5px 0">{info.address}</Text>
          </Content>
          <Content>
            <Text fontSize="16px" margin="0 0 5px 0">₩<span style={{fontWeight: "600"}}>{info.price}</span> /박</Text>
          </Content>
          <Content>
            <Text fontSize="15px">{info.availableDate}</Text>
          </Content>
        </Contents>
      </Grid>
    )
}

const Grid = styled.div`
  width: 280px;
  height: auto;
  position: absolute;
  bottom: -100px;
  left: 110px;
  z-index: 2;
  box-shadow: 0 8px 28px rgb(0 0 0 / 28%);
`
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #fff;
  border-radius: 0 0 16px 16px;
  border-top: 1px solid #ddd;
`
const Content = styled.div`
  line-height: 18px;
  align-items: center;
  display: flex;
  width: 100%;
  margin-bottom: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  svg {
    color: #ff385c;
    font-size: 16px;
    margin-right: 2px;
  }
`
const ToolSwiper = styled(Swiper)`
    position: relative;
    .swiper-button-prev, .swiper-button-next {
        width: auto;
        height: auto;
        transform: translateY(50%)
    }
    .swiper-button-next:after, .swiper-button-prev:after{
        border: 1px solid rgba(0, 0, 0, 0.08) !important;
        color: rgb(34, 34, 34) !important;
        background-color: rgba(255, 255, 255, 0.9) !important;
        font-size: 11px !important;
        width: 28px !important;
        line-height: 28px !important;
        text-align: center !important;
        border-radius: 50% !important;
        font-weight: 600;
        transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s !important;
    }
    .swiper-button-next:after {
        text-indent: 2px;
    }
    .swiper-button-prev:after {
        text-indent: -2px;
    }
    .swiper-button-next:hover:after, .swiper-button-prev:hover:after {
        border-color: rgba(0, 0, 0, 0.08) !important;
        background-color: rgb(255, 255, 255) !important;
        color: rgb(0, 0, 0) !important;
        box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgb(0 0 0 / 12%) 0px 6px 16px !important;
        transform: scale(1.04) !important;
    }
    .swiper-pagination{
        bottom: 5px;
    }
    .swiper-pagination-bullet{
        width: 6px; height: 6px; background-color: #ebebeb; margin: 0 2.5px;
    }
    .swiper-pagination-bullet-active{
        background-color: #fff;
    }
    .swiper-container{
        height: 180px !important;
    }
`

const ImgArea = styled.div`
    background-image: url('${props => props.image_url}');
    background-position: center;
    display: block;
    background-size: cover;
    width: 100%;
    height: 180px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`

export default TooltipCard