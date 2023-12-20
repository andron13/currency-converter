Ваш код корректен и вы правильно применяете метод `toFixed` для показа результата перемножения с округлением до двух знаков после запятой.

Однако, согласно комментарию, вы хотите, чтобы поле, в котором вводит пользователь, становилось "главным". Это мешает сценарию, когда состояние inputValue общее для всех полей ввода, так как ввод в одно поле будет переписываться вводом в другое поле.

Для реализации этого потребуется некоторая более сложная логика. Возможны различные подходы, но в целом вам нужно будет:
1. Определить, какое поле является "главным" в данный момент.
2. Обновлять состояние только для этого поля, когда пользователь вводит что-то.
3. Обновлять значения всех остальных полей на основе "главного" поля и соответствующего exchangeRate.

Следующий фрагмент кода выполняет эти операции с использованием дополнительного состояния – useState Hook для отслеживания "активного" поля:

```tsx
import { FC, useState, ChangeEvent } from "react";
import { CURRENCIES } from "../../shared/currencySource";
import InputItem from "./InputItem";

const InputList: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleInputChange = (label: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^[0-9]*[.,]?[0-9]*$/.test(value)) {
      const output = value.replace(",", ".");
      setInputValue(output);
      setActiveField(label);
    }
  };

  const firstCurrency = CURRENCIES[0];
  const currencyCollection = CURRENCIES.slice(1, 9).map((cur) => (
    <InputItem
      label={cur.acronym}
      exchangeRate={cur.rate}
      key={cur.acronym}
      iconSrc={cur.picture}
      onChange={handleInputChange(cur.acronym)}
      value={
        activeField === cur.acronym
          ? inputValue
          : (Number(inputValue) * Number(cur.rate)).toFixed(2)
      }
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
        onChange={handleInputChange(firstCurrency.acronym)}
        value={inputValue}
      />
      {currencyCollection}
    </fieldset>
  );
};

export default InputList;
```

Этот фрагмент привязывает функцию `handleInputChange` к каждому полю ввода, которая сначала проверяет новое значение на соответствие шаблону, а затем, если значение допустимо, обновляет `inputValue` и устанавливает `activeField` равным значению `label` текущего поля ввода. Значение каждого поля ввода устанавливается равным `inputValue`, если это поле "активно", в противном случае его значение рассчитывается как произведение `inputValue` на `rate`.

--------------
Твоя текущая реализация очень близка к тому, что ты хочешь. Ты правильно используешь функциональные компоненты, используешь состояние и правильно сделал калькуляцию стоимости в зависимости от валюты.

Судя по твоим комментариям, тебе нужно более динамическое управление состоянием - где ты хочешь, чтобы любое поле ввода могло стать "главным" по мере ввода пользователя. Я предлагаю следующую реализацию:

```tsx
import { FC, useState, ChangeEvent } from "react";

import { CURRENCIES } from "../../shared/currencySource";

import InputItem from "./InputItem";

const InputList: FC = () => {
  const [mainCurrency, setMainCurrency] = useState(CURRENCIES[0]);
  const [inputValues, setInputValues] = useState(
    CURRENCIES.reduce((acc, cur) => {
      acc[cur.acronym] = '';
      return acc;
    }, {} as { [key: string]: string })
  );

  const handleInputChange = (cur: typeof CURRENCIES[0]) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (/^[0-9]*[.,]?[0-9]*$/.test(value)) {
      const output = Number(value.replace(",", "."));

      const newValues = {...inputValues};
      for (const key in newValues) {
        newValues[key] = ((key === cur.acronym ? output : output * cur.rate / mainCurrency.rate) || 0).toFixed(2);
      }
      setInputValues(newValues);

      // Опционально: переключиться на новую валюту
      setMainCurrency(cur);
    }
  };

  const currencyCollection = CURRENCIES.map((cur) => (
    <InputItem
      label={cur.acronym}
      exchangeRate={cur.rate}
      key={cur.acronym}
      iconSrc={cur.picture}
      onChange={handleInputChange(cur)}
      value={cur.acronym === mainCurrency.acronym ? String(inputValues[cur.acronym]) : ((Number(inputValues[mainCurrency.acronym]) || 0) * cur.rate / mainCurrency.rate).toFixed(2)}
    />
  ));

  return (
    <fieldset className="pt-1 w-fit">
      {currencyCollection}
    </fieldset>
  );
};

export default InputList;
```
Здесь я свернул поле ввода с нулевого индекса с теми остальными и обрабатываю их все одинаково. Для каждого поля ввода мы присваиваем свой обработчик - теперь обработчики знают, какую валюту они обрабатывают. Мы теперь храним значения для всех полей ввода в объекте `inputValues`.

Когда пользователь изменяет поле ввода, мы пересчитываем его согласно курсу валюты для этого поля и обновляем `inputValues`. Если нужно, что бы валюта использованная в последнем поле вводе становилась главной потом, тогда я присваиваю эту валюту в `setMainCurrency`. Если такой функциональности не надо, тогда `setMainCurrency` можно убрать.

Давай рассмотрим словами как это работает:

Если пользователь вводит `100` в поле для `USD`, обработчик заберет значение полей ввода, введет `100` в USD и соответствующие значения в другие поля ввода, исходя из курсов валют и соотношения к `USD`. Внутреннее состояние теперь выглядит вот так:

```
{
  "USD": "100.00",
  "EUR": "85.00",
  "GBP": "73.00",
  // остальные значения
}
```

Если теперь ввести `50` в поле для `EUR`, (если активировать переключение главной валюты), это переключит главную валюту на `EUR` и обновит все значения полей ввода исходя из этого, пересчитает другие величины в соответствии с `50` в `EUR`. Внутреннее состояние обновляется до:

```
{
  "USD": "59.00",
  "EUR": "50.00",
  "GBP": "40.00",
  // остальные значения
}
```
