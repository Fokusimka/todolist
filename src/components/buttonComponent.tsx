import React from 'react';
import styled from 'styled-components';

const Button = styled.button<{ $isDarkTheme?: boolean }>`
  background: ${props => props.$isDarkTheme ? "bisque" : "black"};
  color: ${props => props.$isDarkTheme ? "black" : "bisque"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid bisque;
  border-radius: 5px;
  cursor: pointer;
`;

interface buttonProps {
  title?: string
  primary?: boolean
  onClick: () => void
  isDarkTheme: boolean
}

const ButtonComponent = ({ title, primary, onClick, isDarkTheme }: buttonProps) => {
  return (
    <Button className='btn' onClick={onClick} $isDarkTheme={isDarkTheme} >{title || "Button"}</Button>
  );
}

export default ButtonComponent;
