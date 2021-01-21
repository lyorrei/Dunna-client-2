import styled from 'styled-components'
import { motion } from 'framer-motion'

export const PageContainer = styled(motion.div)`
    background-color: ${props => props.theme.colors.white};
    min-height: calc(100vh - 6rem);
`

export const Container = styled(motion.div)`
    width: 60%;
    padding: 4rem 0;
    margin: 0 auto;
`

export const Title = styled.h2`
    font-size: 4rem;
    font-weight: 300;
    color: ${props => props.theme.colors.greyDark1};
    margin-bottom: 4rem;
`

export const SubContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    grid-template-rows: 30rem;
    grid-auto-rows: 30rem;
    grid-gap: 2rem;
`

export const AddressBox = styled.div`
    border: 1px solid ${props => props.theme.colors.greyDark3};
    padding: 4rem;
    position: relative;

    p {
        &:first-child {
            font-weight: 700;
            font-size: 1.8rem;
        }

        color: ${props => props.theme.colors.greyDark1};
        font-size: 1.6rem;
        padding: 0.5rem 0;

        font-family: sans-serif;
    }
`

export const NewAddressBox = styled.div`
    border-style: dashed;
    border-width: 2px;
    border-color: ${props => props.theme.colors.greyDark3};

    display: grid;
    grid-template-rows: repeat(2, min-content);
    justify-content: center;
    align-items: center;
    justify-items: center;
    justify-content: center;
    align-content: center;
    cursor: pointer;

    svg {
        width: 12rem;
        height: 12rem;
        fill: ${props => props.theme.colors.greyLight4};
    }

    p {
        font-size: 2.4rem;
    }

    /* border: none; */

    /* background-image: linear-gradient(
            to right,
            black 33%,
            rgba(204, 12, 0, 0) 0%
        ),
        linear-gradient(black 33%, rgba(204, 12, 0, 0) 0%),
        linear-gradient(to right, black 33%, rgba(204, 12, 0, 0) 0%),
        linear-gradient(black 33%, rgba(204, 12, 0, 0) 0%);
    background-position: top, right, bottom, left;
    background-size: 15px 1px, 1px 15px, 15px 1px, 1px 15px;
    background-repeat: repeat-x, repeat-y, repeat-x, repeat-y; */
`
