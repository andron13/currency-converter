import { FC, useState } from "react";

import byrIcon from "../../assets/flags/byr.png";
import { CURRENCIES } from "../shared/currencySource";

import InputItem from "./InputItem";

const InputList: FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const currencyCollection = CURRENCIES.slice(0, 5).map((cur) => (
    <InputItem
      onChange={handleInputChange}
      iconSrc={cur.picture}
      key={cur.acronym}
    />
  ));

  return (
    <div className="space-y-4">
      <InputItem
        iconSrc={byrIcon}
        inputClassName="w-full"
        onChange={(value) => console.log(value)}
      />
      {currencyCollection}
    </div>
  );
};

export default InputList;
