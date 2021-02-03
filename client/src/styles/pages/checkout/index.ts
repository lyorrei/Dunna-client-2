import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

interface PageContainerProps {
    imageUrl: string
}

export const PageContainer = styled(motion.div)<PageContainerProps>`
    min-height: calc(100vh - 6rem);
    position: relative;
    padding-top: 6rem;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${props => props.imageUrl});
        background-size: cover;
        background-position: center;
        /* filter: brightness(60%); */
    }
`

export const Box = styled(motion.div)`
    padding: 4rem;
    border-radius: 1.5rem;
    position: absolute;
    box-shadow: 1rem 1.5rem 4rem rgba(0, 0, 0, 0.2);
`

export const EmptyCart = styled.p`
    font-size: 3rem;
    color: ${props => props.theme.colors.greyDark1};
    font-weight: 300;
`

export const Container = styled(Box)`
    background-color: ${props => props.theme.colors.white};
    width: 35%;
    top: 5%;
    left: 10%;

`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;

    h2 {
        font-size: 4rem;
        font-weight: 300;
        color: ${props => props.theme.colors.greyDark1};
    }

    svg {
        width: 3rem;
        height: 3rem;
        fill: ${props => props.theme.colors.greyDark1};
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            transform: scale(1.2);
        }
    }
`
