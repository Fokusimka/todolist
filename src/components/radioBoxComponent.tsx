import React from 'react'
import styled from 'styled-components';

    const Block = styled.div<{ $isDarkTheme: boolean }>`
        display: flex;
        flex-direction: column;
        color: ${props => props.$isDarkTheme ? 'white' : 'black'};
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
        isDarkTheme: boolean
    }

const RadioBoxComponent = ({ value, setValue, isDarkTheme }: radioBoxProps) => {    
   
    function chengeValue(e: any) {
       setValue(e.target.value);
    }

    return (
        <Block $isDarkTheme={isDarkTheme}>
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