import React, { useRef, useState } from 'react'
import axios from '../../../axios'

import Head from 'next/head'
import Product from '../../components/product'
import {
    Container,
    Title,
    GridContainer,
    NoProducts
} from '../../styles/pages/shop/shop'
import product, { ProductInterface } from '../../components/product'

import FilterProducts from '../../components/filterProducts'
import { FormHandles } from '@unform/core'
import withCart from '../../HOC/withCart'

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

const titleVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
}

export const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3
        }
    }
}

export interface StonesAndShapes {
    _id: string
    name: string
}

interface Props {
    products: ProductInterface[]
    stones: StonesAndShapes[]
    shapes: StonesAndShapes[]
}

const shop: React.FC<Props> = ({
    products: productsFromProps,
    stones,
    shapes
}) => {
    const [products, setProducts] = useState(productsFromProps)
    const [priceValue, setPriceValue] = useState({ min: 0, max: 10000 })
    const formRef = useRef<FormHandles>(null)

    const handleFilterChange = (range?) => {
        setTimeout(() => {
            const data: any = formRef.current.getData()
            let filteredProducts = [...productsFromProps]

            if (data.stones.length > 0) {
                filteredProducts = filteredProducts.filter(product =>
                    data.stones.includes(product.stone)
                )
            }

            if (data.shapes.length > 0) {
                filteredProducts = filteredProducts.filter(product =>
                    data.shapes.includes(product.shape)
                )
            }

            if (range) {
                filteredProducts = filteredProducts.filter(product => {
                    const priceFormated = product.price / 100

                    return (
                        priceFormated >= range.min && priceFormated <= range.max
                    )
                })
            }

            setProducts(filteredProducts)
        }, 0)
    }

    const handleFiltering = range => {
        setPriceValue(range)
    }

    return (
        <>
            <Head>
                <title>Dunna Jewelry - Shop</title>
            </Head>
            <Container variants={container} initial="hidden" animate="visible">
                <Title variants={titleVariant}>Dunna Jewelry Shop</Title>

                {productsFromProps.length > 0 ? (
                    <>
                        <FilterProducts
                            handleFilterChange={handleFilterChange}
                            stones={stones}
                            shapes={shapes}
                            formRef={formRef}
                            priceValue={priceValue}
                            changeHandler={handleFiltering}
                        />

                        <GridContainer>
                            {products.length > 0 ? (
                                products.map(product => (
                                    <Product key={product._id} {...product} />
                                ))
                            ) : (
                                <NoProducts>
                                    Nenhum produto encontrado
                                </NoProducts>
                            )}
                        </GridContainer>
                    </>
                ) : (
                    <NoProducts>O estoque está esgotado</NoProducts>
                )}
            </Container>
        </>
    )
}

export async function getStaticProps(context) {
    const { data: products } = await axios.get('/products')
    const { data: stones } = await axios.get('/stones')
    const { data: shapes } = await axios.get('/shapes')
    return {
        props: {
            products,
            stones,
            shapes
        } // will be passed to the page component as props
    }
}

export default withCart(shop)
