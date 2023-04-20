import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --text-color-dark: white;
        --text-color-light: black;
        --background-light: #99AAB5;
        --background-dark: #1e2124;
        --dark-color1: #424549;
        --dark-color2: #36393e;
        --dark-color3: #282b30;
        --contrast-color1: #7289da;
        --contrast-color2: #6d79e8;
        --yellow: #F1C40F;
        --purple: #9B59B6;
        --green: #2ecc71;        
        --red: #f04747;
    }
    * {
        margin: 0;
        padding: 0;
    }
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--background-dark);
        color: var(--text-color-dark);
        text-align: center;
    }
    li {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: var(--text-color);
    }
    a:visited {
        color: var(--text-color);
    }
`;