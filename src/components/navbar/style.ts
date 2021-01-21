import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    background-color: ${props => props.theme.colors.white};
    height: 6rem;
    display: flex;
    z-index: 10;
    padding: 0 3rem;

    position: fixed;
    top: 0;
    left: 0;
`

export const LogoBox = styled.div`
    margin-left: 1rem;
    display: flex;
    align-items: center;
    height: 100%;

    img {
        height: 100%;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            transform: translateY(-0.3rem);
        }
    }
`

export const NavBox = styled.ul`
    display: flex;
    margin: 0 2rem;

    display: flex;
    justify-content: space-between;
    list-style: none;

    &:not(:last-child) {
        margin-right: auto;
    }
`
interface LiProps {
    isActive: boolean
}

export const Li = styled.li<LiProps>`
    position: relative;
    padding: 0 2rem;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    border-radius: ${props => props.theme.sizes.borderRadius};

    ${props =>
        props.isActive &&
        `background-color: ${props.theme.colors.backgroundLight};`}

    &:hover {
        background-color: ${props => props.theme.colors.backgroundLight};
    }

    a {
        font-size: 1.6rem;
        color: ${props => props.theme.colors.greyDark1};
        display: flex;
        align-items: center;
        font-weight: 400;
        text-decoration: none;
        height: 100%;
        font-weight: 600;
    }

    svg {
        width: 2rem;
        height: 2rem;
        fill: ${props => props.theme.colors.greyDark1};
        cursor: pointer;
        transition: all 0.2s;
    }

    span {
        font-size: 1.2rem;
        font-weight: 700;
        height: 1.8rem;
        width: 1.8rem;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.primary};
        color: #fff;
        position: absolute;
        top: 0.8rem;
        right: 1.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`

export const AuthLi = styled.div`
    display: flex;
    position: relative;
`

export const AuthDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1.6rem;
    border: 2px solid ${props => props.theme.colors.background};
    margin: 0.4rem 0;
    border-radius: 1rem;
    transition: all 0.2s;

    &:hover {
        background-color: ${props => props.theme.colors.greyLight1};
    }

    svg {
        width: 2rem;
        height: 2rem;
        fill: ${props => props.theme.colors.greyDark1};
        cursor: pointer;
        transition: all 0.2s;
    }

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    p {
        color: ${props => props.theme.colors.greyDark1};
        font-size: 1.6rem;
        margin-left: 1.2rem;
        font-weight: 600;
    }

    button {
        border: none;
        background: transparent;
        outline: none;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
`
