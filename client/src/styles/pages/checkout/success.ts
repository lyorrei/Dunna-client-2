import { motion } from 'framer-motion'
import styled from 'styled-components'

export const PageContainer = styled(motion.div)`
    background-color: ${props => props.theme.colors.white};
    min-height: calc(100vh - 6rem);
`

export const Container = styled(motion.div)`
    width: 40%;
    padding: 4rem 0;
    margin: 0 auto;
`

export const Title = styled.h2`
    font-size: 4rem;
    font-weight: 300;
    color: ${props => props.theme.colors.greyDark1};
    margin-bottom: 5rem;
`

export const SubTitle = styled.h3`
    font-size: 2rem;
    color: ${props => props.theme.colors.primaryDark};
    margin-bottom: 3rem;
    margin-top: 4rem;
`

export const Total = styled.p`
    font-size: 1.8rem;
    font-family: sans-serif;
    margin-top: 4rem;
    color: ${props => props.theme.colors.greyDark1};

    span {
        margin-right: 2rem;
        font-size: 2rem;
        font-family: 'Raleway', sans-serif;
        color: ${props => props.theme.colors.primaryDark};
        font-weight: 700;
    }
`



export const ButtonContainer = styled.div`
    margin-top: 2rem;
    width: 30%;
    float: right;
`
