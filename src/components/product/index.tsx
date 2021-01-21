import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { Container, Content, ImageContainer, Price, Title } from './style'

import Button, { InlineButton } from '../button'

import { item } from '../../pages/shop'

import { useCart, checkIfProductIsInCart } from '../../context/Cart'

import Image from 'next/image'

export interface ImageProduct {
    _id: string
    product: string
    name: string
    size: number
    key: string
    url: string
    createdAt: string
}

export interface ProductInterface {
    _id: number
    stock_id: number
    name: string
    description: string
    price: number
    stone: string
    stoneWeigth: number
    diamondWeigth: number
    shape: string
    images?: ImageProduct[]
}

const product: React.FC<ProductInterface> = props => {
    const [isActive, setIsActive] = useState(true)
    const { cart, addProduct } = useCart()

    useEffect(() => {
        if (checkIfProductIsInCart(cart, props)) {
            setIsActive(false)
        } else {
            setIsActive(true)
        }
    }, [cart])

    return (
        <Container variants={item}>
            <ImageContainer>
                <Link href={'/shop/' + props._id}>
                    <a>
                        <Image
                            src={props.images[0]?.url}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </a>
                </Link>
            </ImageContainer>
            <Content>
                <Link href={'/shop/' + props._id}>
                    <Title>{props.name}</Title>
                </Link>
                <Price>R$ {(props.price / 100).toFixed(2)}</Price>
                <Button
                    onClick={() => addProduct({ ...props })}
                    disabled={!isActive}
                >
                    {isActive ? 'Adicionar ao carrinho' : 'Produto adicionado'}
                </Button>
            </Content>
        </Container>
    )
}

export default product
