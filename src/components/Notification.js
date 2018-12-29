import React from 'react'
import styled from 'styled-components'

const Notification = (props) => (
  <Div1>
    <P1>
      We will be closed January 1st! Have a wonderful New Year's!
    </P1>
  </Div1>
)

const Div1 = styled.div`
  background: #DAA520;
  color: white;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 400px) {
    padding: 1rem;
  }
`
const P1 = styled.div`
  font-size: 2rem;
  line-height: 1.5;
`

export default Notification
