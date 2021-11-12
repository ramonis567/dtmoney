import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg: #131313;
        --blue: #004958;
        --green: #28FF64;
        --red: #FF0000;
        --shape: #8E8A8A;
        --title: #FFFFFF;
        --body: #D1B8B8;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: white; // retirar ------------
    }

    // tamanhos de fonte
    // 16px (Desktop) = 1 rem
    html {
        @media(max-width: 1080px){
            font-size: 93.75%;
        }

        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--bg);
        -webkit-font-smoothing: antialised;
    }

    button {
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    body, button, input, textarea {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
`