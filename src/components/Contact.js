import React from 'react'
import styled from 'styled-components'

const About = () => (
  <Section>
    <Hr id="contact" />
    <Div>
      <Form1 action="https://formspree.io/dullesbarber@gmail.com" method="POST">
        <Ul1>
          <Li1>
            <H1a>Contact Us</H1a>
            <p>We <Span1>only</Span1> use your email to answer your questions and comments,</p>
            <p>it will be <Span1>never</Span1> sold or spammed.</p>
          </Li1>
          <li>
            <input type="hidden" name="From" value="dullesbarber.com" />
          </li>
          <li>
            <input type="hidden" name="_gotcha" />
          </li>
          <li>
            <Input1 type="text" name="First Name" placeholder="First Name" required />
          </li>
          <li>
            <Input1 type="text" name="Last Name" placeholder="Last Name" required />
          </li>
          <li>
            <Input1 type="email" name="Email" placeholder="Email" required />
          </li>
          <li>
            <Textarea1 type="text" name="Message" placeholder="Message" required></Textarea1>
          </li>
          <li>
            <Button1 type="submit">Send</Button1>
          </li>
        </Ul1>
      </Form1>
    </Div>
  </Section >
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
const Form1 = styled.form`
  text-align: center;
  margin: 0 auto;
  width: 60%;
  border-radius: 10px;
  border: 2px solid white;
  box-shadow: 0 5px 5px gray;
  @media (max-width: 768px) {
    width: 90%;
  }
`
const H1a = styled.h1`
  font-size: 3.6rem;
  font-family: 'Lato';
  text-shadow: 1px 1px 2px gray;
  text-align: center;
  margin-top: 1rem;
`
const Ul1 = styled.ul`
`
const Li1 = styled.ul`
  line-height: 2;
  @media (max-width: 400px) {
    width: 100%;
    margin: 0 auto;
    line-height: 1.6;
  }
`
const Input1 = styled.input`
  width: 60%;
  font-size: 1.6rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 2px;
  font-family: 'Quicksand';
  &:focus {
    box-shadow: 0 0 20px #82DBFA;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`
const Textarea1 = styled.textarea`
  width: 60%;
  height: 200px;
  font-size: 1.6rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 2px;
  font-family: 'Quicksand';
  &:focus {
    box-shadow: 0 0 20px #82DBFA;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`
const Button1 = styled.button`
  width: 20%;
  font-size: 1.6rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  background: #DAA520;
  color: white;
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
const Span1 = styled.span`
  text-decoration: underline;
  font-weight: 600;
`

export default About
