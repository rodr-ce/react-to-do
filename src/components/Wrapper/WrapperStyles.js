import styled from "styled-components";

export const StyledDiv = styled.div`
    max-width: 700px;
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media (max-width: 400px) {
        font-size: 0.7em
    }
`