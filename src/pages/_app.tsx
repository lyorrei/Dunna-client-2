import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyles from '../styles/global'
import Navbar from '../components/navbar'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyles />
        </ThemeProvider>
    )
}

export default MyApp
