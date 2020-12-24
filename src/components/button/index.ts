import styled, { DefaultTheme, ThemedStyledFunction } from 'styled-components'

const Button = styled.button`
    margin-top: 2rem;
    display: block;
    width: 100%;
    padding: 1.6rem 0;
    border: none;
    outline: none;
    background-color: #00c2a8;
    color: ${props => props.theme.colors.white};
    font-size: 1.6rem;
    border-radius: 3px;
    cursor: pointer;
    transition: all 1s;
    --webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: all .2s;

    &:hover {
        transform: translateY(-.5rem)
    }

    &:active {
        transform: translateY(0)
    }
`

export default Button
