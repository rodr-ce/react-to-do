import React from 'react'
import { StyledUl, StyledLi, StyledBtn, StyledDelete, StyledReady } from './ToDoListStyles'

const ToDoList = () => {
  return (
    <StyledUl>
        <StyledLi>Hacer una To Do List con React
          <div>
          <StyledReady> Hecho </StyledReady>
          <StyledDelete> Eliminar </StyledDelete>
          </div>
        </StyledLi>
    </StyledUl>
  )
}

export default ToDoList