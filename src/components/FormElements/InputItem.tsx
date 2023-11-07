import { ChangeEvent, FC } from "react";

import byrIcon from "../../assets/flags/byr.png";

interface InputItemProps {
  label?: string;
  iconSrc?: string;
  inputId?: string;
  inputClassName?: string;
  value?: string;
  onChange: (value: string) => void;
}

const InputItem: FC<InputItemProps> = ({
  label = "Default Label",
  iconSrc = byrIcon,
  inputId = "defaultInput",
  inputClassName = "default-input-class",
  value = "",
  onChange,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="input-field">
      <label htmlFor={inputId} className="label">
        {label}:
      </label>
      <img src={iconSrc} alt="Иконка" className="icon" />
      <input
        type="text"
        id={inputId}
        className={inputClassName}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputItem;
