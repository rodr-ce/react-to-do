import React, { useState } from 'react'
import { StyledForm, StyledInput, StyledSendBtn, StyledUl, StyledLi, StyledDeleteBtn, StyledDelete, StyledReady } from './FormStyles'

const Form = () => {
  const [tasks, setTask] = useState([])

  const saveTask = e => {
    e.preventDefault()
    let inputValue = e.target.elements.input.value
    inputValue !== "" ? setTask([...tasks, inputValue]) : ""
    //setTask([...tasks, inputValue])
    e.target.reset()
  }

  const clearTasks = () => {
    setTask([])
  }

  return (
    <>
      <StyledForm onSubmit={saveTask}>
        <StyledInput name="input" placeholder='¿Qué estás planeando?' />
        <StyledSendBtn> Agregar a la lista </StyledSendBtn>
      </StyledForm>
      <StyledUl>
        {tasks.map(element => {
        return <StyledLi key={element}>{element}
        {/* <div>
          <StyledReady> Hecho </StyledReady>
          <StyledDelete> Eliminar </StyledDelete>
        </div> */}
      </StyledLi>
    })}
      </StyledUl>
      <StyledDeleteBtn onClick={clearTasks}>Borrar todo</StyledDeleteBtn>
    </>
  )
}

export default Form