import React from 'react'
import styled from 'styled-components'
import Break from './Components/Break'
import Footer from './Components/Footer'
import Header from './Components/Header'
import History from './Components/History'
import Motorsports from './Components/Motorsports'
import Vehicles from './Components/Vehicles'

const Container = styled.div`
  overflow-x : hidden;
`;

const App = () => {
  return (
    <Container>
      <Header/>
      <Break/>
      <History/>
      <Break/>
      <Vehicles/>
      <Break/>
      <Motorsports/>
      <Break/>
      <Footer/>
    </Container>
  )
}

export default App