import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, center, margin, width, right, flow, padding, } = props;

  const styles = { bold: bold, color: color, size: size, center: center, margin: margin, width: width, right: right, flow: flow, padding: padding,};
  
  
  return (
    <P {...styles} >
      {children}
    </P>
  )

  
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  center: false,
  margin: false,
  width: "auto",
  right: false,
  flow: false,
  padding: false,
};

const P = styled.p`
  ${(props) => props.center ? `text-align: center;` : ""}
  ${(props) => props.right ? `text-align: right;` : ""}
  ${(props) => props.flow ? `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` : ""}
  ${(props) => props.padding? `padding: ${props.padding};` : ""}
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  width: ${(props)=> props.width};
  transition: ease all .1s;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  @media only screen and (max-width: 500px) {min-width: 70%}
`;


export default Text;