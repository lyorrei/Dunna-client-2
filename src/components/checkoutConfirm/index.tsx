import React from 'react'
import { Container } from '../../styles/pages/checkout'
import { InlineButton } from '../button'
import { ButtonsContainer, Text, Title } from './style'

const containerVariants = {
    hidden: {
        opacity: 0,
        y: '-100%'
    },
    visible: {
        opacity: 1,
        y: '0%'
    }
}

interface Props {
    handleSubmit(): void
    setStage(stage: number): void
}

const checkoutConfirm: React.FC<Props> = ({ setStage, handleSubmit }) => {
    return (
        <Container
            variants={containerVariants}
            initial="hidden"
            animate="visible"
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
