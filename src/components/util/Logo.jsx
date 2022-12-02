import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles'

const Logo = () => {
  return (
    <PageTitle>
        <p>Spli</p>
        <p>Tter</p>
    </PageTitle>
  )
}

export default Logo

const PageTitle = styled.div `
   text-align: center;
  text-transform: uppercase;
  padding: 30px 0 50px 0;
  color: ${colors.neutralDarkCyan};
  line-height: 1.3;
  letter-spacing: 4px;

  p {
    font-size: 24px;
  }
`