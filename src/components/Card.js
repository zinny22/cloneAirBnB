import React, { useState } from "react";
import styled from 'styled-components'
import { Grid, Text } from "../elements";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {Navigation, Pagination} from "swiper";

const Card = ()=> {
    const [swiper, setSwiper] = useState(null);
    SwiperCore.use([Navigation, Pagination]);
    const swiperOption = {
        navigation: true,
        pagination: true,
        onSwiper: setSwiper,
    }

    return(
        <React.Fragment>
            <CardContents>
                <CardArea>
                    <StyledSwiper {...swiperOption} ref={setSwiper}>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <IconArea><FontAwesomeIcon icon={faHeart}/></IconArea>
                    </StyledSwiper>
                    <Grid is_flex>
                        <Text size="16px" bold>Kecamatan Mengwi, 발리</Text>
                        <Text size="16px">₩97,297/박</Text>
                    </Grid>
                    <Grid is_flex>
                        <Text color="#717171" size="16px">5,282km 거리</Text>
                        <Text color="#717171" size="16px">3월 4일~11일</Text>
                    </Grid>
                </CardArea>
            </CardContents>
            <CardContents>
                <CardArea>
                    <StyledSwiper {...swiperOption} ref={setSwiper}>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <IconArea><FontAwesomeIcon icon={faHeart}/></IconArea>
                    </StyledSwiper>
                    <Grid is_flex>
                        <Text size="16px" bold>Kecamatan Mengwi, 발리</Text>
                        <Text size="16px">₩97,297/박</Text>
                    </Grid>
                    <Grid is_flex>
                        <Text color="#717171" size="16px">5,282km 거리</Text>
                        <Text color="#717171" size="16px">3월 4일~11일</Text>
                    </Grid>
                </CardArea>
            </CardContents>
            <CardContents>
                <CardArea>
                    <StyledSwiper {...swiperOption} ref={setSwiper}>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <IconArea><FontAwesomeIcon icon={faHeart}/></IconArea>
                    </StyledSwiper>
                    <Grid is_flex>
                        <Text size="16px" bold>Kecamatan Mengwi, 발리</Text>
                        <Text size="16px">₩97,297/박</Text>
                    </Grid>
                    <Grid is_flex>
                        <Text color="#717171" size="16px">5,282km 거리</Text>
                        <Text color="#717171" size="16px">3월 4일~11일</Text>
                    </Grid>
                </CardArea>
            </CardContents>
            <CardContents>
                <CardArea>
                    <StyledSwiper {...swiperOption} ref={setSwiper}>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <IconArea><FontAwesomeIcon icon={faHeart}/></IconArea>
                    </StyledSwiper>
                    <Grid is_flex>
                        <Text size="16px" bold>Kecamatan Mengwi, 발리</Text>
                        <Text size="16px">₩97,297/박</Text>
                    </Grid>
                    <Grid is_flex>
                        <Text color="#717171" size="16px">5,282km 거리</Text>
                        <Text color="#717171" size="16px">3월 4일~11일</Text>
                    </Grid>
                </CardArea>
            </CardContents>
            <CardContents>
                <CardArea>
                    <StyledSwiper {...swiperOption} ref={setSwiper}>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <IconArea><FontAwesomeIcon icon={faHeart}/></IconArea>
                    </StyledSwiper>
                    <Grid is_flex>
                        <Text size="16px" bold>Kecamatan Mengwi, 발리</Text>
                        <Text size="16px">₩97,297/박</Text>
                    </Grid>
                    <Grid is_flex>
                        <Text color="#717171" size="16px">5,282km 거리</Text>
                        <Text color="#717171" size="16px">3월 4일~11일</Text>
                    </Grid>
                </CardArea>
            </CardContents>
            <CardContents>
                <CardArea>
                    <StyledSwiper {...swiperOption} ref={setSwiper}>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <IconArea><FontAwesomeIcon icon={faHeart}/></IconArea>
                    </StyledSwiper>
                    <Grid is_flex>
                        <Text size="16px" bold>Kecamatan Mengwi, 발리</Text>
                        <Text size="16px">₩97,297/박</Text>
                    </Grid>
                    <Grid is_flex>
                        <Text color="#717171" size="16px">5,282km 거리</Text>
                        <Text color="#717171" size="16px">3월 4일~11일</Text>
                    </Grid>
                </CardArea>
            </CardContents>
            <CardContents>
                <CardArea>
                    <StyledSwiper {...swiperOption} ref={setSwiper}>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <IconArea><FontAwesomeIcon icon={faHeart}/></IconArea>
                    </StyledSwiper>
                    <Grid is_flex>
                        <Text size="16px" bold>Kecamatan Mengwi, 발리</Text>
                        <Text size="16px">₩97,297/박</Text>
                    </Grid>
                    <Grid is_flex>
                        <Text color="#717171" size="16px">5,282km 거리</Text>
                        <Text color="#717171" size="16px">3월 4일~11일</Text>
                    </Grid>
                </CardArea>
            </CardContents>
            <CardContents>
                <CardArea>
                    <StyledSwiper {...swiperOption} ref={setSwiper}>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <IconArea><FontAwesomeIcon icon={faHeart}/></IconArea>
                    </StyledSwiper>
                    <Grid is_flex>
                        <Text size="16px" bold>Kecamatan Mengwi, 발리</Text>
                        <Text size="16px">₩97,297/박</Text>
                    </Grid>
                    <Grid is_flex>
                        <Text color="#717171" size="16px">5,282km 거리</Text>
                        <Text color="#717171" size="16px">3월 4일~11일</Text>
                    </Grid>
                </CardArea>
            </CardContents>
            <CardContents>
                <CardArea>
                    <StyledSwiper {...swiperOption} ref={setSwiper}>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <IconArea><FontAwesomeIcon icon={faHeart}/></IconArea>
                    </StyledSwiper>
                    <Grid is_flex>
                        <Text size="16px" bold>Kecamatan Mengwi, 발리</Text>
                        <Text size="16px">₩97,297/박</Text>
                    </Grid>
                    <Grid is_flex>
                        <Text color="#717171" size="16px">5,282km 거리</Text>
                        <Text color="#717171" size="16px">3월 4일~11일</Text>
                    </Grid>
                </CardArea>
            </CardContents>
            <CardContents>
                <CardArea>
                    <StyledSwiper {...swiperOption} ref={setSwiper}>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <IconArea><FontAwesomeIcon icon={faHeart}/></IconArea>
                    </StyledSwiper>
                    <Grid is_flex>
                        <Text size="16px" bold>Kecamatan Mengwi, 발리</Text>
                        <Text size="16px">₩97,297/박</Text>
                    </Grid>
                    <Grid is_flex>
                        <Text color="#717171" size="16px">5,282km 거리</Text>
                        <Text color="#717171" size="16px">3월 4일~11일</Text>
                    </Grid>
                </CardArea>
            </CardContents>
            <CardContents>
                <CardArea>
                    <StyledSwiper {...swiperOption} ref={setSwiper}>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgArea image_url="https://economist.co.kr/data/photo/202109/30/0e92a991-d42f-4309-9004-3161e4d064fc.jpg"></ImgArea>
                        </SwiperSlide>
                        <IconArea><FontAwesomeIcon icon={faHeart}/></IconArea>
                    </StyledSwiper>
                    <Grid is_flex>
                        <Text size="16px" bold>Kecamatan Mengwi, 발리</Text>
                        <Text size="16px">₩97,297/박</Text>
                    </Grid>
                    <Grid is_flex>
                        <Text color="#717171" size="16px">5,282km 거리</Text>
                        <Text color="#717171" size="16px">3월 4일~11일</Text>
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
    &:hover swiper-button-next,
    &:hover swiper-pagination {
        visibility: visible;
    }
`

const CardArea = styled.div`
    grid-area: 1/1/2/2;
    opacity: 1;
    position: relative;
    p{
        margin: 0;
    }
`
const StyledSwiper = styled(Swiper)`
    position: relative;
    .swiper-button-prev, swiper-button-next, swiper-pagination {
        visibility: hidden;
    }
    .swiper-button-disabled{
        opacity: 0;
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
    top: 10px;
    right: 10px;
    svg{
        color: #FF385C;
        height: 1.5em;
    }
`
export default Card