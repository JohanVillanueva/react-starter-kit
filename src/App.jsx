import React from 'react'
import styled from 'styled-components'

import reactLogo from './assets/imgs/react.png'

const StyledTitle = styled.h1`
  text-align: center;
  margin: 20px;
`
const App = () => {
  return (
    <main>
      <img src={reactLogo} alt='React Logo' />
      <StyledTitle>👋 Happy hacking!</StyledTitle>
    </main>
  )
}

export default App
