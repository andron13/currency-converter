import { FC, useState, ChangeEvent } from "react";

import { CURRENCIES } from "../../shared/currencySource";

import InputItem from "./InputItem";

const inputRegex: RegExp = /^[0-9]*[.,]?[0-9]{0,2}$/;

const InputList: FC = () => {
  const firstCurrency = CURRENCIES[0];

  const [inputValue, setInputValue] = useState("100");
  const [activeRate, setActiveRate] = useState(Number(firstCurrency.rate));
  const [euroInputValue, setEuroInputValue] = useState(Number(inputValue));
  const [activeField, setActiveField] = useState<string | null>(
    CURRENCIES[0].acronym,
  );

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    acronym: string,
  ) => {
    const currentCur = CURRENCIES.filter((item) => item.acronym === acronym)[0];
    const value = event.target.value;
    if (inputRegex.test(value)) {
      const output = value.replace(",", ".");
      setInputValue(output);
    }
    if (acronym === "EUR") setEuroInputValue(Number(value));
    else setEuroInputValue(Number(value) / Number(currentCur.rate));

    setActiveField(acronym);
    setActiveRate(Number(currentCur.rate));
  };

  const firstCurrencyInput = (
    <InputItem
      label={firstCurrency.acronym}
      exchangeRate={firstCurrency.rate}
      key={firstCurrency.acronym}
      iconSrc={firstCurrency.picture}
      inputClassName="w-full"
      onChange={(event) => handleInputChange(event, firstCurrency.acronym)}
      value={
        activeField === firstCurrency.acronym
          ? inputValue
          : (
              (Number(inputValue) * Number(firstCurrency.rate)) /
              activeRate
            ).toFixed(2)
      }
    />
  );
  const currencyCollection = CURRENCIES.slice(1, 9).map((cur) => (
    <InputItem
      label={cur.acronym}
      exchangeRate={cur.rate}
      key={cur.acronym}
      iconSrc={cur.picture}
      onChange={(event) => handleInputChange(event, cur.acronym)}
      value={
        activeField === cur.acronym
          ? inputValue
          : (Number(euroInputValue) * Number(cur.rate)).toFixed(2)
      }
    />
  ));

  return (
    <fieldset className="pt-1 w-fit">
      {firstCurrencyInput}
      {currencyCollection}
    </fieldset>
  );
};

export default InputList;
