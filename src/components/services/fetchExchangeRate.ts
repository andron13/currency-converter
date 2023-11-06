import CurrencyEnum from "../shared/types/enum.ts";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

function convertToEuropeanNumber(amount: string): string {
  const number = parseFloat(amount);
  return number.toLocaleString('de-DE', {minimumFractionDigits: 2});
}

async function fetchExchangeRate(
  fromCurrency: CurrencyEnum,
  toCurrency: CurrencyEnum,
  amount: string,
  controller: AbortSignal
) {
  try {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
      {
        signal: controller,
      }
    );
    if (!res.ok) {
      return new Error("Network response was not ok");
    }
    const data = await res.json();
    const converted = data.rates[toCurrency];

    return convertToEuropeanNumber(converted);
  } catch (error) {
    return {message: getErrorMessage(error)};
  }
}

export default fetchExchangeRate;
