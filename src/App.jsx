import { useState } from 'react'
import Wrapper from './components/Wrapper/Wrapper'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import { GlobalStyle } from './styles/GlobalStyles'
import ToDoList from './components/ToDoList/ToDoList'
import DeleteList from './components/DeleteComponent/DeleteList'

function App() {
  return (
    <>
      <Wrapper>
        <Header/>
        <Form/>
        <ToDoList/>
        <DeleteList/>
      </Wrapper>
      <GlobalStyle />
    </>
  )
}

export default App