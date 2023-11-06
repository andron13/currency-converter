import {ChangeEvent, useEffect, useState} from "react";

import fetchExchangeRate from "../services/fetchExchangeRate.ts";
import {CURRENCIES, Currency} from "../shared/types/types.ts";

function LineConverter() {
  const [fromCur, setFromCur] = useState(Object.values(CURRENCIES)[0]);
  const [toCur, setToCur] = useState(Object.values(CURRENCIES)[1]);
  const [amount, setAmount] = useState("1");
  const [converted, setConverted] = useState<string>("");
  // console.log("fromCur", fromCur)
  // console.log("toCur", toCur)
  useEffect(() => {
    const controller = new AbortController();

    if (fromCur === toCur) {
      setConverted(amount);
    } else {
      fetchExchangeRate(fromCur, toCur, amount, controller.signal)
        .then((result) => {
          if (typeof result === "string") {
            setConverted(result);
          }
        })
    }
    return () => controller.abort()
  }, [amount, fromCur, toCur]);

  const currencyCollection = Object.values(CURRENCIES).map((cur) => (
    <option key={cur.code} value={cur.code}>
      {cur.code}
    </option>
  ))

  function handleChangeCurrency(setter: (value: Currency) => void) {
    return (e: ChangeEvent<HTMLSelectElement>) => {
      const selectedCurrency = Object.values(CURRENCIES).find(
        (currency) => currency.code === e.target.value
      );
      if (selectedCurrency) {
        setter(selectedCurrency);
      }
    };
  }

  return (
    <section className="p-4 bg-white font-sans text-gray-700 text-base flex flex-col gap-6">
      <form className="flex gap-4">
        <input
          type="text"
          className="border border-gray-300 rounded p-2"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={fromCur.code}
          onChange={handleChangeCurrency(setFromCur)}
          className="border border-gray-300 rounded p-2 text-lg"
        >
          {currencyCollection}
        </select>
        <select
          value={toCur.code}
          onChange={handleChangeCurrency(setToCur)}
          className="border border-gray-300 rounded p-2 text-lg"
        >
          {currencyCollection}
        </select>
      </form>
      <hr/>
      <p className="text-xl amount">
        <span>{`${amount} ${fromCur.code.toString()} = `}</span>
        <span className="font-bold">{`${converted} ${toCur.code.toString()}`}</span>
      </p>
    </section>
  );
}

export default LineConverter;
