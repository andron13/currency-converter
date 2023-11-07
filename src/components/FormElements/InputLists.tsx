import { FC, useState } from "react";

import byrIcon from "../../assets/flags/byr.png";
import eurIcon from "../../assets/flags/eur.png";
import plnIcon from "../../assets/flags/pln.png";
import rubIcon from "../../assets/flags/rub.png";
import uahIcon from "../../assets/flags/uah.png";
import usdIcon from "../../assets/flags/usd.png";

import InputItem from "./InputItem";

const InputList: FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  return (
    <div className="space-y-4">
      <InputItem
        label="Name"
        inputId="nameInput"
        onChange={(value) => console.log(value)}
      />
      <InputItem
        label="Email"
        inputId="emailInput"
        onChange={(value) => console.log(value)}
      />
      <InputItem
        label="Password"
        inputId="passwordInput"
        onChange={(value) => console.log(value)}
      />
      <InputItem
        onChange={handleInputChange}
        iconSrc={byrIcon}
        inputClassName="w-full"
      />
      <InputItem onChange={handleInputChange} iconSrc={plnIcon} />
      <InputItem onChange={handleInputChange} iconSrc={usdIcon} />
      <InputItem onChange={handleInputChange} iconSrc={rubIcon} />
      <InputItem onChange={handleInputChange} iconSrc={uahIcon} />
      <InputItem onChange={handleInputChange} iconSrc={eurIcon} />
      <InputItem onChange={handleInputChange} />
    </div>
  );
};

export default InputList;
