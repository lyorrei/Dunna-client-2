import React, { createContext, useState, useContext, useEffect } from 'react'
import { ProductInterface } from '../components/product'

const CartContext = createContext(null)

export const checkIfProductIsInCart = (
    cart: ProductInterface[],
    product: ProductInterface
) => {
    const value = cart.some(
        productFromCart => productFromCart._id === product._id
    )

    return value
}

export default function CountProvider({ children }) {
    const [cart, setCart] = useState([
        {
            _id: '5fe1388e26fa8533680272be',
            stock_id: 1,
            name: 'Beaultiful yellow stone',
            description:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse veniam cupiditate porro eius minima tempore ad perspiciatis sed, perferendis molestias deserunt dicta? Laboriosam optio ad corrupti, error reiciendis similique mollitia!',
            price: 40000,
            stone: '5fe1385c26fa8533680272bc',
            stoneWeigth: 2.99,
            diamondWeigth: 4.21,
            shape: '5fe1386626fa8533680272bd',
            __v: 0,
            images: [
                {
                    _id: '5fe3ddba515b822ab86043f2',
                    product: '5fe1388e26fa8533680272be',
                    name: 'loginTeste.jpg',
                    size: 2056380,
                    key: '822746bdddf36d348756e0d0a66e1228-loginTeste.jpg',
                    url:
                        'http://localhost:3001/files/822746bdddf36d348756e0d0a66e1228-loginTeste.jpg',
                    createdAt: '2020-12-24T00:15:54.423Z',
                    __v: 0
                },
                {
                    _id: '5fe4e644250b931de87c5a0b',
                    product: '5fe1388e26fa8533680272be',
                    name: 'IMG_4443.JPG',
                    size: 1094571,
                    key: 'e5f187f85444bb56de2e7f1532768581-IMG_4443.JPG',
                    url:
                        'http://localhost:3001/files/e5f187f85444bb56de2e7f1532768581-IMG_4443.JPG',
                    createdAt: '2020-12-24T19:04:36.128Z',
                    __v: 0
                },
                {
                    _id: '5fe4e648250b931de87c5a0c',
                    product: '5fe1388e26fa8533680272be',
                    name: 'IMG_3942.JPG',
                    size: 1190875,
                    key: '489f7c681d2817439e03556c13aadda3-IMG_3942.JPG',
                    url:
                        'http://localhost:3001/files/489f7c681d2817439e03556c13aadda3-IMG_3942.JPG',
                    createdAt: '2020-12-24T19:04:40.006Z',
                    __v: 0
                }
            ],
            id: '5fe1388e26fa8533680272be'
        },
        {
            _id: '5fe27db81884184714983e40',
            stock_id: 1,
            name: 'Beaultiful yellow stone',
            description: 'This is a beaultiful aqua marine!!!',
            price: 912.99,
            stone: '5fe1385c26fa8533680272bc',
            stoneWeigth: 2.99,
            diamondWeigth: 4.21,
            shape: '5fe1386626fa8533680272bd',
            __v: 0,
            images: [
                {
                    _id: '5fe3dde8515b822ab86043f3',
                    product: '5fe27db81884184714983e40',
                    name: 'loginContainer.jpg',
                    size: 138658,
                    key: '2f0590da34bd50ad6a6a2c99fcb22338-loginContainer.jpg',
                    url:
                        'http://localhost:3001/files/2f0590da34bd50ad6a6a2c99fcb22338-loginContainer.jpg',
                    createdAt: '2020-12-24T00:16:40.479Z',
                    __v: 0
                }
            ],
            id: '5fe27db81884184714983e40'
        }
    ])

    const addProduct = (product: ProductInterface) => {
        const cartCopy = [...cart]

        if (!checkIfProductIsInCart(cartCopy, product)) {
            cartCopy.push(product)
            setCart(cartCopy)
        }
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addProduct
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) throw new Error('useCart must be used within a CountProvider')
    const { cart, setCart, addProduct } = context
    return { cart, setCart, addProduct }
}
