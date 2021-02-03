import styled, { css } from 'styled-components'
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
    font-size: 4.5rem;
    font-weight: 300;
    color: ${props => props.theme.colors.greyDark1};
    margin-bottom: 5rem;
`

export const Obs = styled.p`
    font-size: 1.6rem;
    color: ${props => props.theme.colors.greyDark3};
    margin-bottom: 4rem;

    span {
        color: ${props => props.theme.colors.greyDark2};
        font-weight: 600;
    }
`

export const OrdersContainer = styled.div`
    display: grid;
    grid-gap: 2rem;
`

export const OrderBox = styled.div`
    border: 1px solid ${props => props.theme.colors.greyDark3};
`

export const OrderHeader = styled.div`
    background-color: ${props => props.theme.colors.greyLight3};
    padding: 2rem;
    display: flex;
`

const HeaderElement = styled.p`
    color: ${props => props.theme.colors.greyDark2};
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;

    font-family: sans-serif;
    letter-spacing: 0.1rem;

    span {
        margin-bottom: 0.8rem;
        text-transform: uppercase;
        color: ${props => props.theme.colors.greyDark1};
    }
`

export const DateParagraph = styled(HeaderElement)`
    margin-right: 4rem;
    flex: 0 0 14%;
`

export const Total = styled(HeaderElement)`
    margin-right: auto;
`

export const UntilDate = styled(HeaderElement)``

export const OrderBody = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
`

export const ItensContainer = styled.div`
    flex: 0 0 50%;
    margin-right: 2rem;
`

export const NoOrders = styled.p`
    font-size: 2.4rem;
    color: ${props => props.theme.colors.greyDark2};
    text-align: center;
    margin: 4rem 0;
`
