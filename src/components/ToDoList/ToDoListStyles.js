import styled from "styled-components";

export const StyledUl = styled.ul`
    background: var(--dark-color3);
    width: 100%;
    padding: 20px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5em ;
`

export const StyledLi = styled.li`
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
`

export const StyledDelete = styled(StyledBtn)`
    background-color: var(--red);
`

export const StyledReady = styled(StyledBtn)`
    background-color: var(--green);
`