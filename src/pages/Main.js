import React from "react";
import styled from 'styled-components'
import Card from '../components/Card'

const Main = ()=> {

    return(
        <React.Fragment>
            <CardContentsArea>
                <CardListArea>
                    <Card></Card>
                </CardListArea>
            </CardContentsArea>
        </React.Fragment>
    )
}

const CardContentsArea = styled.div`
  background-color: transparent;
  @media (min-width: 1128px) {
    margin: 0px auto;
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

export default Main