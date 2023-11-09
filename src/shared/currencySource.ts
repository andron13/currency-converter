import cadIcon from "../assets/flags/cad.png";
import eurIcon from "../assets/flags/eur.png";
import plnIcon from "../assets/flags/pln.png";
import usdIcon from "../assets/flags/usd.png";

//${acronym} => src={`src/assets/flags/${acronym.toLowerCase()}.png`}

import { Currency } from "./types/types";

export const CURRENCIES: Currency[] = [
  {
    acronym: "EUR",
    rate: 1,
    country: "EU",
    currencyName: "EU",
    picture: eurIcon,
  },
  {
    acronym: "USD",
    rate: 0,
    country: "USA",
    currencyName: "USD",
    picture: usdIcon,
  },
  {
    acronym: "PLN",
    rate: 0,
    country: "Poland",
    currencyName: "PLN",
    picture: plnIcon,
  },
  {
    acronym: "CAD",
    rate: 0,
    country: "Canadian Dollar",
    currencyName: "CAD",
    picture: cadIcon,
  },
];
