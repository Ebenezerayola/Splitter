import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import LeftCol from './components/LeftCol';
import RightCol from './components/RightCol';
import Logo from './components/util/Logo';


function App() {
  const [amount, setAmount] = useState('0.00');
  const [tip, setTip] = useState('0.00');
  const [reset, setReset] = useState(false);

  return (
    <div className="App">
      <Container>
        <Logo/>
        <Card>
          <LeftCol
            handleBill = {e => setAmount(e.toString())}
            handleSelectedTip = {e => setTip(e)}
            reset = { reset }
            onReset = {e => setReset(e)}
          />
          <RightCol onReset={(e) => setReset(e)} tip={tip} amount={amount} />
        </Card>
      </Container>
      
    </div>
  );
}

export default App;

const Container = styled.div `
  display: flex;
  flex-direction: column ;
  place-items: center ;
  /* gap: 2rem, 4rem; */
`

const Card = styled.div `
 padding: clamp(2rem, 5vw, 4rem) ;
 background-color: white ;
 border-radius: 12px;
 box-shadow: 1px 10px 15px rgba(0,0,0,0.1) ;
 display: flex;
 /* grid-auto-flow: column ; */
 flex-direction: row ;
 /* gap: clamp(2rem, 5vw, 4rem); */
 justify-content:space-between ;
 margin-bottom: 2rem;
 max-width: 70%;

 @media (min-width:0px) and (max-width: 600px){
    display: flex ;
    flex-direction: column ;
    margin-bottom: 0;
    max-width: 100% ;
    border-bottom-right-radius: 0 ;
    border-bottom-left-radius: 0;
  }
  
  
`
