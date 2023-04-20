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

export const StyledSendBtn = styled.button`
    background: var(--contrast-color1);
    border-radius: 0.5em;
    font-weight: bold;
    color: var(--text-color-dark);
`

export const StyledUl = styled.ul`
    background: var(--dark-color3);
    width: 100%;
    padding: 20px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 0.5em ;
`

export const StyledLi = styled.li`
    text-align: left;
    background-color: var(--dark-color2);
    border-radius: 0.5em;
    padding: 10px;
    width: 100%;
    font-size: 1.1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const StyledBtn = styled.button`
    border-radius: 0.5em;
    color: white;
    font-size: 12px;
    margin: 5px;

    @media (max-width: 400px) {
        padding: 7px;
        margin: 5px;
    }
`

export const StyledDelete = styled(StyledBtn)`
    background-color: var(--red);
`

export const StyledReady = styled(StyledBtn)`
    background-color: var(--green);
`

export const StyledDeleteBtn = styled.button`
    background: var(--red);
    border-radius: 0.5em;
    font-weight: bold;
    color: var(--text-color-dark);
`