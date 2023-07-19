import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import './App.css';
import ButtonComponent from './components/buttonComponent';
import InputComponent from './components/inputComponent';
import ListComponent from './components/listComponent';
import RadioBoxComponent from './components/radioBoxComponent';
import { addTask, removeTask, setChecked } from './organisms/actions';

const Container = styled.div<{ $isDarkTheme: boolean }>`
  background-color: ${props => props.$isDarkTheme ? 'black' : 'bisque'};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px grey solid;
`;

const Title = styled.h1<{ $isDarkTheme: boolean }>`
  color: ${props => props.$isDarkTheme ? 'white' : 'black'};
  font-size: 1.5em;
  text-align: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 70%;
  max-height: 70%;
`

const Background = styled.div<{ $isDarkTheme: boolean }>`
  background-color: ${props => props.$isDarkTheme ? 'black' : 'white'};
  width: 100vw;
  height: 100vh;
`

const ThemeSwitch = styled.div<{ $isDarkTheme: boolean}>`
  display: flex; 
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  color: ${props => props.$isDarkTheme ? 'black' : 'white'};
  background-color: ${props => props.$isDarkTheme ? 'white' : 'black'};
  width: 70px;
  height: 70px;
  padding: 5px;
  border-radius: 50%;
  text-align: center;
  align-items: center;
`

function App() {
  const dispatch = useDispatch()

  const [text, setText] = React.useState('')
  const [value, setValue] = React.useState(0)

  const [radio, setRadio] = React.useState('1');

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  function addTaskToList() {
    //Счётчик для задания id каждой новой задаче в списке
    setValue(value + 1)
    dispatch(addTask(text, value))
  }

  return (
    <Background $isDarkTheme={isDarkTheme}>
      <ThemeSwitch 
        onClick={() => setIsDarkTheme(!isDarkTheme)}
        $isDarkTheme={isDarkTheme}
      >{isDarkTheme ? 'Тёмная' : 'Светлая'} тема</ThemeSwitch>
      <MainContainer>
        <Title $isDarkTheme={isDarkTheme}>Список задач</Title>
        {/* Блок добавления задачи в список */}
        <Container $isDarkTheme={isDarkTheme} >
          <InputComponent text={text} setText={setText} isDarkTheme={isDarkTheme} />
          <ButtonComponent 
            onClick={addTaskToList}
            title="Добавить" 
            isDarkTheme={isDarkTheme}
          />
          <RadioBoxComponent value={radio} setValue={setRadio} isDarkTheme={isDarkTheme} />
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
                  isDarkTheme={isDarkTheme}
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
                    isDarkTheme={isDarkTheme}
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
                    isDarkTheme={isDarkTheme}
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
    </Background>
  );
}

export default App;
