import React from 'react'
import axios from '../../../axios'
import { InlineButton } from '../button'

import Modal from '../modal'

import { ButtonContainer, Paragraph } from './style'

interface Props {
    title: string
    show: boolean
    closeModal(): void
    confirmHandler(): void
}

const confirmModal: React.FC<Props> = ({
    title,
    show,
    closeModal,
    confirmHandler
}) => {
    return (
        <Modal title={title} show={show} closeModal={closeModal}>
            <Paragraph>
                <strong>Observação:</strong> Excluir este endereço não excluirá
                pedidos pendentes que estejam sendo enviados para este endereço.
            </Paragraph>
            <ButtonContainer>
                <InlineButton light onClick={closeModal}>
                    Cancelar
                </InlineButton>
                <InlineButton onClick={confirmHandler}>Confirmar</InlineButton>
            </ButtonContainer>
        </Modal>
    )
}

export default confirmModal
