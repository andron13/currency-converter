import { ChangeEvent, FC } from "react";

import byrIcon from "../../assets/flags/byr.png";

interface InputItemProps {
  label?: string;
  labelTwo?: string;
  iconSrc?: string;
  inputId?: string;
  inputClassName?: string;
  value?: string;
  onChange: (value: string) => void;
}

const InputItem: FC<InputItemProps> = ({
  label = "USD",
  labelTwo = "0.7306",
  iconSrc = byrIcon,
  inputId = "defaultInput",
  inputClassName = "w-1/2",
  value = "3423423",
  onChange,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <fieldset className="flex items-center justify-between space-x-2 px-2 py-1 w-fit">
      {/* w-96 80 72 64 fit*/}
      <img src={iconSrc} alt="Иконка" className="w-6 h-6" />
      <label htmlFor={inputId} className="font-bold">
        {label}:
      </label>
      <label htmlFor={inputId} className="text-red-600 font-bold">
        {labelTwo}:
      </label>
      <input
        type="text"
        id={inputId}
        className={`ml-auto rounded-md border-2 border-gray-300 p-1 ${inputClassName}`}
        value={value}
        onChange={handleInputChange}
      />
    </fieldset>
  );
};

export default InputItem;
