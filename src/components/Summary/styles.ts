import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    margin-top: -8rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
        }

        strong {
            font-size: 2rem;
            font-weight: 400;
            line-height: 3rem;
        }
    }

    .total-style {
        background: var(--green-transp);
        font-weight: 600;
        strong {
            font-weight: 600;
            line-height: 3rem;
            font-size: 2rem;
        }
    }
`