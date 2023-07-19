import React from 'react';
import styled from 'styled-components';
import ButtonComponent from './buttonComponent';

interface listProps {
    children: any
    onClickDelete: () => void
    onCheck: () => void
    isChecked: boolean
    isDarkTheme: boolean
}

    const Span = styled.span`
        max-width: 70%;
        overflow-wrap: break-word;
    `

    const Label = styled.label<{ $isChecked: boolean, $isDarkTheme: boolean }>`
    background-color: ${props => props.$isChecked ? 'rgba(6, 155, 26, 0.479)' : '' };
    color: ${props => props.$isDarkTheme ? 'white' : 'black' };
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    border: 1px grey solid;
    border-top: 0px;
    cursor: pointer;
`

const ListComponent = ({ children, onClickDelete, onCheck, isChecked, isDarkTheme }: listProps) => {

  return (
        <Label $isChecked={isChecked} $isDarkTheme={isDarkTheme}>
            <input type="checkbox" name="cb" defaultChecked={isChecked} onChange={onCheck} />
            <Span>{children}</Span>
            <ButtonComponent onClick={onClickDelete} title="Удалить" isDarkTheme={isDarkTheme} />
        </Label>
  );
}

export default ListComponent;
