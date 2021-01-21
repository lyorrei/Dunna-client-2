import { GetStaticPaths, GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react'
import axios from '../../../axios'

import {
    Container,
    BigImageContainer,
    SmallImageContainer,
    Img,
    LeftContainer,
    RightContainer,
    Description,
    Price,
    Span,
    Title,
    UppercaseText,
    PriceSpan,
    SelectableImage,
    GridContainer,
    CheckList
} from '../../styles/pages/shop/product'

import Head from 'next/head'
import { ProductInterface } from '../../components/product'
import { InlineButton } from '../../components/button'
import { FiCheckCircle } from 'react-icons/fi'

import ReactImageMagnify from 'react-image-magnify'
import { checkIfProductIsInCart, useCart } from '../../context/Cart'
import withCart from '../../HOC/withCart'

interface Props {
    product: ProductInterface
}

const containerVariant = {
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

const BigImageVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
}

const SmallImageVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8
        }
    }
}

const RightContainerVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6
        }
    }
}

const product: React.FC<Props> = ({ product }) => {
    const [selectedImage, setSelectedImage] = useState(product.images[0].url)
    const { cart, addProduct } = useCart()
    const [isActive, setIsActive] = useState(true)

    useEffect(() => {
        if (checkIfProductIsInCart(cart, product)) {
            setIsActive(false)
        } else {
            setIsActive(true)
        }
    }, [cart])

    return (
        <>
            <Head>
                <title>Product - {product.name}</title>
            </Head>
            <Container
                variants={containerVariant}
                initial="hidden"
                animate="visible"
            >
                <GridContainer>
                    <LeftContainer>
                        <BigImageContainer variants={BigImageVariant}>
                            <ReactImageMagnify
                                enlargedImagePosition="over"
                                largeImage={{
                                    src: selectedImage,
                                    width: 2400,
                                    height: 1800
                                }}
                                smallImage={{
                                    alt: 'Image',
                                    isFluidWidth: true,
                                    src: selectedImage
                                }}
                            />
                        </BigImageContainer>
                        <SmallImageContainer
                            variants={SmallImageVariant}
                            imagesNumber={product.images.length}
                        >
                            {product.images.map((image, index) => (
                                <SelectableImage
                                    src={image.url}
                                    alt={'Image ' + index}
                                    key={image._id}
                                    onClick={() => setSelectedImage(image.url)}
                                    active={image.url === selectedImage}
                                />
                            ))}
                        </SmallImageContainer>
                    </LeftContainer>
                    <RightContainer variants={RightContainerVariant}>
                        <Title>{product.name}</Title>
                        <UppercaseText>
                            By <Span>Dunna Jewelry</Span>
                        </UppercaseText>
                        <Price>
                            <PriceSpan>R$</PriceSpan>
                            {(product.price / 100).toFixed(2)}
                        </Price>
                        <Description>{product.description}</Description>
                        <InlineButton
                            onClick={() => addProduct(product)}
                            disabled={!isActive}
                        >
                            {isActive
                                ? 'Adicionar ao carrinho'
                                : 'Produto adicionado'}
                        </InlineButton>
                        <CheckList>
                            <li>
                                <FiCheckCircle />
                                <span>Joia feita à mão</span>
                            </li>
                            <li>
                                <FiCheckCircle />
                                <span>Design único</span>
                            </li>
                            <li>
                                <FiCheckCircle />
                                <span>Lapidada por profissionais</span>
                            </li>
                        </CheckList>
                    </RightContainer>
                </GridContainer>
            </Container>
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

export default withCart(product)
