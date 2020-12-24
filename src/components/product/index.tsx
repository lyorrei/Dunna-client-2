import React from 'react'
import Link from 'next/link'

import { Container, Content, ImageContainer, Price, Title } from './style'

import Button from '../button'

export interface ImageProduct {
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
    return (
        <Container>
            <Link href={'/shop/' + props._id}>
                <a>
                    <ImageContainer
                        imageUrl={props.images[0]?.url}
                    ></ImageContainer>
                </a>
            </Link>
            <Content>
                <Link href={'/shop/' + props._id}>
                    <Title>{props.name}</Title>
                </Link>
                <Price>R$ {(props.price / 100).toFixed(2)}</Price>
                <Button>Adicionar ao carrinho</Button>
            </Content>
        </Container>
    )
}

export default product
