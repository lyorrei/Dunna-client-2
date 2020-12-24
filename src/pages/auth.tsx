import React, { useState } from 'react'
import Page from '../components/page'
import {
    Content,
    Container,
    ButttonContainer,
    ButtonLogin,
    ButtonSignup,
    AuthContainer
} from '../styles/pages/auth'
import ContainerBg from '../images/nature.jpg'
import LoginForm from '../components/loginForm'
import SignupForm from '../components/signupForm'
import ClipLoader from 'react-spinners/ClipLoader'

import Head from 'next/head'

const auth: React.FC = () => {
    const [login, setLogin] = useState(true)
    const [loading, setLoading] = useState(false)

    return (
        <>
            <Head>
                <title>
                    {login ? 'Dunna - Entrar' : 'Dunna - Criar conta'}
                </title>
            </Head>
            <Page>
                <Container background={ContainerBg}>
                    <Content>
                        <ButttonContainer loading={loading ? 1 : 0}>
                            <ButtonLogin
                                login={login}
                                onClick={() => setLogin(true)}
                            >
                                Entrar
                            </ButtonLogin>
                            <ButtonSignup
                                login={login}
                                onClick={() => setLogin(false)}
                            >
                                Criar conta
                            </ButtonSignup>
                        </ButttonContainer>
                        <AuthContainer login={login}>
                            <LoginForm
                                loading={loading}
                                setLoading={setLoading}
                            />
                            <SignupForm
                                loading={loading}
                                setLoading={setLoading}
                            />
                        </AuthContainer>
                        {loading && (
                            <div style={{ margin: '0 auto', width: '120px' }}>
                                <ClipLoader color={'#00c2a8'} size={120} />
                            </div>
                        )}
                    </Content>
                </Container>
            </Page>
        </>
    )
}

export default auth
