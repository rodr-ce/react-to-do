import React from 'react'
import { StyledDiv } from './WrapperStyles'

const Wrapper = ({children}) => {
  return (
    <StyledDiv>
        {children}
    </StyledDiv>
  )
}

export default Wrapper