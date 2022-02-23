import React, { useState } from 'react'
import styled from 'styled-components'
import TooltipCard from './TooltipCard'


const Marker = props => {
  const {text, info} = props
  const [visible, setVisible] = useState(false)
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = () => {
    toggleIsSelected()
    toggleTooltip()
  }

  const toggleIsSelected = () => {
    setIsSelected(isSelected ? false : true)
  }

  const toggleTooltip = () => {
    setVisible(!visible)
  }
    return (
      <Markercontent>
        <PriceMarker onClick={handleClick} isSelected={isSelected}>
          {text}
        </PriceMarker>
        {visible === true ? <TooltipCard info={info} type="price" /> : null}
      </Markercontent>
    )
  }

const Markercontent = styled.div`
    position: relative;
    &:nth-child(1) {top: -40%; left: 0%;}
    &:nth-child(2) {top: -30%; left: -15%;}
    &:nth-child(3) {top: -30%; left: 0%;}
    &:nth-child(4) {top: -17%; left: -5%;}
    &:nth-child(5) {top: 0%; left: 10%;}
    &:nth-child(6) {top: -5%; left: 0%;}
    &:nth-child(7) {top: -15%; left: 8%;}
    &:nth-child(8) {top: -40%; left: -3%;}
    &:nth-child(9) {top: -30%; left: -15%;}
    &:nth-child(10) {top: -0%; left: -5%;}
    &:nth-child(11) {top: 0%; left: 5%;}
    &:nth-child(12) {top: -45%; left: 10%;}
    &:nth-child(13) {top: -40%; left: -5%;}
    &:nth-child(14) {top: -55%; left: -3%;}
    &:nth-child(15) {top: -40%; left: -10%;}
    &:nth-child(16) {top: -30%; left: -7%;}
    &:nth-child(17) {top: -70%; left: -10%;}
    &:nth-child(18) {top: -32%; left: -8%;}
    &:nth-child(19) {top: -37%; left: 7%;}
    &:nth-child(20) {top: 8%; left: 1%;}
    &:nth-child(20) {top: -15%; left: 1%;}
    &:nth-child(20) {top: -32%; left: 4%;}
    &:nth-child(20) {top: -48%; left: -7%;}
    &:nth-child(20) {top: -8%; left: -1%;}
`

const PriceMarker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isSelected ? 'rgb(34, 34, 34)' : '#fff')};
  color: ${props => (props.isSelected ? '#fff' : 'rgb(34, 34, 34)')};
  transform: ${props => (props.isSelected ? 'scale(1.3)' : '')};
  border-radius: 28px;
  box-shadow: rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px;
  height: 28px;
  width: 58px;
  padding: 0px 8px;
  transform-origin: 50% 50%;
  transition: transform 250ms cubic-bezier(0, 0, 0.1, 1) 0s;
  font-weight: 800;
  font-size: 13px;
  line-height: 18px;
  :hover {
    transform: scale(1.1);
  }
`

export default Marker
