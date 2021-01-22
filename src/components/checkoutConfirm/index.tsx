import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import axios from '../../../axios'

import { useCart } from '../../context/Cart'
import { Container } from '../../styles/pages/checkout'
import { InlineButton } from '../button'
import { ButtonsContainer, Text, Title } from './style'

const containerVariants = {
    hidden: {
        opacity: 0,
        y: '-120%'
    },
    visible: {
        opacity: 1,
        y: '0%'
    }
}

interface Props {
    stage: number
    // handleSubmit(): void
    setStage(stage: number): void
    total: number
    selectedAddress: string
}

const checkoutConfirm: React.FC<Props> = ({
    setStage,
    // handleSubmit,
    stage,
    selectedAddress,
    total
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const { cart } = useCart()
    const elements = useElements()
    const stripe = useStripe()

    useEffect(() => {
        if (stage === 2) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [stage])

    const handleSubmit = async () => {
        const cardElement = elements.getElement(CardElement)
        console.log(cardElement)

        const requestData = {
            cart,
            amount: total,
            addressId: selectedAddress
        }

        try {
            const { data } = await axios.post('/charge', requestData)
            const clientSecret = data.client_secret
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement
                }
            })
            console.log('money is in the bank')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Container
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            exit="hidden"
        >
            <Title>Realizar a compra</Title>
            <Text>Por favor confirme o endereço e os produtos escolhidos.</Text>
            <ButtonsContainer>
                <div>
                    <InlineButton onClick={() => setStage(1)} light>
                        Voltar
                    </InlineButton>
                </div>

                <InlineButton onClick={handleSubmit}>Confirmar</InlineButton>
            </ButtonsContainer>
        </Container>
    )
}

export default checkoutConfirm
