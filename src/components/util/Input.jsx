import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../styles'

export const Input = ({label, placeholder, InputIcon, defaultValue, ErrMsg, onInput, inputException = []} ) => {
 
  const [value, setValue] = useState(defaultValue || 0);
  const handleInput = (e) => {
    if (['E', 'e'].includes(String(e.key)) || inputException.includes(String(e.key))) {
      e.preventDefault();
    }
  };
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const handleChange = (value) => {
    setValue(value);
    onInput(value);
  }
  return (
    <InputContainer>
        <LabelWrap>
          <Label>{label}</Label>
          <Error>{ErrMsg}</Error>
        </LabelWrap>
        <InputField>
          <Icon>{InputIcon}</Icon>
          <CustomInput
            type='number'
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            onKeyPress={(e) => handleInput(e)}
            placeholder={placeholder}
            className={ ErrMsg ? 'error' : '' }
          />
        </InputField>
    </InputContainer>
  )
}


const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ bottom }) => bottom || '0'};
  margin-top: ${({ top }) => top || '0'};

`;
const InputField = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  align-items: center;
`;

const CustomInput = styled.input`
  text-align: end;
  background: ${colors.neutralVeryLightGrayishCyan};
  width: 100%;
  border: none;
  font-family: 'Space Mono', monospace;
  color: ${colors.neutralGrayishCyan};
  font-size: 24px;
  border-radius: 8px;
  margin-right: 0;
  padding: 8px;
  :focus {
    border: 2px solid ${colors.primaryStrongCyan};
  }
  &.error {
    border: 2px solid red !important;
    :focus {
      border: 2px solid red !important;
    }
  }
`;
const Icon = styled.i`
  position: absolute;
  margin-left: 10px;
`;
 const Error = styled.p`
  color: red;
`
const LabelWrap = styled.div`
  display: flex ;
  flex-direction: row ;
  justify-content: space-between ;
`
const Label = styled.p`
  padding-bottom: 4px;
  font-size: 16px;
`