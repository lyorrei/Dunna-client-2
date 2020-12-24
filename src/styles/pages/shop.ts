import styled from 'styled-components'

export const ClipPath = styled.div`
    background-color: ${props => props.theme.colors.greyLight4};
    clip-path: polygon(40% 0, 60% 0, 100% 15%, 100% 100%, 0 100%, 0 15%);
    z-index: -1;
    padding-bottom: 6rem;
`

export const Container = styled.div`
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 4rem;
    align-items: center;
`

export const Title = styled.h1`
    text-transform: uppercase;
    color: ${props => props.theme.colors.greyDark1};
    text-align: center;
    font-size: 4rem;
    font-weight: 300;
    padding-top: 10rem;
    margin-bottom: 6rem;
`
