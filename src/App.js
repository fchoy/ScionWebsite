import React, { useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import Break from './Components/Break'
import Footer from './Components/Footer'
import Header from './Components/Header'
import History from './Components/History'
import Motorsports from './Components/Motorsports'
import Vehicles from './Components/Vehicles'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

/*const Container = styled.div`
  overflow-x : hidden;
`;*/

const App = () => {

  /*const [historyButtonPressed, setHistoryButtonPressed] = useState(false);
  const [vehiclesButtonPressed, setvehiclesButtonPressed] = useState(false);
  const [motorsportsButtonPressed, setmotorsportsButtonPressed] = useState(false);

  const historyRef = useRef(null);
  const vehicleRef = useRef(null);
  const motorsportsRef = useRef(null);

  useEffect(() => {
    if(historyButtonPressed === true && historyRef.current){
      console.log("History Button Pressed!");
      historyRef.current.focus();
      setvehiclesButtonPressed(false);
      setmotorsportsButtonPressed(false);
    }
    else if(vehiclesButtonPressed === true && vehicleRef.current){
      vehicleRef.current.focus();
      setHistoryButtonPressed(false);
      setmotorsportsButtonPressed(false);
    }
    else if(motorsportsButtonPressed === true && motorsportsRef.current){
      motorsportsRef.current.focus();
      setHistoryButtonPressed(false);
      setvehiclesButtonPressed(false);
    }

  }, [historyButtonPressed, vehiclesButtonPressed, motorsportsButtonPressed]);*/
 


  return (
    /*<Container>
      <Header setHistoryButtonPressed={setHistoryButtonPressed} setvehiclesButtonPressed={setvehiclesButtonPressed} setmotorsportsButtonPressed={setmotorsportsButtonPressed}/>
      <Break/>
      <History forwardref={historyRef}/>
      <Break/>
      <Vehicles forwardref={vehicleRef}/>
      <Break/>
      <Motorsports forwardref={motorsportsRef}/>
      <Break/>
      <Footer/>
    </Container>*/
    <Login/>
    //<Signup/>
  )
}

export default App