import bynIcon from "../assets/flags/byn.png";
import cadIcon from "../assets/flags/cad.png";
import cnyIcon from "../assets/flags/cny.png";
import eurIcon from "../assets/flags/eur.png";
import kztIcon from "../assets/flags/kzt.png";
import plnIcon from "../assets/flags/pln.png";
import rubIcon from "../assets/flags/rub.png";
import uahIcon from "../assets/flags/uah.png";
import usdIcon from "../assets/flags/usd.png";

import { Currency } from "./types/types";

export const mainCurrencyAcronym = "BYN";
export const CURRENCIES: Currency[] = [
  {
    acronym: "EUR",
    rate: 1,
    country: "European Union",
    currencyName: "Euro",
    picture: eurIcon,
    currencySymbol: "€",
  },
  {
    acronym: "USD",
    rate: 0.9,
    country: "United States of America",
    currencyName: "United States dollar",
    picture: usdIcon,
    currencySymbol: "$",
  },
  {
    acronym: "PLN",
    rate: 4,
    country: "Poland",
    currencyName: "Polish złoty",
    picture: plnIcon,
    currencySymbol: "zł",
  },
  {
    acronym: "CAD",
    rate: 0.3,
    country: "Canada",
    currencyName: "Canadian Dollar",
    picture: cadIcon,
    currencySymbol: "C$",
  },
  {
    acronym: "BYN",
    rate: 3,
    country: "Belarus",
    currencyName: "Belarusian ruble",
    picture: bynIcon,
    currencySymbol: "Br",
  },
  {
    acronym: "RUB",
    rate: 0.5,
    country: "Russia",
    currencyName: "Russian Ruble",
    picture: rubIcon,
    currencySymbol: "₽",
  },
  {
    acronym: "UAH",
    rate: 0.6,
    country: "Ukraine",
    currencyName: "Ukrainian Hryvnia",
    picture: uahIcon,
    currencySymbol: "₴",
  },
  {
    acronym: "CNY",
    rate: 0.7,
    country: "China",
    currencyName: "Chinese Yuan",
    picture: cnyIcon,
    currencySymbol: "¥",
  },
  {
    acronym: "KZT",
    rate: 0.8,
    country: "Kazakhstan",
    currencyName: "Kazakhstani Tenge",
    picture: kztIcon,
    currencySymbol: "₸",
  },
  {
    acronym: "AUD",
    rate: 0.9,
    country: "Australia",
    currencyName: "Australian Dollar",
    picture: "audIcon",
    currencySymbol: "A$",
  },
];
