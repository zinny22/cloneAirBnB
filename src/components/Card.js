import React, { useState } from "react";
import styled from 'styled-components'
import { Grid, Text } from "../elements";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {Navigation, Pagination} from "swiper";
import {history} from "../redux/configureStore";

const Card = (props)=> {
    const [swiper, setSwiper] = useState(null);
    SwiperCore.use([Navigation, Pagination]);
    const swiperOption = {
        navigation: true,
        pagination: true,
        onSwiper: setSwiper,
    }

    const { info } = props
    return(
        <React.Fragment>
            <CardContents>
                <CardArea>
                    <StyledSwiper {...swiperOption} ref={setSwiper}>
                        {
                            info.image_url.map((a, i) => {
                                return(
                                    <SwiperSlide>
                                        <ImgArea image_url={a} onClick={()=> {history.push(`/detail/${info._id}`);}}></ImgArea>
                                    </SwiperSlide>
                                )
                            })
                        }
                        <IconArea><FontAwesomeIcon icon={faHeart}/></IconArea>
                    </StyledSwiper>
                    <Grid is_flex onClick={()=> {history.push(`/detail/${info._id}`);}}>
                        <Text size="16px" width="calc(100% - 95px)" bold flow>{info.address}</Text>
                        <Text size="16px" width="90px" right>₩{info.price}/박</Text>
                    </Grid>
                    <Grid is_flex onClick={()=> {history.push(`/detail/${info._id}`);}}>
                        <Text color="#717171" size="16px">{info.distance}km 거리</Text>
                        <Text color="#717171" size="16px">{info.availableDate}</Text>
                    </Grid>
                </CardArea>
            </CardContents>
        </React.Fragment>
    )
}

const CardContents = styled.div`
    display: grid !important;
    grid-template-columns: 100%;
    isolation: isolate;
    box-sizing: border-box;
    cursor: pointer;
    &:hover .swiper-button-prev, 
    &:hover .swiper-button-next {
        visibility: visible;
    }
`

const CardArea = styled.div`
    grid-area: 1/1/2/2;
    opacity: 1;
    position: relative;
    p{
        margin: 0;
        @media only screen and (max-width: 500px){
            min-width: auto;
        }
    }
`
const StyledSwiper = styled(Swiper)`
    position: relative;
    .swiper-button-prev, .swiper-button-next {
        visibility: hidden;
        width: auto;
        height: auto;
    }
    .swiper-button-next:after, .swiper-button-prev:after{
        border: 1px solid rgba(0, 0, 0, 0.08) !important;
        color: rgb(34, 34, 34) !important;
        background-color: rgba(255, 255, 255, 0.9) !important;
        font-size: 11px !important;
        width: 32px !important;
        line-height: 32px !important;
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
    .swiper-button-disabled{
        opacity: 0 !important;
    }
    .swiper-pagination{
        bottom: 20px;
    }
    .swiper-pagination-bullet{
        width: 6px; height: 6px; background-color: #ebebeb; margin: 0 2.5px;
    }
    .swiper-pagination-bullet-active{
        background-color: #fff;
    }
`

const ImgArea = styled.div`
    background-image: url('${props => props.image_url}');
    background-position: center;
    display: block;
    background-size: cover;
    width: 100%;
    height: 279px;
    border-radius: 12px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-bottom: 10px;
`

const IconArea = styled.div`
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 10;
    svg{
        display: block;
        fill: rgba(0, 0, 0, 0.5);
        height: 24px;
        width: 24px;
        color: #fff;
    }
`
export default Card