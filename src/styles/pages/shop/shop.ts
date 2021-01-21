import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Title = styled(motion.h1)`
    text-transform: uppercase;
    color: ${props => props.theme.colors.greyDark1};
    text-align: center;
    font-size: 4rem;
    font-weight: 600;
    padding-top: 2rem;
    margin-bottom: 6rem;
`

export const Container = styled(motion.div)`
    padding: 4rem 16rem;
    background-color: ${props => props.theme.colors.white};
`

export const GridContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
`
