import {useEffect, useState} from "react";

import fetchExchangeRate from "../services/fetchExchangeRate.ts";
import CurrencyEnum from "../shared/types/enum.ts";

function Converter() {
  const [fromCur, setFromCur] = useState(Object.values(CurrencyEnum)[0]);
  const [toCur, setToCur] = useState(Object.values(CurrencyEnum)[1]);
  const [amount, setAmount] = useState("1");
  const [converted, setConverted] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    if (fromCur === toCur) {
      setConverted(amount);
    } else {
      fetchExchangeRate(fromCur, toCur, amount, controller.signal)
        .then((result) => {
          if (typeof result === "string") {
            setConverted(result);
          } else {
            console.error("Ошибка при получении курса обмена.");
          }
        })
        .catch((error) => {
          console.error("Произошла ошибка при запросе: ", error);
        });
    }
    return () => controller.abort()
  }, [amount, fromCur, toCur]);

  const currencyCollection = Object.values(CurrencyEnum).map((currency) => (
    <option key={currency} value={currency}>
      {currency}
    </option>
  ))

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
          value={fromCur}
          onChange={(e) => setFromCur(e.target.value as CurrencyEnum)}
          className="border border-gray-300 rounded p-2 text-lg"
        >
          {currencyCollection}
        </select>
        <select
          value={toCur}
          onChange={(e) => setToCur(e.target.value as CurrencyEnum)}
          className="border border-gray-300 rounded p-2 text-lg"
        >
          {currencyCollection}
        </select>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Convert
        </button>
      </form>
      <hr/>
      <p className="text-xl amount">
        <span>{`${amount} ${fromCur.toString()} = `}</span>
        <span className="font-bold">{`${converted} ${toCur.toString()}`}</span>
      </p>
    </section>
  );
}

export default Converter;
