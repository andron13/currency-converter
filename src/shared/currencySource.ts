import bynIcon from "../assets/flags/byn.png";
import cadIcon from "../assets/flags/cad.png"; //${acronym} => src={`src/assets/flags/${acronym.toLowerCase()}.png`}
import cnyIcon from "../assets/flags/cny.png";
import eurIcon from "../assets/flags/eur.png";
import kztIcon from "../assets/flags/kzt.png";
import plnIcon from "../assets/flags/pln.png";
import rubIcon from "../assets/flags/rub.png";
import uahIcon from "../assets/flags/uah.png";
import usdIcon from "../assets/flags/usd.png";

import { Currency } from "./types/types";

export const CURRENCIES: Currency[] = [
  {
    acronym: "EUR",
    rate: 1,
    country: "European Union",
    currencyName: "Euro",
    picture: eurIcon,
  },
  {
    acronym: "USD",
    rate: 0.1,
    country: "United States of America",
    currencyName: "United States dollar",
    picture: usdIcon,
  },
  {
    acronym: "PLN",
    rate: 0.2,
    country: "Poland",
    currencyName: "Polish złoty",
    picture: plnIcon,
  },
  {
    acronym: "CAD",
    rate: 0.3,
    country: "Canada",
    currencyName: "Canadian Dollar",
    picture: cadIcon,
  },
  {
    acronym: "BYN",
    rate: 0.4,
    country: "Belarus",
    currencyName: "Belarusian ruble",
    picture: bynIcon,
  },
  {
    acronym: "RUB",
    rate: 0.5,
    country: "Russia",
    currencyName: "Russian Ruble",
    picture: rubIcon,
  },
  {
    acronym: "UAH",
    rate: 0.6,
    country: "Ukraine",
    currencyName: "Ukrainian Hryvnia",
    picture: uahIcon,
  },
  {
    acronym: "CNY",
    rate: 0.7,
    country: "China",
    currencyName: "Chinese Yuan",
    picture: cnyIcon,
  },
  {
    acronym: "KZT",
    rate: 0.8,
    country: "Kazakhstan",
    currencyName: "Kazakhstani Tenge",
    picture: kztIcon,
  },
  {
    acronym: "AUD",
    rate: 0.9,
    country: "Australia",
    currencyName: "Australian Dollar",
    picture: "audIcon",
  },
];
