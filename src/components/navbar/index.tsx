import React, { useEffect, useRef, useState } from 'react'
import axios from '../../../axios'

import { Nav, LogoBox, NavBox, Li, AuthLi, AuthDiv } from './style'
import Link from 'next/link'
import Logo from '../../images/logo.jpg'
import { FaUser, FaUserCircle } from 'react-icons/fa'

import AuthDropdown from '../dropdown'

import { useRouter } from 'next/router'

import { useUser } from '../../context/User'
import { RiLogoutBoxLine } from 'react-icons/ri'

const navbar: React.FC = () => {
    const router = useRouter()

    const [showAuthDropdown, setShowAuthDropdown] = useState(false)
    const { user, setUser } = useUser()

    const handleLogout = async () => {
        await axios.post('/users/logout')
        setUser(null)
        setShowAuthDropdown(false)
        router.replace('/auth')
    }

    const [authDropdownList] = useState([
        {
            icon: FaUserCircle,
            text: ' Minha conta',
            type: 'link',
            link: '/myaccount'
        },
        {
            icon: RiLogoutBoxLine,
            text: 'Logout',
            type: 'button',
            click: () => handleLogout()
        }
    ])

    return (
        <Nav>
            <LogoBox>
                <Link href="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </LogoBox>
            <NavBox>
                <Li isActive={router.pathname === '/'}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </Li>
                <Li isActive={router.pathname === '/shop'}>
                    <Link href="/shop">
                        <a>Shop</a>
                    </Link>
                </Li>
            </NavBox>
            <NavBox>
                <AuthLi>
                    <AuthDiv>
                        {user ? (
                            <button onClick={() => setShowAuthDropdown(true)}>
                                <FaUser />
                                <p>{user.firstName}</p>
                            </button>
                        ) : (
                            <Link href="/auth">
                                <a>
                                    <FaUser />
                                </a>
                            </Link>
                        )}
                    </AuthDiv>
                    {showAuthDropdown && (
                        <AuthDropdown
                            show={showAuthDropdown}
                            setShow={setShowAuthDropdown}
                            list={authDropdownList}
                        />
                    )}
                </AuthLi>
            </NavBox>
        </Nav>
    )
}

export default navbar
