import { FC, useState, ChangeEvent } from "react";

import { CURRENCIES } from "../../shared/currencySource";

import InputItem from "./InputItem";

const InputList: FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const firstCurrency = CURRENCIES[0]; // euro by default
  const currencyCollection = CURRENCIES.slice(1, 9).map((cur) => (
    <InputItem
      label={cur.acronym}
      exchangeRate={0.7301}
      key={cur.acronym}
      iconSrc={cur.picture}
      onChange={handleInputChange}
    />
  ));

  return (
    <fieldset className="pt-1 w-fit">
      <InputItem
        label={firstCurrency.acronym}
        exchangeRate={null}
        key={firstCurrency.acronym}
        iconSrc={firstCurrency.picture}
        inputClassName="w-full"
        onChange={handleInputChange}
      />
      {currencyCollection}
    </fieldset>
  );
};

export default InputList;
