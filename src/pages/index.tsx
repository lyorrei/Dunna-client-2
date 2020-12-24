import React, { useEffect, useState } from 'react'
import requireAuthentication from '../HOC/requireAuthentication'

import Head from 'next/head'
import Page from '../components/page'

const Home = () => {
    return (
        <div>
            <Head>
                <title>Dunna Jewelry</title>
            </Head>
            <Page>
                <main>
                    <h1>Hello World</h1>
                    <h2>teste</h2>
                </main>
            </Page>
        </div>
    )
}

Home.getInitialProps = ctx => {
    // console.log(ctx.req)
    return {

    }
}

export default requireAuthentication(Home)
