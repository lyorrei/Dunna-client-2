import { GetStaticPaths, GetStaticProps } from 'next'
import React, { useEffect } from 'react'
import axios from '../../../axios'

import Page from '../../components/page'
import Head from 'next/head'
import { ProductInterface } from '../../components/product'

interface Props {
    product: ProductInterface
}

const product: React.FC<Props> = ({ product }) => {
    useEffect(() => {
        console.log(product)
    }, [])
    
    return (
        <>
            <Head>
                <title>Product - {product.name}</title>
            </Head>
            <Page>
                <div>Teste</div>
            </Page>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async ctx => {
    const { data: products } = await axios.get('/products')

    const paths = products.map(product => ({
        params: {
            id: product._id
        }
    }))

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ctx => {
    const { data: product } = await axios.get('/product/' + ctx.params.id)
    return {
        props: {
            product
        }
    }
}

export default product
