import React from 'react';
import styled from 'styled-components';

const Button = styled.button<{ $primary?: boolean; }>`
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  cursor: pointer;
`;

interface buttonProps {
  title?: string
  primary?: boolean
  onClick: () => void
}

const ButtonComponent = ({ title, primary, onClick }: buttonProps) => {
  return (
    <Button className='btn' onClick={onClick} $primary={primary}>{title || "Button"}</Button>
  );
}

export default ButtonComponent;
