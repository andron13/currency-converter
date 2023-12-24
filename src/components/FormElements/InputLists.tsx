import { FC, useState, ChangeEvent, useMemo } from "react";

import { CURRENCIES, mainCurrencyAcronym } from "../../shared/currencySource";
import { Currency } from "../../shared/types/types";

import InputItem from "./InputItem";

const inputRegex: RegExp = /^[0-9]*[.,]?[0-9]{0,2}$/;

const InputList: FC = () => {
  const [mainCurrencyItem, otherCurrencies] = useMemo(() => {
    const mainItem = CURRENCIES.find(
      (item) => item.acronym === mainCurrencyAcronym,
    );
    const otherItems = CURRENCIES.filter(
      (item) => item.acronym !== mainCurrencyAcronym,
    );
    return [mainItem ? mainItem : CURRENCIES[0], otherItems];
  }, [CURRENCIES, mainCurrencyAcronym]);

  const [inputValue, setInputValue] = useState("100");
  const [euroInputValue, setEuroInputValue] = useState(Number(inputValue));
  const [activeField, setActiveField] = useState<string | null>(
    mainCurrencyItem.acronym,
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
      currency={currency}
      key={currency.acronym}
      onChange={(event) => handleInputChange(event, currency.acronym)}
      value={calculateInputValue(
        currency.rate as number,
        activeField === currency.acronym,
      )}
    />
  );

  const currencyArray = [mainCurrencyItem].concat(otherCurrencies);

  return (
    <fieldset className="pt-1 w-fit">
      {currencyArray.slice(0, 9).map((cur) => renderInputItem(cur))}
    </fieldset>
  );
};

export default InputList;
