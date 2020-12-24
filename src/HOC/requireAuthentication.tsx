import React from 'react'
import axios from '../../axios'
import Router from 'next/router'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()
const RequireAuthentication = WrappedComponent => {
    return class extends React.Component {
        static async getInitialProps(ctx) {
            let token = null
            if (ctx.res) {
                token = ctx.req.headers.cookie?.replace('token=', '')
            } else {
                token = cookies.get('token')
            }

            try {
                await axios.get('/users/me', {
                    headers: {
                        Cookie: `token=${token};`
                    }
                })
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
