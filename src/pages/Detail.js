import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import {Grid , Text, Image, Button} from "../elements"
import Calendar from "../components/Calendar"
import { useDispatch, useSelector } from "react-redux"
import { actionCreators as postActions } from "../redux/modules/post"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import ReviewModal from "../components/ReviewModal";
import IntroduceModal from "../components/IntroduceModal";
import Footer from "../components/Footer";


const Detail = (props) => {
    const id = props.match.params.home_id;
    const dispatch = useDispatch()
    let post_detail = useSelector((state) => state.post.detail)
    const [IsReview, setIsReview,] = useState(false)
    const onSetIsReview =(active)=>{
    setIsReview(active)
    }

    React.useEffect(()=>{

        dispatch(postActions.getPostDetailDB(id))
        return () => {
        };
    },[]);

    return (
        <React.Fragment>
            <Header/>
        <Grid is_detail is_flex padding = "24px 80px 0px 80px">
        <HomeName>
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-label="자동 번역된 이름: 산슨 테라스 &quot;작은 전원주택&quot;" role="img" focusable="false" style={{padding : "6px", display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M9 0a1 1 0 0 1 .993.883L10 1v5h5a1 1 0 0 1 .993.883L16 7v8a1 1 0 0 1-.883.993L15 16H7a1 1 0 0 1-.993-.883L6 15v-5H1a1 1 0 0 1-.993-.883L0 9V1A1 1 0 0 1 .883.007L1 0h8zm1.729 7l-1.393.495.233.217.13.132c.125.127.227.245.308.352l.073.103.048.073.045.077H7.308v1.309h1.207l.166.52.09.266.112.29a6.294 6.294 0 0 0 1.109 1.789c-.495.315-1.119.607-1.87.87l-.331.112-.346.108-.445.134L7.72 15l.407-.125.386-.128c1.007-.349 1.836-.752 2.486-1.214.57.405 1.277.764 2.12 1.08l.369.134.386.128.406.125.72-1.153-.445-.134-.26-.08-.345-.115c-.783-.27-1.43-.57-1.94-.895a6.3 6.3 0 0 0 1.068-1.694l.128-.32.114-.33.165-.521h1.208V8.449H11.64l-.093-.231a3.696 3.696 0 0 0-.554-.917l-.126-.149-.14-.152zm1.35 2.758l-.042.133-.076.224-.103.264A4.985 4.985 0 0 1 11 11.76a4.952 4.952 0 0 1-.743-1.127l-.115-.254-.103-.264-.076-.224-.042-.133h2.158zM9 1H1v8h5V7c0-.057.005-.113.014-.167H3.827L3.425 8H2l2.257-6h1.486l1.504 4H9V1zM5 3.411L4.253 5.6h1.502L5 3.411z"></path></svg>
            <div style={{fontSize: "26px",}}>&nbsp;{post_detail ? post_detail.homes.home_name : ""}</div>
        </HomeName>
        </Grid>
        <Grid is_detail is_flex padding = "0px 80px 24px 80px">
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
        </Grid>
        <Grid is_detail is_flex padding = "0px 80px 0px 80px">
            <ImageBox>
                <BigImage>
                    <Image  src={post_detail ? post_detail.homes.image_url[0] : ""} border_radius ="13px 0px 0px 13px / 13px 0px 0px 13px" shape = "square" />
                </BigImage>
                <SmallImage>
                    <Image  src={post_detail ? post_detail.homes.image_url[1] : ""}shape = "square" />
                    <Image  src={post_detail ? post_detail.homes.image_url[2] : ""}border_radius ="0px 13px 0px 0px / 0px 13px 0px 0px" shape = "square" />
                    <Image  src={post_detail ? post_detail.homes.image_url[3] : ""}shape = "square" />
                    <Image  src={post_detail ? post_detail.homes.image_url[4] : ""}border_radius ="0px 0px 13px 0px / 0px 0px 13px 0px" shape = "square" />
                </SmallImage>
            </ImageBox>
        </Grid>
        <Grid is_detail is_flex padding = "0px 80px 0px 80px">
        <AllGrid>
        <LeftGrid>
            <div style={{margin : "0px", padding: "24px 0px 24px 0px", display: "flex" ,justifyContent: "space-between"}}>
            <text style = {{fontWeight:"bold", fontSize:"22px"}}>
                {post_detail ? post_detail.homes.host_name : ""}님이 호스팅하는 초소형 주택 
                <br/>
                <span style={{fontSize: "16px", fontWeight: "400"}}>
                최대인원 N명 침실 N개 욕실 N개 
                </span>
            </text>
            <UserImage src ="https://a0.muscache.com/im/pictures/user/854c3d72-d48e-4037-bc5b-83162f5765fb.jpg?im_w=240"/>
            </div>
            <Hr/>
            <Grid padding ="32px 0px 32px 0px" >
            <Text bold size ="16px">
                {post_detail ? post_detail.homes.host_name : ""}님은 슈퍼호스트입니다
                <br/>
                <span style={{color: "gray", fontSize: "14px", fontWeight: "400"}}>
                슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
                </span>
            </Text>
            <Text bold size ="16px">
                {post_detail ? post_detail.homes.convenience[5] : ""}
                <br/>
                <span style={{color: "gray", fontSize: "14px", fontWeight: "400"}}>
                게스트가 자주 찾는 편의시설
                </span>
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
            {post_detail ? post_detail.homes.introduce : ""}
            <br/>
            <br/>
            <text style=
            {{
            fontSize: "16px", 
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
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M16 32c6.627 0 12-5.373 12-12 0-6.218-3.671-12.51-10.924-18.889L16 .18l-1.076.932C7.671 7.491 4 13.782 4 20c0 6.577 5.397 12 12 12zm0-2c-5.496 0-10-4.525-10-10 0-5.327 3.115-10.882 9.424-16.65l.407-.37.169-.149.576.518c6.043 5.526 9.156 10.855 9.407 15.977l.013.34L26 20c0 5.523-4.477 10-10 10zm-3.452-5.092a8.954 8.954 0 0 1 2.127-4.932l.232-.26.445-.462a6.973 6.973 0 0 0 1.827-4.416l.007-.306-.006-.307-.007-.11a6.03 6.03 0 0 0-2.009-.057 4.979 4.979 0 0 1-1.443 4.008 10.951 10.951 0 0 0-2.87 5.016 6.034 6.034 0 0 0 1.697 1.826zM16 26l.253-.005.25-.016-.003-.137c0-1.32.512-2.582 1.464-3.533a10.981 10.981 0 0 0 3.017-5.656 6.026 6.026 0 0 0-1.803-1.743 8.971 8.971 0 0 1-2.172 5.493l-.228.255-.444.462a6.96 6.96 0 0 0-1.827 4.415l-.006.276c.48.123.982.189 1.499.189z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[0] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M26.805 4.006a2.995 2.995 0 0 0-1.873.82l-.022.022-.113-.021a47.19 47.19 0 0 0-16.86-.132l-.848.153-.021-.022A3 3 0 0 0 2 7l.007.211c.04.56.234 1.09.554 1.536l.025.033-.044.278c-.718 4.722-.717 9.14.001 13.88l.044.279-.025.035A3 3 0 0 0 5 28l.195-.006a2.995 2.995 0 0 0 1.873-.82l.021-.023.114.022a47.19 47.19 0 0 0 16.86.132l.847-.154.022.023A3 3 0 0 0 30 25l-.007-.212a2.992 2.992 0 0 0-.554-1.536l-.027-.034.045-.28c.718-4.74.719-9.158 0-13.88l-.044-.278.026-.033A3 3 0 0 0 27 4l-.194.006zM27 6a1 1 0 0 1 .676 1.737l-.4.367.09.534c.84 5.04.84 9.662-.001 14.723l-.09.534.4.367a1 1 0 1 1-1.525 1.266l-.367-.59-.68.138a45.287 45.287 0 0 1-18.205 0l-.68-.138-.368.59a1 1 0 1 1-1.525-1.265l.4-.367-.09-.535c-.841-5.06-.842-9.683 0-14.723l.088-.534-.399-.367A1 1 0 1 1 5.85 6.473l.367.59.68-.139a45.287 45.287 0 0 1 18.205 0l.68.138.368-.59A.998.998 0 0 1 27 6z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[1] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[2] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M16 1a7 7 0 0 1 6.996 6.76L23 8v7a2 2 0 0 1-1.496 1.936L23.847 31h-2.028l-2.334-14h-6.972L10.18 31H8.153l2.342-14.064a2.001 2.001 0 0 1-1.488-1.773L9 15V8a7 7 0 0 1 7-7zm0 2a5 5 0 0 0-4.995 4.783L11 8v7h10V8a5 5 0 0 0-5-5zm9 6v2h-8v5h-2v-5H7V9z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[3] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M13.693 13.934a4 4 0 0 1 5.283.595l.292.366 4.768 6.755a4 4 0 0 1 .596 3.342 4.004 4.004 0 0 1-4.496 2.913l-.403-.084-3.474-.932a1 1 0 0 0-.518 0l-3.474.932a4 4 0 0 1-2.941-.347l-.401-.249a4.004 4.004 0 0 1-1.19-5.207l.229-.368 4.768-6.755a4 4 0 0 1 .961-.96zm3.756 1.889a2 2 0 0 0-2.979.09l-.104.136-4.838 6.861a2 2 0 0 0 2.048 3.017l.173-.038 3.992-1.07a1 1 0 0 1 .518 0l3.964 1.063.143.034a2 2 0 0 0 2.132-2.963l-4.947-7.014zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[4] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[5] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[6] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M29 1v2c-7.18 0-13 5.82-13 13 0 7.077 5.655 12.833 12.693 12.996L29 29v2c-8.284 0-15-6.716-15-15 0-8.18 6.547-14.83 14.686-14.997zM3 1h2v6h2V1h2v6h2V1h2v9a5.002 5.002 0 0 1-3.999 4.9L9 31H7V14.9a5.01 5.01 0 0 1-3.978-4.444l-.017-.232L3 10zm26 6v2a7 7 0 0 0-.24 13.996L29 23v2a9 9 0 0 1-.265-17.996zM10.999 9h-6v.975l.005.176a3 3 0 0 0 5.99.025L11 10z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[7] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M11 23H5v4h20.585L2.293 3.707l1.414-1.414L27 25.585V5h-4v6h-8V9h6V3h8v24.585l.707.708-1.414 1.414-.708-.707H3v-8h6v-6h2z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[8] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M11 6v2H9.618l1.999 3.999h10.238l-1.542-4L17 8V6h4a1 1 0 0 1 .882.529l.051.111 3.617 9.38a5 5 0 1 1-1.922.577l-.524-1.36-7.445 6.516a1 1 0 0 1-.539.24L15 22h-4.1A5.002 5.002 0 0 1 1 21a5 5 0 0 1 6.296-4.83l1.81-3.617a1 1 0 0 1 .355-.395L7.38 8H5V6zM6 18a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm20 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-15.5-3.764l-1.414 2.83a5 5 0 0 1 1.814 2.933h2.481zm10.982-.237h-8.865l2.698 5.395z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[9] : ""}
        </Text>
        </div>
        </TextBox>
        <Facilities>편의시설 N개 모두보기</Facilities>
        </Grid>
        <Hr/>
        <Grid padding = "48px 0px 48px 0px">
        <Text margin = "0px" bold size = "22px">
            체크인 날짜를 선택해주세요.  
        </Text>
        <span style={{padding : "8px 0px 0px 0px", fontSize: "14px", fontWeight: "400"}}>
        </span> 
        </Grid>
        <Calendar/>
        </LeftGrid>
        <RightGrid>
        <Grid padding = "48px 0px 48px 0px">
        <Text margin = "0px 0px 24px 0px " bold size = "22px">
            숙소 편의시설
        </Text>
        <TextBox>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M16 32c6.627 0 12-5.373 12-12 0-6.218-3.671-12.51-10.924-18.889L16 .18l-1.076.932C7.671 7.491 4 13.782 4 20c0 6.577 5.397 12 12 12zm0-2c-5.496 0-10-4.525-10-10 0-5.327 3.115-10.882 9.424-16.65l.407-.37.169-.149.576.518c6.043 5.526 9.156 10.855 9.407 15.977l.013.34L26 20c0 5.523-4.477 10-10 10zm-3.452-5.092a8.954 8.954 0 0 1 2.127-4.932l.232-.26.445-.462a6.973 6.973 0 0 0 1.827-4.416l.007-.306-.006-.307-.007-.11a6.03 6.03 0 0 0-2.009-.057 4.979 4.979 0 0 1-1.443 4.008 10.951 10.951 0 0 0-2.87 5.016 6.034 6.034 0 0 0 1.697 1.826zM16 26l.253-.005.25-.016-.003-.137c0-1.32.512-2.582 1.464-3.533a10.981 10.981 0 0 0 3.017-5.656 6.026 6.026 0 0 0-1.803-1.743 8.971 8.971 0 0 1-2.172 5.493l-.228.255-.444.462a6.96 6.96 0 0 0-1.827 4.415l-.006.276c.48.123.982.189 1.499.189z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[0] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M26.805 4.006a2.995 2.995 0 0 0-1.873.82l-.022.022-.113-.021a47.19 47.19 0 0 0-16.86-.132l-.848.153-.021-.022A3 3 0 0 0 2 7l.007.211c.04.56.234 1.09.554 1.536l.025.033-.044.278c-.718 4.722-.717 9.14.001 13.88l.044.279-.025.035A3 3 0 0 0 5 28l.195-.006a2.995 2.995 0 0 0 1.873-.82l.021-.023.114.022a47.19 47.19 0 0 0 16.86.132l.847-.154.022.023A3 3 0 0 0 30 25l-.007-.212a2.992 2.992 0 0 0-.554-1.536l-.027-.034.045-.28c.718-4.74.719-9.158 0-13.88l-.044-.278.026-.033A3 3 0 0 0 27 4l-.194.006zM27 6a1 1 0 0 1 .676 1.737l-.4.367.09.534c.84 5.04.84 9.662-.001 14.723l-.09.534.4.367a1 1 0 1 1-1.525 1.266l-.367-.59-.68.138a45.287 45.287 0 0 1-18.205 0l-.68-.138-.368.59a1 1 0 1 1-1.525-1.265l.4-.367-.09-.535c-.841-5.06-.842-9.683 0-14.723l.088-.534-.399-.367A1 1 0 1 1 5.85 6.473l.367.59.68-.139a45.287 45.287 0 0 1 18.205 0l.68.138.368-.59A.998.998 0 0 1 27 6z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[1] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[2] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M16 1a7 7 0 0 1 6.996 6.76L23 8v7a2 2 0 0 1-1.496 1.936L23.847 31h-2.028l-2.334-14h-6.972L10.18 31H8.153l2.342-14.064a2.001 2.001 0 0 1-1.488-1.773L9 15V8a7 7 0 0 1 7-7zm0 2a5 5 0 0 0-4.995 4.783L11 8v7h10V8a5 5 0 0 0-5-5zm9 6v2h-8v5h-2v-5H7V9z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[3] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M13.693 13.934a4 4 0 0 1 5.283.595l.292.366 4.768 6.755a4 4 0 0 1 .596 3.342 4.004 4.004 0 0 1-4.496 2.913l-.403-.084-3.474-.932a1 1 0 0 0-.518 0l-3.474.932a4 4 0 0 1-2.941-.347l-.401-.249a4.004 4.004 0 0 1-1.19-5.207l.229-.368 4.768-6.755a4 4 0 0 1 .961-.96zm3.756 1.889a2 2 0 0 0-2.979.09l-.104.136-4.838 6.861a2 2 0 0 0 2.048 3.017l.173-.038 3.992-1.07a1 1 0 0 1 .518 0l3.964 1.063.143.034a2 2 0 0 0 2.132-2.963l-4.947-7.014zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[4] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[5] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[6] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M29 1v2c-7.18 0-13 5.82-13 13 0 7.077 5.655 12.833 12.693 12.996L29 29v2c-8.284 0-15-6.716-15-15 0-8.18 6.547-14.83 14.686-14.997zM3 1h2v6h2V1h2v6h2V1h2v9a5.002 5.002 0 0 1-3.999 4.9L9 31H7V14.9a5.01 5.01 0 0 1-3.978-4.444l-.017-.232L3 10zm26 6v2a7 7 0 0 0-.24 13.996L29 23v2a9 9 0 0 1-.265-17.996zM10.999 9h-6v.975l.005.176a3 3 0 0 0 5.99.025L11 10z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[7] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M11 23H5v4h20.585L2.293 3.707l1.414-1.414L27 25.585V5h-4v6h-8V9h6V3h8v24.585l.707.708-1.414 1.414-.708-.707H3v-8h6v-6h2z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[8] : ""}
        </Text>
        </div>
        <div style={{display:"flex"}}>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "24px", width: "24px", fill: "currentcolor"}}><path d="M11 6v2H9.618l1.999 3.999h10.238l-1.542-4L17 8V6h4a1 1 0 0 1 .882.529l.051.111 3.617 9.38a5 5 0 1 1-1.922.577l-.524-1.36-7.445 6.516a1 1 0 0 1-.539.24L15 22h-4.1A5.002 5.002 0 0 1 1 21a5 5 0 0 1 6.296-4.83l1.81-3.617a1 1 0 0 1 .355-.395L7.38 8H5V6zM6 18a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm20 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-15.5-3.764l-1.414 2.83a5 5 0 0 1 1.814 2.933h2.481zm10.982-.237h-8.865l2.698 5.395z"></path></svg>
        <Text margin = "0px 0px 16px 0px " size = "16px">
        &nbsp;&nbsp;
        {post_detail ? post_detail.homes.convenience[9] : ""}
        </Text>
        </div>
        </TextBox>
        <Facilities>편의시설 N개 모두보기</Facilities>
        </Grid>
        <MoveCard>하이루</MoveCard>
        </RightGrid>
        </AllGrid>
        </Grid>
        <Grid>
        {/* 후기 페이지 */}
        <Grid is_detail is_flex padding = "0px 80px 0px 80px">
        <BigHoogi>
        <Hr/>
            <Icon>
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{padding : "56px 8px 8px 8px", color : "red", display: "block", height: "16px", width: "16px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>  
                <Text is_flex padding = "48px 0px 32px 0px" margin = "0px" bold size = "22px">
                {post_detail ? post_detail.homes.rateAvg : ""} 후기 {post_detail ? post_detail.homes.comment_count : ""}개
                </Text>
            </Icon>
            <Facilities 
            onClick={()=>{onSetIsReview(true);}}>
            후기 {post_detail ? post_detail.homes.comment_count : ""}개 모두 보기
            </Facilities>
            {IsReview &&<ReviewModal setIsReview={setIsReview}/>}
        </BigHoogi>
        
        </Grid>
        <Grid is_detail is_flex padding = "48px 80px 32px 80px">
            <Map>
            <Grid padding = "0px 0px 48px 0px">
            <Hr/>
            </Grid>
                <Text is_flex padding = "0px 0px 32px 0px" margin = "0px" bold size = "22px">
                    호스팅 지역
                </Text>
                    여긴 지도입니다
            </Map>
        </Grid>

        {/* 호스트 소개  */}
        <Grid is_detail is_flex padding = "0px 80px 0px 80px">
        <Host>
        <Hr/>
        <HostInfo>
            <Image margin = "0px 24px 0px 0px" size = "64px"/>
                <Text margin = "0px" bold size = "22px">
                            호스트: {post_detail ? post_detail.homes.host_name : ""}님<br style={{padding:"0px"}}/>
                        <span style={{margin : "0px", padding: "0px", fontSize: "14px", fontWeight: "400"}}>
                            회원 가입일: 2012년11월
                        </span>
                </Text>
        </HostInfo>
            <Hoogi>
                <Icon2>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{padding : "3px", color : "red", display: "block", height: "16px", width: "16px", fill: "currentcolor"}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
                    &nbsp;후기 {post_detail ? post_detail.homes.comment_count : ""}개&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            </Host>
        </Grid>
        </Grid>
        <Footer/>
        </React.Fragment>
    )
}

const HomeName = styled.div`
    font-weight: 600;
    font-size : 14px;
    display: flex;
    width: 100%;
    margin : auto;
    @media screen and (max-width: 743px) { margin : 3% 0% 3% 3% }
    @media screen and (max-width: 1296px) { width : 100% }
    @media screen and (min-width: 1296px) { width : 1119px }
    @media screen and (max-width: 743px) { padding : 3% 1% 0% 1% };
`
const UserImage = styled.div`
    width : 56px;
    height: 56px;
    border-radius: 56px;
    background-size: cover;
    background-image: url("${(props) => props.src}");
`

const TopRate = styled.div`
    font-weight: 600;
    font-size : 14px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin : auto;
    @media screen and (max-width: 743px) { margin : 3% 0% 3% 3% }
    @media screen and (max-width: 1296px) { width : 100% }
    @media screen and (min-width: 1296px) { width : 1119px }
    @media screen and (max-width: 743px) { padding : 3% 1% 1% 1% };
`

const Share = styled.div`
    display: flex;
`
const Facilities = styled.button`
    background-color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    width : 218px;
    border-radius: 8px;
    height: 48px;
    margin-top: 24px;
    border: solid 1px;
    cursor: pointer;
    text-decoration: underline;
    @media screen and (max-width: 743px) { width : 100% };
`

const ImageBox = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    @media screen and (max-width: 743px) { padding: 0px } 
    @media screen and (max-width: 1296px) { width : 100% }
    @media screen and (min-width: 1296px) { width : 1122px }
    
`

const BigImage = styled.div`
    width : 100%;
    padding : 0% 0.8% 0% 0%;
    @media screen and (max-width: 743px) { padding: 0px } 
    
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

const AllGrid = styled.div`
    display : flex;
    width: 100%;
    margin : auto;
    @media screen and (max-width: 743px) { margin : 3% 0% 3% 3% }
    @media screen and (max-width: 1296px) { width : 100% }
    @media screen and (min-width: 1296px) { width : 1119px }
`

const LeftGrid = styled.div`
    width: 60%;
    padding-bottom: 48px;
    margin-top : 2%;
    /* @media screen and (max-width: 1296px) { width : 60% } */
    @media screen and (max-width: 743px) { width : 100% };
`
const TextBox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
`
const RightGrid = styled.div`
    width: 40%;
    padding-left : 20px;
    /* @media screen and (max-width: 1296px) { width : 100% } */
    @media screen and (max-width: 743px) { display: none } 
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
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
`
const BigHoogi = styled.div`
    margin : auto;
    width: 100%;
    @media screen and (max-width: 743px) { margin : 3% 0% 3% 3% }
    @media screen and (max-width: 1296px) { width : 100% }
    @media screen and (min-width: 1296px) { width : 1119px }
`

const Map = styled.div`
    margin : auto;
    width: 100%;
    @media screen and (max-width: 743px) { margin : 3% 0% 3% 3% }
    @media screen and (max-width: 1296px) { width : 100% }
    @media screen and (min-width: 1296px) { width : 1119px }
`


const Icon = styled.div`
    display: flex;
    padding : 8px;
`
const Icon2 = styled.div`
    display: flex;
   
`

const Host = styled.div`
    margin : auto;
    width: 100%;
    @media screen and (max-width: 743px) { margin : 3% 0% 3% 3% }
    @media screen and (max-width: 1296px) { width : 100% }
    @media screen and (min-width: 1296px) { width : 1119px }
`

const HostInfo = styled.div`
    display: flex;
    margin: 48px 0px 24px 0px;
    
`

const Hoogi = styled.div`
    display: flex;

`




export default Detail;