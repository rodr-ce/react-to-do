import React, { useState } from 'react'
import { StyledForm, StyledInput, StyledSendBtn, StyledUl, StyledLi, StyledDeleteBtn, StyledDelete, StyledReady } from './FormStyles'
import { MdDelete, MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'

let nextId = 0;

const Form = () => {
  const [tasks, setTask] = useState([])

  const saveTask = e => {
    e.preventDefault()
    let inputValue = e.target.elements.input.value
    inputValue !== "" ? setTask([...tasks, { id: nextId, name: inputValue, completed: false }]) : ""
    nextId++
    e.target.reset()
  }

  const clearAllTasks = () => {
    setTask([])
  }

  const deleteThisTask = (index) => {
    setTask(
      tasks.filter(e => e.id !== index)
    )
  }

  const markTaskAsDone = (index) => {
    const newTasks = tasks.map((e) => {
      if (e.id === index) {
        return { ...e, completed: !e.completed }
      } else {
        return e
      }
    });
    setTask(newTasks)
  }

  const taskStyles = {
    completed: {
      textDecoration: "line-through",
      color: "var(--dark-color1)"
    },
    notCompleted: {}
  }

  return (
    <>
      <StyledForm onSubmit={saveTask}>
        <StyledInput name="input" placeholder='¿Qué estás planeando?' />
        <StyledSendBtn> Guardar </StyledSendBtn>
      </StyledForm>
      <StyledUl>
        {tasks.map(task => {
          return <StyledLi key={task.id} style={task.completed ? taskStyles.completed : taskStyles.notCompleted}>{task.name}
            <div>
              <StyledReady onClick={() => markTaskAsDone(task.id)} > <MdCheckBox /> </StyledReady>
              <StyledDelete onClick={() => deleteThisTask(task.id)} > <MdDelete /> </StyledDelete>
            </div>
          </StyledLi>
        })}
      </StyledUl>
      <StyledDeleteBtn onClick={clearAllTasks}> Borrar todo </StyledDeleteBtn>
    </>
  )
}

export default Form