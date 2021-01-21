import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    height: calc(100vh - 6rem);
    position: relative;
`

export const ImageContainer = styled(motion.div)`
    width: 42vw;
    height: 60vh;
    background-color: orangered;
    position: absolute;
`

export const Img = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Title = styled.h1`
    font-size: 12rem;
    font-weight: 600;
    color: ${props => props.theme.colors.white};
    z-index: 100;
    width: 100%;
    letter-spacing: 0.4rem;
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    margin-left: 2rem;
    width: 95%;

    span {
        position: absolute;
        top: 100%;
        right: 0%;
    }
`

export const Subtitle = styled.p`
    font-size: 2rem;
    font-weight: 300;
    color: ${props => props.theme.colors.white};
    z-index: 100;
    align-items: center;
    position: absolute;
    top: 6rem;
    left: 6rem;
    width: 40rem;
    padding: 8rem 2rem;
`

export const ButtonContainer = styled.div`
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
`
