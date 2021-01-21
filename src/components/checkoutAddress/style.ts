import styled, { css } from 'styled-components'

const Scroll = css`
    padding-right: 3rem;

    /* width */
    ::-webkit-scrollbar {
        width: 3px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0.5rem grey;
        border-radius: 1rem;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.primary};
        border-radius: 1rem;
    }
`

export const AddressesContainer = styled.div`
    max-height: 50rem;
    overflow-y: auto;

    ${Scroll};
`

export const AddressContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem;
    border-radius: 3px;

    &:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.colors.greyLight4};
    }
`

export const AddressItem = styled.div`
    margin-right: 6rem;
    width: 30%;

    p {
        font-size: 1.4rem;
        padding: 0.2rem 0;
        font-family: sans-serif;
    }
`

interface CheckProps {
    isChecked: boolean
}

export const Check = styled.span<CheckProps>`
    display: inline-block;
    border: 0.4rem solid ${props => props.theme.colors.primary};
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-left: 1rem;
    position: relative;
    cursor: pointer;
    transition: all 0.2s;

    margin-right: 4rem;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        width: 1.3rem;
        height: 1.3rem;
        transition: all 0.2s;

        ${props =>
            props.isChecked &&
            `background-color: ${props.theme.colors.primary};`}
    }

    &:hover {
        transform: scale(1.05);
    }
`

export const NoAddresses = styled.p`
    font-size: 2rem;
    margin: 2rem auto;
    display: inline-block;
`

export const ButtonsContainer = styled.div`
    margin-top: 4rem;
    width: 40%;
    float: right;
`
