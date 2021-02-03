import React from 'react'
import { Order } from '../../pages/checkout/success/[orderId]'
import { AddressDetails } from './style'

interface Props {
    order: Order
}

const orderAddress: React.FC<Props> = ({ order }) => {
    return (
        <AddressDetails>
            <div>
                <p>
                    <span>Estado:</span> {order.shipping.order_address.state}
                </p>
                <p>
                    <span>Cidade:</span> {order.shipping.order_address.city}
                </p>
                <p>
                    <span>Rua:</span> {order.shipping.order_address.street}{' '}
                    {order.shipping.order_address.number}
                </p>
            </div>
            <div>
                <p>
                    <span>CEP:</span> {order.shipping.order_address.zip}
                </p>
                {order.shipping.order_address.additional_info && (
                    <p>
                        <span>Informações adicionais:</span>
                        {order.shipping.order_address.additional_info}
                    </p>
                )}
                <p>
                    <span>Frete:</span> R${' '}
                    {order.shipping.ship_charge.toFixed(2)}
                </p>
                <p>
                    <span>Telefone:</span> {order.shipping.order_address.phone}
                </p>
            </div>
        </AddressDetails>
    )
}

export default orderAddress
