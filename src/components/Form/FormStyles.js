import styled from "styled-components";

export const StyledForm = styled.form`
    background: var(--dark-color3);
    width: 100%;
    height: 50px;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    border-radius: 0.5em;
`
export const StyledLabel = styled.label`
    color:white;
`

export const StyledInput = styled.input`
    background: var(--dark-color3);
    width: 500px;
    border: 0;
    font-size: 1.1em;
    color: var(--text-color-dark);
    text-align: center;
    &:focus {
        outline: none;
    }
`

export const StyledBtn = styled.button`
    background: var(--contrast-color1);
    border-radius: 0.5em;
    font-weight: bold;
    color: var(--text-color-dark);
`