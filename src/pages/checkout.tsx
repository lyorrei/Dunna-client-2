import React, { useEffect, useState } from 'react'
import axios from '../../axios'

import Head from 'next/head'
import Link from 'next/link'

import { PageContainer, Container, EmptyCart } from '../styles/pages/checkout'

import RequireAuthentication from '../HOC/requireAuthentication'

import { useCart } from '../context/Cart'

import CheckoutBackground from '../images/checkout2.jpg'

import { Address } from './addresses'
import CheckoutAddress from '../components/checkoutAddress'
import CheckoutPayment from '../components/checkoutPayment'
import CheckoutStage from '../components/checkoutStage'
import CheckoutCart from '../components/checkoutCart'
import CheckoutAddressInfo from '../components/checkoutAddressInfo'
import CheckoutConfirm from '../components/checkoutConfirm'
import { InlineButton } from '../components/button'
import { User } from './me'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

const pageContainerVariant = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.2
        }
    }
}

interface Props {
    myAddresses: Address[]
    user: User
}

const checkout = ({ myAddresses, user }: Props) => {
    const [selectedAddress, setSelectedAddress] = useState(null)
    const [stage, setStage] = useState(0)
    const { cart } = useCart()

    const elements = useElements()
    const stripe = useStripe()

    const handleSubmit = () => {
        const cardElement = elements.getElement(CardElement)
        console.log(cardElement)
    }

    let pageContent = <EmptyCart>Seu carrinho está vazio</EmptyCart>
    if (cart.length > 0) {
        switch (stage) {
            case 0:
                pageContent = (
                    <CheckoutAddress
                        myAddresses={myAddresses}
                        selectedAddress={selectedAddress}
                        setSelectedAddress={setSelectedAddress}
                        setStage={setStage}
                    />
                )
                break
            case 1:
                pageContent = <CheckoutPayment setStage={setStage} />
                break
            case 2:
                pageContent = <CheckoutConfirm handleSubmit={handleSubmit} setStage={setStage}/>
        }
    }

    return (
        <>
            <Head>
                <title>Dunna - Checkout</title>
            </Head>
            <PageContainer
                variants={pageContainerVariant}
                initial="hidden"
                animate="visible"
                imageUrl={CheckoutBackground}
            >
                <CheckoutStage stage={stage} />
                {pageContent}
                {cart.length > 0 && <CheckoutCart />}
                {selectedAddress && stage !== 0 && (
                    <CheckoutAddressInfo
                        selectedAddress={selectedAddress}
                        myAddresses={myAddresses}
                        user={user}
                    />
                )}
            </PageContainer>
        </>
    )
}

checkout.getInitialProps = async (ctx, token) => {
    const { data: myAddresses } = await axios.get('/addresses', {
        headers: {
            Cookie: `token=${token};`
        }
    })
    return { myAddresses }
}

export default RequireAuthentication(checkout)
