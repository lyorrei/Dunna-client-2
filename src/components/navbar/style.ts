import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.colors.white};
    height: 6rem;
    display: flex;
    z-index: 10;
`

export const LogoBox = styled.div`
    margin-left: 1rem;
    display: flex;
    align-items: center;
    height: 100%;

    img {
        height: 100%;
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

    li {
        position: relative;
        padding: 0 2rem;
        transition: all 0.2s;
        display: flex;
        align-items: center;

        &:hover {
            background-color: ${props => props.theme.colors.greyLight4};
        }

        a {
            text-transform: uppercase;
            font-size: 1.6rem;
            color: ${props => props.theme.colors.greyDark1};
            display: flex;
            align-items: center;
            font-weight: 400;
            text-decoration: none;
            height: 100%;
        }

        svg {
            width: 2rem;
            height: 2rem;
            fill: ${props => props.theme.colors.greyDark1};
            cursor: pointer;
            transition: all 0.2s;

            /* &:hover {
                transform: scale(1.2);
            } */
        }

        span {
            font-size: 1rem;
            font-weight: 700;
            height: 1.75rem;
            width: 1.75rem;
            border-radius: 50%;
            background-color: #908;
            color: #fff;
            position: absolute;
            top: 1rem;
            right: 1.1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        div {
            display: flex;
            align-items: center;
        }
    }
`
