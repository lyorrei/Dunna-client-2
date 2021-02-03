import React, { useEffect, useState } from 'react'
import axios from '../../../axios'

import Head from 'next/head'
import Link from 'next/link'

import {
    PageContainer,
    Container,
    EmptyCart
} from '../../styles/pages/checkout'

import RequireAuthentication from '../../HOC/requireAuthentication'

import { useCart } from '../../context/Cart'

import CheckoutBackground from '../../images/checkout2.jpg'

import { Address } from '../addresses'
import CheckoutAddress from '../../components/checkoutAddress'
import CheckoutPayment from '../../components/checkoutPayment'
import CheckoutStage from '../../components/checkoutStage'
import CheckoutCart from '../../components/checkoutCart'
import CheckoutAddressInfo from '../../components/checkoutAddressInfo'
import CheckoutConfirm from '../../components/checkoutConfirm'
import { InlineButton } from '../../components/button'
import { User } from '../me'
import {
    CardElement,
    Elements,
    useElements,
    useStripe
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

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
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const checkout = ({ myAddresses, user }: Props) => {
    const [selectedAddress, setSelectedAddress] = useState(null)
    const [stage, setStage] = useState(0)
    const { cart } = useCart()
    const [total, setTotal] = useState(0)

    let pageContent = (
        <Container>
            <EmptyCart>Seu carrinho está vazio</EmptyCart>
        </Container>
    )
    if (cart.length > 0) {
        pageContent = (
            <>
                <CheckoutStage stage={stage} />
                <CheckoutAddress
                    myAddresses={myAddresses}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                    stage={stage}
                    setStage={setStage}
                />
                <CheckoutPayment stage={stage} setStage={setStage} />
                <CheckoutConfirm
                    total={total}
                    selectedAddress={selectedAddress}
                    stage={stage}
                    setStage={setStage}
                />
            </>
        )
    }

    return (
        <>
            <Head>
                <title>Dunna - Checkout</title>
            </Head>
            <Elements stripe={stripePromise}>
                <PageContainer
                    variants={pageContainerVariant}
                    initial="hidden"
                    animate="visible"
                    imageUrl={CheckoutBackground}
                >
                    {pageContent}
                    {cart.length > 0 && (
                        <CheckoutCart total={total} setTotal={setTotal} />
                    )}
                    {selectedAddress && stage !== 0 && (
                        <CheckoutAddressInfo
                            selectedAddress={selectedAddress}
                            myAddresses={myAddresses}
                            user={user}
                        />
                    )}
                </PageContainer>
            </Elements>
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
