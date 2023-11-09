import cadIcon from "../assets/flags/cad.png";
import eurIcon from "../assets/flags/eur.png";
import plnIcon from "../assets/flags/pln.png";
import usdIcon from "../assets/flags/usd.png"; //${acronym} => src={`src/assets/flags/${acronym.toLowerCase()}.png`}

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
    rate: 0,
    country: "United States of America",
    currencyName: "United States dollar",
    picture: usdIcon,
  },
  {
    acronym: "PLN",
    rate: 0,
    country: "Poland",
    currencyName: "Polish złoty",
    picture: plnIcon,
  },
  {
    acronym: "CAD",
    rate: 0,
    country: "Canada",
    currencyName: "Canadian Dollar",
    picture: cadIcon,
  },
  {
    acronym: "BYN",
    rate: 0,
    country: "Belarus",
    currencyName: "Belarusian ruble",
    picture: cadIcon,
  },
];
