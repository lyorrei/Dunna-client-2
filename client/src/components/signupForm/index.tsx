import React, { useRef, useState } from 'react'
import axios from '../../../axios'
import * as Yup from 'yup'

import { SubmitHandler, FormHandles } from '@unform/core'
import Input from '../input'

import Button from '../button'
import { InputGroup } from './style'
import Form from '../form'

import Router from 'next/router'
import Alert from '../alert/style'
import { Types } from '../alert'
import { useUser } from '../../context/User'

interface Props {
    setLoading(boolean: boolean): void
}

const signupForm: React.FC<Props> = ({ setLoading }) => {
    const [formError, setFormError] = useState(null)
    const formRef = useRef<FormHandles>(null)

    const { setUser } = useUser()

    const handleSubmit: SubmitHandler<FormData> = async data => {
        try {
            // Remove all previous errors
            setFormError(null)
            formRef.current.setErrors({})

            const schema = Yup.object().shape({
                firstName: Yup.string().required(
                    'O primeiro nome é obrigatório'
                ),
                lastName: Yup.string().required('O último nome é obrigatório'),
                email: Yup.string()
                    .email('Digite um e-mail válido')
                    .required('O e-mail é obrigatório'),
                password: Yup.string()
                    .min(7, 'No mínimo 7 caracteres')
                    .required('A senha é obrigatória')
            })
            await schema.validate(data, {
                abortEarly: false
            })

            // Validation passed
            setLoading(true)
            const { data: user } = await axios.post('/users/create', data)
            setUser(user)
            Router.replace('/shop')
        } catch (err) {
            const validationErrors = {}
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach(error => {
                    validationErrors[error.path] = error.message
                })
                formRef.current.setErrors(validationErrors)
            } else {
                setFormError(err.response.data.error)
                setLoading(false)
            }
            console.log(err)
        }
    }

    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
            {formError && <Alert type={Types.red}>{formError}</Alert>}

            <InputGroup>
                <Input name="firstName" label="Primeiro nome" />
                <Input name="lastName" label="Último nome" />
            </InputGroup>

            <Input name="email" label="Email" type="email" />
            <Input name="password" label="Senha" type="password" />

            <Button type="submit">Vamoo</Button>
        </Form>
    )
}

export default signupForm
