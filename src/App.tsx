import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import './App.css';
import ButtonComponent from './components/buttonComponent';
import InputComponent from './components/inputComponent';
import ListComponent from './components/listComponent';
import RadioBoxComponent from './components/radioBoxComponent';
import { addTask, removeTask, setChecked } from './organisms/actions';

const Container = styled.div`
  background-color: bisque;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: green;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 70%;
  max-height: 70%;
`

function App() {
  const dispatch = useDispatch()

  
  const [text, setText] = React.useState('')
  const [value, setValue] = React.useState(0)

  const [radio, setRadio] = React.useState('1');

  function addTaskToList() {
    //Счётчик для задания id каждой новой задаче в списке
    setValue(value + 1)
    dispatch(addTask(text, value))
  }
  
  return (
    <MainContainer>
      <Title>Список задач</Title>
      {/* Блок добавления задачи в список */}
      <Container>
        <InputComponent text={text} setText={setText} />
        <ButtonComponent 
          onClick={addTaskToList}
          title="Добавить" 
        />
        <RadioBoxComponent value={radio} setValue={setRadio}/>
      </Container>
      {/* Блок со списком задач */}
      <>{useSelector((itemStore: any) => itemStore.map((item: any) => { 
        switch (radio) {
          case '1':
            return (
              <ListComponent 
                onClickDelete={() => dispatch(removeTask(item.id))}
                onCheck={() => dispatch(setChecked(item.id))}
                isChecked={item.isChecked}
              >
                  {item.data}
              </ListComponent>
            )
          case '2': 
            if (item.isChecked) {
              return (
                <ListComponent 
                  onClickDelete={() => dispatch(removeTask(item.id))}
                  onCheck={() => dispatch(setChecked(item.id))}
                  isChecked={item.isChecked}
                >
                    {item.data}
                </ListComponent>
              )
            } break;
          case '3': 
            if (!item.isChecked) {
              return (
                <ListComponent 
                  onClickDelete={() => dispatch(removeTask(item.id))}
                  onCheck={() => dispatch(setChecked(item.id))}
                  isChecked={item.isChecked}
                >
                    {item.data}
                </ListComponent>
              )
            } break;
          default: <></>
        }
          
        })
        )}</>
    </MainContainer>
  );
}

export default App;
