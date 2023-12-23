import { FC, useState, ChangeEvent } from "react";

import { CURRENCIES } from "../../shared/currencySource";
import { Currency } from "../../shared/types/types";

import InputItem from "./InputItem";

const inputRegex: RegExp = /^[0-9]*[.,]?[0-9]{0,2}$/;

const InputList: FC = () => {
  const firstCurrency = CURRENCIES[0];

  const [inputValue, setInputValue] = useState("100");
  const [euroInputValue, setEuroInputValue] = useState(Number(inputValue));
  const [activeField, setActiveField] = useState<string | null>(
    firstCurrency.acronym,
  );

  const calculateInputValue = (
    currencyRate: number,
    isActive: boolean,
  ): string => {
    return isActive ? inputValue : (euroInputValue * currencyRate).toFixed(2);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    acronym: string,
  ) => {
    const currentCur = CURRENCIES.find((item) => item.acronym === acronym)!;
    const value = event.target.value;
    if (inputRegex.test(value)) {
      const output = value.replace(",", ".");
      setInputValue(output);
    }
    setEuroInputValue(
      acronym !== "EUR"
        ? Number(value) / Number(currentCur.rate)
        : Number(value),
    );
    setActiveField(acronym);
  };

  const renderInputItem = (currency: Currency) => (
    <InputItem
      label={currency.acronym}
      exchangeRate={currency.rate}
      key={currency.acronym}
      iconSrc={currency.picture}
      onChange={(event) => handleInputChange(event, currency.acronym)}
      value={calculateInputValue(
        currency.rate as number,
        activeField === currency.acronym,
      )}
    />
  );

  return (
    <fieldset className="pt-1 w-fit">
      {renderInputItem(firstCurrency)}
      {CURRENCIES.slice(1, 9).map((cur) => renderInputItem(cur))}
    </fieldset>
  );
};

export default InputList;
