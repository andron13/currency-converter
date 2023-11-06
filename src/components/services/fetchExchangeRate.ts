import {Currency} from "../shared/types/types.ts";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

function convertToEuropeanNumber(amount: string): string {
  const number = parseFloat(amount);
  const userLanguage = navigator.language || 'de-DE';
  return number.toLocaleString(userLanguage, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

async function fetchExchangeRate(
  fromCurrency: Currency,
  toCurrency: Currency,
  amount: string,
  controller: AbortSignal
) {

  try {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency.code}&to=${toCurrency.code}`,
      {
        signal: controller,
      }
    );
    // console.log("res", res)
    if (!res.ok) {
      return new Error("Network response was not ok");
    }
    const data = await res.json();
    // console.log("data", data)
    const converted = data.rates[toCurrency.code];

    return convertToEuropeanNumber(converted);
  } catch (error) {
    return {message: getErrorMessage(error)};
  }
}

export default fetchExchangeRate;
