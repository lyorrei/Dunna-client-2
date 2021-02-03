import styled from 'styled-components'

export const AddressDetails = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    div {
        display: grid;
        grid-gap: 1rem;
        align-items: center;
        align-content: center;
        justify-content: stretch;

        p {
            font-size: 1.6rem;
            font-family: sans-serif;
            line-height: 1.4;

            display: grid;
            grid-template-columns: 5rem max-content;
            grid-gap: 4rem;

            span {
                font-weight: 600;
                margin-right: 1rem;
                /* min-width: 20%; */
                display: inline-block;
            }
        }
    }
`
