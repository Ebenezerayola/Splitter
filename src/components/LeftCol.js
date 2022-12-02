import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Input } from './util/Input'
import TipPercentage from './util/TipPercentage'
import { BiDollar, BiUser } from "react-icons/bi";

const LeftCol = ({handleBill, handleSelectedTip, onReset, reset}) => {
  const [amount, setAmount] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);
  const [err, setErr] = useState('');
  const handleNumberOfPeople = (value) => {
    if (!value || value.toString() === '0') setErr(`Can't be 0`);
    else setErr('');
    setPeople(value);
  }
  useEffect(() => {
    if (reset) {
      setAmount(0);
      setPeople(1);
      setErr(''); // To clear out any pending error with number of people when I reset
      setTip(0);
    }
    const tipAmount = !amount || amount === 0 || people === 0 ? 0 : (tip/100 * amount)/people;
    if (!people || people === 0) {
      handleBill('0.00');
    } else handleBill(((amount/people) + tipAmount).toFixed(2))
    if (tip !== 0) handleSelectedTip(tipAmount.toFixed(2));
    else handleSelectedTip('0.00');
    onReset(false);
  }, [amount, handleBill, handleSelectedTip, people, tip, reset, onReset])
  return (
    <Container>
        <Input 
          label='Bill' 
          placeholder='Enter amount' 
          InputIcon={<BiDollar size={20}/>} 
          bottom='24px'
          defaultValue={amount}
          onInput={(e) => setAmount(e)}
        />
        <TipPercentage defaultValue={tip} onSelectTip={(e) => setTip(e)}/>
        <Input 
          label='Number of People' 
          placeholder='Number of People' 
          InputIcon={<BiUser size={20}/>} 
          bottom='24px'
          defaultValue= {people}
          ErrMsg={err}
          onInput={e => handleNumberOfPeople(Number(e))}
          inputException={'.'}
        />
    </Container>
  )
}

export default LeftCol

const Container = styled.div `
  display: grid;
  gap: clamp(2rem, 4vw, 3.5rem);
  width: 50%;
  /* overflow-x: hidden; */

  @media (min-width:0px) and (max-width: 600px){
    width: 100% ;
    margin-bottom: 2rem ;
  }
`