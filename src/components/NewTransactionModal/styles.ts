import styled from "styled-components";

export const Container = styled.form`
    h2 {
        color: var(--title);
        font-size: 1.5rem;
        margin-bottom: 1.8rem;
    }

    input {
        width: 100%;
        padding: 0 2rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        color: black;
        font-size: 1.1rem;
        font-weight: 400;

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 2rem;
        height: 4rem;
        margin-top: 1rem;
        background: var(--green);
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--title);
        text-shadow: 2px 2px 6px black;
        border-radius: 0.25rem;
        transition: 0.5s all;

        &:hover {
            filter: brightness(0.8);
            filter: sepia(0.2);
            transform: scale(1.01);
        }
    }
`

export const TransactionTypeSelector = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
`;

interface RadioBoxProps {
    isActive: boolean;
}

// passar props para elemento no styledcomponents
export const RadioBox = styled.button<RadioBoxProps>`
    // Se isActive é verdadeiro, background = #019990, se não transparent
    // operador ternário
    background: ${(props) => props.isActive ? "#019990" : 'transparent'};

    padding: 0 2rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--title);

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 1.5rem;
        width: 1.5rem;
    }

    span {
        margin-left: 1rem;
        display: inline-block;
    }

    transition: 0.4s all;

    &:hover {
        border: 1px solid #353535;
        text-shadow: 1px 1px 5px #ccccccee;
    }
`;

