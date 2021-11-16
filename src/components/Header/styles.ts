import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem; //0 16px 160px

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: var(--title);
        background: #019990;
        border: 0;
        border-radius: 0.25rem;
        padding: 0.5rem 1.75rem;
        height: 3rem;
        transition: 0.3s all;

        &:hover {
            filter: brightness(0.8);
            filter: sepia(0.3);
            transform: scale(1.01);
        }
    }
`