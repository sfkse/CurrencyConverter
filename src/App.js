import { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import ExchangeResult from './components/ExchangeResult';
import ExchangeInput from './components/ExchangeInput';


function App() {
  const [data, setData] = useState();
  const [amountToBeExchanged, setAmountToBeExchanged] = useState();
  const [exchangedAmount, setExchangedAmount] = useState();
  const [currencyList, setCurrencyList] = useState();
  const [selectedCurrency, setSelectedCurrency] = useState();
  const [loading, setLoading] = useState(true);


  const handleChange = (e) => {
    if (e.target.value !== 'default')
      setSelectedCurrency(e.target.value);
    else
      //Disabling the button
      setSelectedCurrency(undefined)
  }

  const handleConvert = () => {

    if (amountToBeExchanged !== "") {
      const rate = data.rates[selectedCurrency];
      const exchangeResult = (+amountToBeExchanged * rate).toFixed(2);
      setExchangedAmount(exchangeResult);
    }
    else {
      alert('Please enter an amount ')
    }
  }

  return (
    <div className="container pt-3">
      <Card className='m-auto mt-5'>
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }} >Currency Converter</Card.Title>
          <ExchangeInput
            amountToBeExchanged={amountToBeExchanged}
            setAmountToBeExchanged={setAmountToBeExchanged}
          />
          <ExchangeResult
            exchangedAmount={exchangedAmount}
            loading={loading}
            currencyList={currencyList}
            handleChange={handleChange}
            setData={setData}
            setCurrencyList={setCurrencyList}
            setLoading={setLoading}
          />
          <div className="d-grid gap-2">
            <Button
              onClick={handleConvert}
              disabled={amountToBeExchanged !== undefined && selectedCurrency !== undefined ? false : true}
              variant="outline-secondary"
              size="lg"
            >
              Convert
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
