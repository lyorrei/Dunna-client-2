import React, { useEffect } from 'react'
import axios from '../../../axios'

import Head from 'next/head'
import Link from 'next/link'

import { User } from '../me'

import {
    PageContainer,
    Container,
    Title,
    SubContainer,
    AddressBox,
    NewAddressBox
} from '../../styles/pages/addresses'

import { BiPlus } from 'react-icons/bi'
import RequireAuthentication from '../../HOC/requireAuthentication'
``
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

export interface Address {
    _id: string
    city: string
    state: string
    street: string
    number: number
    zip: number
    additional_info?: string
    phone: number
}

 interface Props {
    myAddresses: Address[]
    user: User
}

const addresses = ({ myAddresses, user }: Props) => {
    return (
        <>
            <Head>
                <title>Dunna - My addresses</title>
            </Head>
            <PageContainer
                variants={pageContainerVariant}
                initial="hidden"
                animate="visible"
            >
                <Container>
                    <Title>Seus endereços</Title>
                    <SubContainer>
                        <Link href="/addresses/new">
                            <NewAddressBox>
                                <BiPlus />
                                <p>Adicionar endereço</p>
                            </NewAddressBox>
                        </Link>
                        {myAddresses.map(address => (
                            <AddressBox>
                                <p>
                                    {user.firstName} {user.lastName}
                                </p>
                                <p>
                                    {address.street} {address.number}
                                </p>
                                <p>{address.city}</p>
                                <p>{address.state}</p>
                                {address.additional_info && (
                                    <p>{address.additional_info}</p>
                                )}
                                <p>
                                    <span>CEP:</span> {address.zip}
                                </p>

                                <p>
                                    <span>Telefone:</span> {address.phone}
                                </p>
                            </AddressBox>
                        ))}
                    </SubContainer>
                </Container>
            </PageContainer>
        </>
    )
}

addresses.getInitialProps = async (ctx, token) => {
    const { data: myAddresses } = await axios.get('/addresses', {
        headers: {
            Cookie: `token=${token};`
        }
    })
    return { myAddresses }
}

export default RequireAuthentication(addresses)
