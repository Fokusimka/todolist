import React from 'react'
import styled from 'styled-components';

    const Block = styled.div`
        display: flex;
        flex-direction: column;
    `
    const Span = styled.span`
        padding-left: 20px
    `

    const Label = styled.label`
        cursor: pointer
    `

    interface radioBoxProps {
        value: string;
        setValue: (e: any) => void
    }

const RadioBoxComponent = ({ value, setValue }: radioBoxProps) => {

    
   
    function chengeValue(e: any) {
       setValue(e.target.value);
    }

    return (
        <Block>
            <Span>Показать</Span>
                <Label>
                    <input 
                        type="radio" 
                        name="radio" 
                        value="1"
                        defaultChecked
                        onChange={(e) => chengeValue(e)} 
                    />
                    все
                </Label>

                <Label>
                    <input
                        type="radio"
                        name="radio"
                        value="2"
                        onChange={(e) => chengeValue(e)}
                    />
                    выполненные
                </Label>

                <Label>
                    <input
                        type="radio"
                        name="radio"
                        value="3"
                        onChange={(e) => chengeValue(e)}
                    />
                    невыполненные
                </Label>
            <Span> задачи</Span>
        </Block>
    )
}

export default RadioBoxComponent