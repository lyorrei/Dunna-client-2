import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import Select, { OptionTypeBase, Props as SelectProps } from 'react-select'

import customStyles from './style'

interface Props extends SelectProps<OptionTypeBase> {
    name: string
    isMultiple?: boolean
}

const select: React.FC<Props> = ({ name, isMultiple, ...rest }) => {
    const selectRef = useRef(null)
    const { fieldName, defaultValue, registerField, error } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            getValue: (ref: any) => {
                if (isMultiple) {
                    if (!ref.state.value) {
                        return []
                    }
                    return ref.state.value.map(
                        (option: OptionTypeBase) => option.value
                    )
                }
                if (!ref.state.value) {
                    return ''
                }
                return ref.state.value.value
            }
        })
    }, [fieldName, registerField, rest.isMulti])
    return (
        <Select
            defaultValue={defaultValue}
            ref={selectRef}
            styles={customStyles}
            instanceId={'randomString'}
            isMulti={isMultiple}
            {...rest}
        />
    )
}

export default select
