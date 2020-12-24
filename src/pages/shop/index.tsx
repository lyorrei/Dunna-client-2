import React, { useEffect } from 'react'
import axios from '../../../axios'

import Page from '../../components/page'
import Head from 'next/head'
import Product from '../../components/product'
import { Container, Title, ClipPath } from '../../styles/pages/shop'
import { ProductInterface } from '../../components/product'

interface Props {
    products: ProductInterface[]
}

const shop: React.FC<Props> = ({ products }) => {
    useEffect(() => {
        console.log(products)
    })
    return (
        <>
            <Head>
                <title>Dunna Jewelry - Shop</title>
            </Head>
            <Page>
                <ClipPath>
                    <Title>Dunna Jewelry Shop</Title>

                    <Container>
                        {products.map(product => (
                            <Product key={product._id} {...product} />
                        ))}
                    </Container>
                </ClipPath>
            </Page>
        </>
    )
}

export async function getStaticProps(context) {
    const { data: products } = await axios.get('/products')
    return {
        props: {
            products
        } // will be passed to the page component as props
    }
}

export default shop
