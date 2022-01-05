import React, { useEffect } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import Loading from './Loading'

const ExchangeResult = ({ exchangedAmount, handleChange, loading, currencyList, setData, setCurrencyList, setLoading }) => {

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(`http://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_API_KEY}`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            setData(data);
            setCurrencyList(data.rates);
            setLoading(false);

        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                    style={{ width: '70%' }}
                    type='number'
                    readOnly
                    placeholder="Converted amount..."
                    value={exchangedAmount}
                />
                {loading ?
                    <Loading />
                    : <select className="form-select" onChange={handleChange}>
                        <option value="default">CURRENCY</option>
                        {Object.keys(currencyList).map(curr =>
                            <option key={curr} value={curr}>{curr}</option>
                        )
                        }
                    </select>
                }
            </InputGroup>
        </>

    )
}

export default ExchangeResult
