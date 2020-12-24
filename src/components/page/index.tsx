import React from 'react'

import Navbar from '../navbar'
import Content from './style'

const page = props => (
    <>
        <Navbar />
        <Content>{props.children}</Content>
    </>
)

export default page
