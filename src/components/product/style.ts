import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${props => props.theme.colors.white};
    border-radius: 3px;
    box-shadow: 1rem 1rem 1.5rem rgba(0, 0, 0, 0.2);
    text-align: center;
    overflow: hidden;
    transition: all .2s;

    &:hover {
        transform: scale(1.05)
    }
`

interface ImageContainerProps {
    imageUrl: string
}

export const ImageContainer = styled.div<ImageContainerProps>`
    height: 30rem;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
`

export const Content = styled.div`
    color: ${props => props.theme.colors.greyDark1};
    padding: 2rem;
`

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: all .2s;

    &:hover {
        transform: scale(1.05)
    }
`

export const Price = styled.p`
    font-size: 1.6rem;
    font-weight: 300;
    margin-top: 1.5rem;
    font-family: sans-serif;
`
