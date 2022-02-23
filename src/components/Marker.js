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
