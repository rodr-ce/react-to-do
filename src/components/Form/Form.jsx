import React from 'react'
import { StyledBtn, StyledForm, StyledInput, StyledLabel } from './FormStyles'

const Form = () => {
  return (
    <StyledForm>
        <StyledInput placeholder='¿Qué estás planeando?'/>
        <StyledBtn> Agregar a la lista </StyledBtn>
    </StyledForm>
  )
}

export default Form