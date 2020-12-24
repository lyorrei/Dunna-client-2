import React, { useEffect } from 'react'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()
function teste() {
    useEffect(() => {
        const token = cookies.get('token')
        console.log(token)
    }, [])

    return <h1>Teste</h1>
}

export default teste
