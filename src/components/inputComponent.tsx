import React, { useState } from 'react';
import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.textarea`
    background-color: bisque;
    border: 1px grey solid;
    border-radius: 10px;
    padding: 2px 5px;
    margin: 10px;
    min-height: 50px;
    max-height: 150px;
    min-width: 300px;
    max-width: 600px;

`;

interface InputProps {
    text: string,
    setText: (state: string) => void
}




const InputComponent = ({ text, setText }: InputProps ) => {
  return (
    <Block>
      <span>Добавить задачу: </span>
      <Input 
          placeholder='Введите текст задачи'
          onChange={(e: any) => setText(e.target.value)}
      >
      </Input>
    </Block>
  );
}

export default InputComponent;
