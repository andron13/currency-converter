import { ChangeEvent, useEffect, useState } from 'react';

import { CURRENCIES } from '../../shared/mock/currencySource';
import { Currency } from '../../shared/types/types';
import fetchExchangeRate from '../services/fetchExchangeRate';

function LineConverter() {
  const [fromCur, setFromCur] = useState(CURRENCIES[0]);
  const [toCur, setToCur] = useState(CURRENCIES[1]);
  const [amount, setAmount] = useState('1');
  const [converted, setConverted] = useState<string>('');
  // console.log("fromCur", fromCur)
  // console.log("toCur", toCur)
  useEffect(() => {
    const controller = new AbortController();

    if (fromCur.acronym === toCur.acronym) {
      setConverted(amount);
    } else {
      fetchExchangeRate(fromCur, toCur, amount, controller.signal).then(
        (result) => {
          if (typeof result === 'string') {
            setConverted(result);
          }
        },
      );
    }
    return () => controller.abort();
  }, [amount, fromCur, toCur]);

  const currencyCollection = CURRENCIES.slice(0, 4).map((cur) => (
    <option key={cur.acronym} value={cur.acronym}>
      {cur.acronym}
    </option>
  ));

  function handleChangeCurrency(setter: (value: Currency) => void) {
    return (e: ChangeEvent<HTMLSelectElement>) => {
      const selectedCurrency = CURRENCIES.find(
        (currency) => currency.acronym === e.target.value,
      );
      if (selectedCurrency) {
        setter(selectedCurrency);
      }
    };
  }

  return (
    <section className="p-4 bg-white font-sans text-base flex flex-col gap-6">
      <form className="flex gap-4">
        <input
          type="text"
          className="border border-gray-300 rounded p-2"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={fromCur.acronym}
          onChange={handleChangeCurrency(setFromCur)}
          className="border border-gray-300 rounded p-2 text-lg">
          {currencyCollection}
        </select>
        <select
          value={toCur.acronym}
          onChange={handleChangeCurrency(setToCur)}
          className="border border-gray-300 rounded p-2 text-lg">
          {currencyCollection}
        </select>
      </form>
      <hr />
      <p className="text-xl amount">
        <span>{`${amount} ${fromCur.acronym.toString()} = `}</span>
        <span className="font-bold">
          {`${converted} ${toCur.acronym.toString()}`}
        </span>
      </p>
    </section>
  );
}

export default LineConverter;
