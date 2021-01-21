import styled from 'styled-components'
import { motion } from 'framer-motion'

export const PageContainer = styled(motion.div)`
    min-height: calc(100vh - 6rem);
    background-color: ${props => props.theme.colors.white};
`
export const Container = styled(motion.div)`
    width: 60vw;
    padding: 4rem 0;
    margin: 0 auto;
    display: grid;
    grid-gap: 4rem;
`

export const Title = styled(motion.h2)`
    font-size: 3.5rem;
    font-weight: 300;
    color: ${props => props.theme.colors.greyDark1};
`

export const Item = styled(motion.div)`
    border: 1px solid ${props => props.theme.colors.greyLight4};
    border-radius: 3px;
    display: flex;
    align-items: center;
    padding: 3rem;
    transition: all .2s;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.greyLight2};
    }

    svg {
        width: 8rem;
        height: 8rem;
        fill: ${props => props.theme.colors.primary};
        margin-right: 3rem;
    }

    h4 {
        font-size: 3rem;
        margin-bottom: 0.5rem;
        color: ${props => props.theme.colors.greyDark1};
    }

    p {
        font-size: 1.5rem;
        color: ${props => props.theme.colors.greyDark2};
    }
`
