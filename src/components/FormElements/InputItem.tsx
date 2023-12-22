import { ChangeEvent, FC } from "react";

interface InputItemProps {
  label: string;
  exchangeRate: string | number | null;
  iconSrc: string;
  inputId?: string;
  inputClassName?: string;
  value?: string;
  currencySymbol?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputItem: FC<InputItemProps> = ({
  label = "acronym",
  exchangeRate = null,
  iconSrc,
  inputClassName = "w-28",
  value = "1010",
  onChange,
}) => {
  const inputId = label;
  return (
    <fieldset className="flex items-center justify-between space-x-2 px-2 py-1 w-72">
      <div className="flex justify-between space-x-2 pr-4">
        <img src={iconSrc} alt="Иконка" className="w-6 h-6" />
        <label htmlFor={inputId} className="font-bold">
          {label}:
        </label>
      </div>
      <label htmlFor={inputId} className="text-red-600 font-bold">
        {exchangeRate != 1 && exchangeRate}
      </label>
      <input
        type="text"
        id={inputId}
        className={`ml-auto rounded-md border-2 border-gray-300 p-1 ${inputClassName}`}
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
};

export default InputItem;
