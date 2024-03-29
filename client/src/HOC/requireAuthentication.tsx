import React from 'react'
import axios from '../../axios'
import Router from 'next/router'
import { NextPageContext } from 'next'

const RequireAuthentication = WrappedComponent => {
    return class extends React.Component {
        static async getInitialProps(ctx: NextPageContext) {
            let token = null
            if (ctx.res) {
                token = ctx.req.headers.cookie?.replace('token=', '')
            }

            try {
                const { data: user } = await axios.get('/users/me', {
                    headers: {
                        Cookie: `token=${token};`
                    }
                })

                if (WrappedComponent.getInitialProps) {
                    const pageProps = await WrappedComponent.getInitialProps(
                        ctx,
                        token
                    )
                    return { ...pageProps, user }
                }

                return { user }
            } catch (err) {
                if (ctx.res) {
                    ctx.res.writeHead(302, {
                        Location: '/auth'
                    })
                    ctx.res.end()
                } else {
                    Router.push('/auth')
                }
            }
            return {}
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}

export default RequireAuthentication
