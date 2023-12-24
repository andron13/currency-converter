import { ChangeEvent, FC, useMemo } from "react";

import { mainCurrencyAcronym } from "../../shared/currencySource";
import { Currency } from "../../shared/types/types";

interface InputItemProps {
  currency: Currency;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputItem: FC<InputItemProps> = ({ currency, value, onChange }) => {
  const [curRate, mainCurrencyClass] = useMemo(() => {
    if (currency.acronym !== mainCurrencyAcronym) {
      return [currency.rate, "w-28"];
    } else return [null, ""];
  }, [mainCurrencyAcronym, currency.rate, currency.acronym]);

  return (
    <fieldset className="flex items-center justify-between space-x-2 px-2 py-1 w-72">
      <div className="flex justify-between space-x-2 pr-4">
        {currency.picture && (
          <img
            src={currency.picture}
            alt={`${currency.currencyName}: ${currency.acronym}`}
            title={`${currency.country}: ${currency.acronym}`}
            className="w-6 h-6"
          />
        )}
        <label htmlFor={currency.acronym} className="font-bold">
          {currency.acronym}:
        </label>
      </div>
      <label htmlFor={currency.acronym} className="text-red-600 font-bold">
        {curRate}
      </label>
      <input
        type="text"
        id={currency.acronym}
        className={`ml-auto rounded-md border-2 border-gray-300 p-1 ${mainCurrencyClass}`}
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
};

export default InputItem;
