import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const About = (props) => (
  <Section>
    <Hr id="about" />
    <Div>
      <Div1>
        <Img1 fluid={props.profileImage} />
      </Div1>
      <Div2>
        <Img2 fluid={props.logoLongImage} />
        <P1>
          Dulles Barber is a privately owned family business that provides professional haircuts in the Loudoun County area. Our seasoned barbers have more than 10 years of experience and also diligently mentor newer barbers. <br />
          <br />
          We provide a wide range of services for adults and children including beard trims to skin fades. Enjoy our big screen televisions and magazine varieties while we meticulously apply our craft for each and every patron.<br />
          <br />
          After your haircut, we offer a complimentary mini-massage and hot towel and our clients always leave feeling great.<br />
          <br />
          We welcome you to visit us and thank you for checking us out! If we can make your experience better in any way, please let us know.<br />
          <br />
        </P1>
        <Span1>
          <Span2>Timothy</Span2><br />
          I.T. Manager
        </Span1>
      </Div2>
    </Div>
  </Section>
)

const Section = styled.section`
`
const Div = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
  line-height: 1.4;
  margin-bottom: 5rem;
  @media (max-width: 400px) {
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
`
const Div1 = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 400px) {
    margin-bottom: 2rem;
  }
`
const Div2 = styled.div`
  width: 30%;
  line-height: 1.5;
  @media (max-width: 768px) {
    width: 40%;
  }
  @media (max-width: 400px) {
    width: 80%;
  }
`
const Img1 = styled(Img)`
  width: 80%;
  height: 80%;
  border-radius: 10px;
  box-shadow: 1px 1px 10px gray;
  @media (max-width: 768px) {
    height: 50%;
  }
`
const Hr = styled.hr`
  width: 20%;
  height: 3px;
  background: black;
  border-radius: 20px;
  margin: 4rem auto;
  @media (max-width: 769px) {
    width: 40%;
    margin: 5rem auto;
  }
  @media (max-width: 400px) {
    width: 50%;
  }
`
const Img2 = styled(Img)`
  width: 60%;
  margin-bottom: 3rem;
  @media (max-width: 400px) {
    width: 90%;
  }
`
const P1 = styled.p`
  font-size: 1.6rem;
  `
const Span1 = styled.p`
  font-size: 1.6rem;
  text-align: center;
`
const Span2 = styled.span`
  font-family: "Pacifico";
`

export default About
