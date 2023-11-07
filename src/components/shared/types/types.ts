export type Currency = {
  acronym: string;
  rate: number;
  country?: string;
  currencyName?: string;
  picture?: string;
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
