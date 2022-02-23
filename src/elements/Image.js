import styled from "styled-components";
import React from "react";

const Image = (props) => {
    const {shape, src, size, border_radius, margin, is_flex, padding,} = props;
    const styles = {
        src: src,
        size: size,
        border_radius: border_radius,
        margin: margin,
        is_flex: is_flex,
        padding: padding,
    }

    if(shape === "circle"){
        return(
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape ==="rectangle"){
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }

    if(shape ==="square"){

    return(
        <AspectOutter>
            <ImageSquare {...styles}></ImageSquare>
        </AspectOutter>
        )
    }   
}

Image.defaultProps = {
    shape: "circle",
    src: "https://a0.muscache.com/im/pictures/19951173-02f9-44ce-8ca5-0772d98293ff.jpg?im_w=720",
    size: 36,
    margin: false,
    is_flex: false,
    padding: false
};

const ImageDefailt = styled.div`
    --size : ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
`

const AspectOutter = styled.div`
    width: 100%;
    height: 100%;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    ${(props) => props.border_radius? `border-radius: ${props.border_radius};` : ""}
`;

const ImageCircle = styled.div`
    --size : ${(props) => props.size};
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
    ${(props) => props.margin? `margin: ${props.margin};` : ""}
    ${(props) => props.padding? `padding: ${props.padding};` : ""}
    ${(props) => props.is_flex? `display: flex;` : ""}
`;
const ImageSquare = styled.div`
    --size : ${(props) => props.size};
    width: var(--size);
    height: var(--size);
    position: relative;
    padding-top: 93%;
    @media screen and (max-width: 743px) { padding-top: 75% } 
    @media screen and (max-width: 743px) { border-radius: 0px }
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    ${(props) => props.border_radius? `border-radius: ${props.border_radius};` : ""}
`;

export default Image;