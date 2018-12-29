import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Header = (props) => (
  <Div1>
    <Img1 fluid={props.bannerImage} />
    <Img2 fluid={props.logoImage} />
  </Div1>
)

const Div1 = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  overflow: hidden;
`
const Img1 = styled(Img)`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
`
const Img2 = styled(Img)`
  width: 20%;
  position: absolute;
  bottom: 240px;
  left: 280px;
  @media (max-width: 768px) {
    width: 50%;
    bottom: 300px;
    left: 80px;
  }
  @media (max-width: 400px) {
    width: 60%;
    left: 20px;
    bottom: 290px;
  }
`

export default Header
