import React from 'react'
import { Nav, LogoBox, NavBox } from './style'
import Link from 'next/link'
import Logo from '../../images/logo.jpg'
import { FaUser } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'

import { Cookies } from 'react-cookie'

const cookies = new Cookies()

const navbar = () => {
    return (
        <Nav>
            <LogoBox>
                <img src={Logo} alt="Logo" />
            </LogoBox>
            <NavBox>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/shop">
                        <a>Shop</a>
                    </Link>
                </li>
            </NavBox>
            <NavBox>
                <li>
                    <Link href="/shop">
                        <a>
                            <span>7</span>
                            <FaShoppingCart />
                        </a>
                    </Link>
                </li>

                <li>
                    <Link href="/auth">
                        <a>
                            <FaUser />
                        </a>
                    </Link>
                </li>
            </NavBox>
        </Nav>
    )
}

export default navbar
