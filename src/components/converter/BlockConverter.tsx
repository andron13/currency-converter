import { useState } from "react";

import byrIcon from "../../assets/flags/byr.png";
import eurIcon from "../../assets/flags/eur.png";
import plnIcon from "../../assets/flags/pln.png";
import rubIcon from "../../assets/flags/rub.png";
import uahIcon from "../../assets/flags/uah.png";
import usdIcon from "../../assets/flags/usd.png";
import InputItem from "../FormElements/InputItem";

function BlockConverter() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  return (
    <div className="mx-10">
      <form>
        <InputItem onChange={handleInputChange} iconSrc={byrIcon} />
        <InputItem onChange={handleInputChange} iconSrc={plnIcon} />
        <InputItem onChange={handleInputChange} iconSrc={usdIcon} />
        <InputItem onChange={handleInputChange} iconSrc={rubIcon} />
        <InputItem onChange={handleInputChange} iconSrc={uahIcon} />
        <InputItem onChange={handleInputChange} iconSrc={eurIcon} />
        <InputItem onChange={handleInputChange} />
      </form>
    </div>
  );
}

export default BlockConverter;
