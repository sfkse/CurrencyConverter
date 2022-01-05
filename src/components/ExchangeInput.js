import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

const ExchangeInput = ({ amountToBeExchanged, setAmountToBeExchanged }) => {
    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                    style={{ width: '70%' }}
                    min="0"
                    type='number'
                    placeholder="Enter amount"
                    value={amountToBeExchanged}
                    onChange={(e) => setAmountToBeExchanged(e.target.value)}
                />
                <select defaultValue='Select Currency' disabled className="form-select">
                    <option >EUR</option>
                </select>
            </InputGroup>
        </>
    )
}

export default ExchangeInput
