// InputItem.tsx

import { FC, useState, ChangeEvent } from "react";

import { CURRENCIES } from "../../shared/currencySource";

import InputItem from "./InputItem";

const InputList: FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^[0-9]*[.,]?[0-9]*$/.test(value)) {
      const output = value.replace(",", ".");
      setInputValue(output);
    }
  };

  const firstCurrency = CURRENCIES[0];
  const currencyCollection = CURRENCIES.slice(1, 9).map((cur) => (
    <InputItem
      label={cur.acronym}
      exchangeRate={cur.rate}
      key={cur.acronym}
      iconSrc={cur.picture}
      onChange={handleInputChange}
      value={(
        (Number(inputValue) / Number(CURRENCIES[0].rate)) *
        Number(cur.rate)
      ).toFixed(2)} // если поле активно, то оно становится главным и в setInputValue должно уходить значение отсюда
    />
  ));

  return (
    <fieldset className="pt-1 w-fit">
      <InputItem
        label={firstCurrency.acronym}
        exchangeRate={CURRENCIES[0].rate}
        key={firstCurrency.acronym}
        iconSrc={firstCurrency.picture}
        inputClassName="w-full"
        onChange={handleInputChange}
        value={inputValue} // если поле не активно, и значения вводятся в другом поле, то оно должно быть равно введённое значение разделённое на exchangeRate активного поля
      />
      {currencyCollection}
    </fieldset>
  );
};

export default InputList;
