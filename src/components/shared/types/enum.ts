enum CurrencyEnum {
  EUR = "EUR", // Евро
  USD = "USD", // Доллар США
  PLN = "PLN", // Polish Złoty
  GBP = "GBP", // British Pound,
}

const flagImages = {
  USD: "путь_к_изображению_USD.png",
  EUR: "путь_к_изображению_EUR.png",
  BYN: "путь_к_изображению_BYN.png",
  UAH: "путь_к_изображению_UAH.png",
  RUB: "путь_к_изображению_RUB.png",
  GEL: "путь_к_изображению_GEL.png",
  AMD: "путь_к_изображению_AMD.png",
  CNY: "путь_к_изображению_CNY.png",
};

/*
  BYN = "BYN", // Беларуский рубль
  UAH = "UAH", // Украинская гривна
  RUB = "RUB", // Российский рубль
  GEL = "GEL", // Грузинский лари
  AMD = "AMD", // Армянский драм
  CNY = "CNY", // Китайский юань
 GBP = "GBP", // Фунт стерлингов (Великобритания)
 JPY = "JPY", // Японская иена
 AUD = "AUD", // Австралийский доллар
 CAD = "CAD", // Канадский доллар
 CHF = "CHF", // Швейцарский франк
 INR = "INR", // Индийская рупия
 */

// {
// https://api.frankfurter.app/currencies
//   AUD: "Australian Dollar",
//   BGN: "Bulgarian Lev",
//   BRL: "Brazilian Real",
//   CAD: "Canadian Dollar",
//   CHF: "Swiss Franc",
//   CNY: "Chinese Renminbi Yuan",
//   CZK: "Czech Koruna",
//   DKK: "Danish Krone",
//   EUR: "Euro",
//   GBP: "British Pound",
//   HKD: "Hong Kong Dollar",
//   HUF: "Hungarian Forint",
//   IDR: "Indonesian Rupiah",
//   ILS: "Israeli New Sheqel",
//   INR: "Indian Rupee",
//   ISK: "Icelandic Króna",
//   JPY: "Japanese Yen",
//   KRW: "South Korean Won",
//   MXN: "Mexican Peso",
//   MYR: "Malaysian Ringgit",
//   NOK: "Norwegian Krone",
//   NZD: "New Zealand Dollar",
//   PHP: "Philippine Peso",
//   PLN: "Polish Złoty",
//   RON: "Romanian Leu",
//   SEK: "Swedish Krona",
//   SGD: "Singapore Dollar",
//   THB: "Thai Baht",
//   TRY: "Turkish Lira",
//   USD: "United States Dollar",
//   ZAR: "South African Rand"
// }

export default CurrencyEnum;
