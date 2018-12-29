import React from 'react'
import styled from 'styled-components'

const Navigation = () => (
  <Section1>
    <Hr />
    <Div2>
      <Button1>
        <A1 href="#ashburn">Ashburn Location</A1>
      </Button1>
      <Button1>
        <A1 href="#sterling">Sterling Location</A1>
      </Button1>
      <Button1>
        <A1 href="#about">About Us</A1>
      </Button1>
      <Button1>
        <A1 href="#contact">Contact Us</A1>
      </Button1>
    </Div2>
  </Section1>
)

const Section1 = styled.section`
  margin: 4rem 0;
  @media (max-width: 400px) {
    padding: 1rem;
  }
`
const Div2 = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
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
const Button1 = styled.button`
  width: 8%;
  font-size: 1.6rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  background: #DAA520;
  border: 2px solid black;
  font-weight: 700;
  text-shadow: 1px 1px 3px black;
  &:hover {
    cursor: pointer;
    background: black;
    transform: scale(1.10);
    border-radius: 5px;
    text-shadow: 1px 1px 3px #DAA520;
    border: 2px solid #DAA520;
}
`
const A1 = styled.a`
  color: white;
  text-decoration: none;
`

export default Navigation
