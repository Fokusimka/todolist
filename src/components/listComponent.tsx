import React from 'react';
import styled from 'styled-components';
import ButtonComponent from './buttonComponent';

interface listProps {
    children: any,
    onClickDelete: () => void,
    onCheck: () => void,
    isChecked: boolean
}

    const Span = styled.span`
        max-width: 70%;
        overflow-wrap: break-word;
    `

const ListComponent = ({ children, onClickDelete, onCheck, isChecked }: listProps) => {

    const Label = styled.label`
    background-color: ${isChecked ? 'rgba(6, 155, 26, 0.479)' : '' };
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    border: 1px grey solid;
    border-top: 0px;
    cursor: pointer;
`

  return (
        <Label>
            <input type="checkbox" name="cb" defaultChecked={isChecked} onChange={onCheck} />
            <Span>{children}</Span>
            <ButtonComponent onClick={onClickDelete} title="Удалить" primary />
        </Label>
  );
}

export default ListComponent;
