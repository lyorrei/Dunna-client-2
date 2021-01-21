import Link from 'next/link'
import React from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import { Address } from '../../pages/addresses'
import { Container, HeaderContainer } from '../../styles/pages/checkout'
import { InlineButton } from '../button'
import {
    AddressesContainer,
    AddressContainer,
    Check,
    NoAddresses,
    AddressItem,
    ButtonsContainer
} from './style'

interface Props {
    myAddresses: Address[]
    selectedAddress: string
    setSelectedAddress(address: string): void
    setStage(stage: number): void
}

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

const checkoutAddress: React.FC<Props> = ({
    myAddresses,
    selectedAddress,
    setSelectedAddress,
    setStage
}) => {
    return (
        <Container
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <HeaderContainer>
                <h2>Endereço</h2>
                <Link href="/addresses/new">
                    <a>
                        <BsPlusSquare />
                    </a>
                </Link>
            </HeaderContainer>

            <AddressesContainer>
                {myAddresses.length > 0 ? (
                    <>
                        {myAddresses.map(address => (
                            <AddressContainer key={address._id}>
                                <Check
                                    onClick={() =>
                                        setSelectedAddress(address._id)
                                    }
                                    isChecked={address._id === selectedAddress}
                                >
                                    &nbsp;
                                </Check>
                                <AddressItem>
                                    <p>
                                        {address.street} {address.number}
                                    </p>
                                    <p>{address.city}</p>
                                    <p>{address.state}</p>
                                </AddressItem>
                                <AddressItem>
                                    <p>
                                        <span>CEP:</span> {address.zip}
                                    </p>

                                    <p>
                                        <span>Telefone:</span> {address.phone}
                                    </p>
                                    {address.additional_info && (
                                        <p>{address.additional_info}</p>
                                    )}
                                </AddressItem>
                            </AddressContainer>
                        ))}
                    </>
                ) : (
                    <NoAddresses>Por favor adicione um endereço</NoAddresses>
                )}
            </AddressesContainer>

            <ButtonsContainer>
                <InlineButton
                    onClick={() => setStage(1)}
                    disabled={selectedAddress === null}
                >
                    Próximo
                </InlineButton>
            </ButtonsContainer>
        </Container>
    )
}

export default checkoutAddress
