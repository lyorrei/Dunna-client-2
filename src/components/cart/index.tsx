import React, { useEffect, useState } from 'react'
import { useCart } from '../../context/Cart'
import Link from 'next/link'

import {
    Container,
    Title,
    Message,
    Total,
    CartItemsContainer,
    CartBox
} from './style'
import { ProductInterface } from '../product'

import Head from 'next/head'
import CartItem from '../cartItem'
import { CheckoutButton } from '../button'
import { FaShoppingCart } from 'react-icons/fa'

interface Props {
    showCart: boolean
    setShowCart(boolean: boolean): void
}

const cart: React.FC<Props> = ({ showCart, setShowCart }) => {
    const { cart } = useCart()
    const [total, setTotal] = useState(0)

    let cartElements = <Message>O carrinho está vazio</Message>
    if (cart.length !== 0) {
        cartElements = (
            <>
                <CartItemsContainer>
                    {cart.map((product: ProductInterface) => (
                        <CartItem {...product} key={product._id} />
                    ))}
                </CartItemsContainer>

                <Total>
                    Total: <span>{(total / 100).toFixed(2)}</span>
                </Total>

                <Link href="/checkout">
                    <CheckoutButton>Checkout</CheckoutButton>
                </Link>
            </>
        )
    }

    useEffect(() => {
        let totalPrice = 0
        for (let i = 0; i < cart.length; i++) {
            totalPrice += cart[i].price
        }
        setTotal(totalPrice)
    }, [cart])

    return (
        <>
            <Head>
                <title>Dunna - Cart</title>
            </Head>

            <Container showCart={showCart}>
                <CartBox onClick={() => setShowCart(!showCart)}>
                    {cart.length !== 0 && <span>{cart.length}</span>}
                    <FaShoppingCart />
                </CartBox>
                <Title>Meu carrinho</Title>
                {cartElements}
            </Container>
        </>
    )
}

export default cart
