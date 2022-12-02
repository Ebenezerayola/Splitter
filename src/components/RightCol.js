import React from 'react'
import styled from 'styled-components'
import { colors } from './styles'

const RightCol = ({amount, tip, onReset}) => {
  return (
    <AmountCard>
        <Group>
            <Row>
                <Label className='amount-label'>
                    <p className='title'>Tip Amount</p>
                    <p className='unit'>/ person</p>
                </Label>
                <TipAmount >${tip}</TipAmount>
            </Row>
            <Row>
                <Label className='amoutlabel'>
                    <p className='title'>Total</p>
                    <p className='unit'>/ person</p>
                </Label>
                <TipAmount >${amount}</TipAmount>
            </Row>
        </Group>
        <Btn onClick={() => onReset(true) }>Reset</Btn>                
    </AmountCard>
  )
}

export default RightCol

const AmountCard = styled.div `
    background-color: ${colors.neutralVeryDarkCyan};
    padding: clamp(2rem, 5vw, 2rem) ;
    border-radius: 12px ;
    display: flex ;
    flex-direction: column ;
    justify-content:space-between ;
    width: 50%;
    margin-left: 2rem ;
    overflow-wrap:break-word ;
   

     @media (min-width:0px) and (max-width: 600px){
    width: 100% ;
    margin: 0;
  }
    
`
const Group = styled.div `
    display: grid ;
    gap: clamp(2rem, 5vw, 4rem);
    width: 100% ;
    margin-bottom: 2rem;
`
const Row = styled.div`
    display: flex;
    gap: clamp(1rem, 5vw, 4rem);
    justify-content: space-between;
    align-items: center ;
    text-align: left ;
    height: auto ;
    overflow-x: hidden ;
    width: 100% ;
 
    

  .title{
    color: whitesmoke ;
    font-size: 1rem ;
  }
  .unit{
    color: whitesmoke ;
    font-size: .8rem ;
  }
  
`
const Btn = styled.button`
  background: ${colors.primaryStrongCyan};
  color: ${colors.neutralVeryDarkCyan};
  width: 100%;
  text-transform: uppercase;
  padding: 4px 0;
  font-size: 20px;
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  justify-self: ${({ align }) => align || 'auto'};
  justify-self: flex-end;
  cursor: pointer;

  &:hover {
    opacity: 70%;
  }
`;

const TipAmount = styled.div `
/* width: 50% ; */
  font-size: 20px;
  color: wheat ;
  font-weight: bold;
  flex-wrap: wrap ;
  /* width: 70% ; */
  overflow-x: auto ;
  
  @media (min-width:0px) and (max-width: 600px){
    /* width: 50% ; */
    flex-wrap:wrap ;
    margin: 0;
    font-size: 15px;
  }
`

const Label = styled.div`
    display: grid;  
`

