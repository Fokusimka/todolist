import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.textarea<{ $isDarkTheme: boolean }>`
    background-color: ${props => props.$isDarkTheme ? 'black' : 'bisque' } ;
    color: ${props => props.$isDarkTheme ? 'white' : 'black'};
    border: 1px grey solid;
    border-radius: 10px;
    padding: 2px 5px;
    margin: 10px;
    min-height: 50px;
    max-height: 150px;
    min-width: 300px;
    max-width: 600px;

`;

const Span = styled.span<{ $isDarkTheme: boolean }>`
  color: ${props => props.$isDarkTheme ? 'white' : 'black'}
`


interface InputProps {
    text: string,
    setText: (state: string) => void
    isDarkTheme: boolean
}




const InputComponent = ({ text, setText, isDarkTheme }: InputProps ) => {
  return (
    <Block>
      <Span $isDarkTheme={isDarkTheme}>Добавить задачу: </Span>
      <Input 
          placeholder='Введите текст задачи'
          onChange={(e: any) => setText(e.target.value)}
          $isDarkTheme={isDarkTheme}
      >
      </Input>
    </Block>
  );
}

export default InputComponent;
