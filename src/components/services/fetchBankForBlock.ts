export const fetchBank1Data = () => {
  return fetch('https://bank1.example.com/api')
    .then((response) => response.json())
    .then((data) => {
      return {
        currencyRates: data.rates,
        //
      };
    });
};

export const fetchBank2Data = () => {
  return fetch('https://bank2.example.com/api2', {
    headers: {
      Authorization: 'Bearer some_token',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return {
        currencyRates: data.currency.values,
        //
      };
    });
};

export const fetchBank3Data = () => {
  return fetch('https://bank3.example.com/api2', {
    headers: {
      Authorization: 'Bearer some_token',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return {
        currencyRates: data.currency.values,
        //
      };
    });
};
