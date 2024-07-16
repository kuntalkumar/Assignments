import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CryptocurrencyPrices = () => {
  const [cryptoPrices, setCryptoPrices] = useState(null);

  useEffect(() => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        setCryptoPrices(response.data.bpi);
      })
      .catch(error => console.error('Error fetching cryptocurrency prices:', error));
  }, []);

  return (
    <div>
      <h2>Cryptocurrency Prices</h2>
      {cryptoPrices && (
        <div>
          {Object.entries(cryptoPrices).map(([currency, data]) => (
            <div key={currency}>
              <h3>{currency}</h3>
              <p>{data.rate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CryptocurrencyPrices;
