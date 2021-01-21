import { AppProps } from 'next/dist/next-server/lib/router/router'
import React, { useEffect } from 'react'
import axios from '../../../axios'

import GlobalStyles from '../../styles/global'
import Navbar from '../navbar'
import { Content } from '../../styles/pages/app'
import { useUser } from '../../context/User'


const page: React.FC<AppProps> = ({ Component, pageProps }) => {
    const { setUser } = useUser()

    useEffect(() => {
        axios
            .get('/users/me')
            .then(res => setUser(res.data))
            .catch(e => {})
    }, [])

    return (
        <>
            <Navbar />
            <Content>
                <Component {...pageProps} />
            </Content>
            <GlobalStyles />
        </>
    )
}

export default page
