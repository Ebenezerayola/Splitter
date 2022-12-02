import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../styles';

const TipPercentage = ({onSelectTip, defaultValue}) => {
  const tipsPercentages = [5, 10, 15, 25, 50];
  const [activeTip, setActiveTip] = useState(0);
  const updateTip = (value) => {
    onSelectTip(value);
    setActiveTip(value);
  };
  useEffect(() => {
    if (defaultValue === 0) {
      onSelectTip(0);
      setActiveTip(0)
    }
  }, [defaultValue, onSelectTip])
  return (
    <Container>
      <Label>Selected Tip %</Label>
      <TipAmount>
          {tipsPercentages.map((tip, index) => {
            return (
              <Button
                className={tip === activeTip ? 'active' : ''}
                key={index}
                onClick={() => updateTip(tip)}
              >
                {tip}%
              </Button>
            );
          })}
          <Input
            placeholder='Custom'
            type='number'
            onChange={(e) => {
              updateTip(e.target.value);
            }}
          />
      </TipAmount>
    </Container>
  )
}

export default TipPercentage

const Container = styled.div`
  display: grid;
  gap: .5rem
`

const TipAmount = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  row-gap: 10px;
  column-gap: 10px;
  padding-top: 8px;
  @media (min-width:0px) and (max-width: 600px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const Button = styled.button`
    background: ${colors.neutralVeryDarkCyan};
    color: white;
    border: 0;
    border-radius: 6px;
    text-align: center;
    padding: 4px 0;

  &.active {
    background: ${colors.neutralLightGrayishCyan};
    color: ${colors.neutralVeryDarkCyan};
  }

  &:hover {
    background: ${colors.neutralLightGrayishCyan};
    color: ${colors.neutralVeryDarkCyan};
  }
`

const Input = styled.input`
  background: ${colors.neutralVeryLightGrayishCyan};
  color: ${colors.neutralGrayishCyan};
  border: 0;
  border-radius: 6px;
  text-align: end;
  width: 100%;
  font-family: 'Space Mono', monospace;
  font-size: 20px;
  padding-right: 15px;
  &:focus{
    border: 2px ${colors.primaryStrongCyan};
  }
`
const Label = styled.p `
  padding-bottom: 4px;
  font-size: 16px;
`