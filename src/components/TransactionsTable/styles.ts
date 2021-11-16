import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 1.8rem auto 0;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--body);
            font-weight: 400;
            text-align: left;
            padding: 1rem 2rem;
            line-height: 1.5rem;
        }
        
        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--body);
        }

        // add border-radius only on first and last td:
        td:first-child {
            border-top-left-radius: 0.25rem; 
            border-bottom-left-radius: 0.25rem;

            // text color for the first td
            color: var(--title);
        }

        td:last-child {
            border-bottom-right-radius: 0.25rem; 
            border-top-right-radius: 0.25rem; 
        }

        .withdraw {
            color: var(--red);
            font-weight: 400;
        }

        .deposit {
            color: var(--green);
            font-weight: 400;
        }
    }
`

