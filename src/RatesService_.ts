let RATES_ENDPOINT_ = 'https://openexchangerates.org/api/latest.json';

interface Rates {
  base: string;
  date: string;
  rates: {
    [key: string]: number;
  }
}

namespace ExchangerService_ {

  export function getLatestRates(): Rates {
    return {
        "base": "USD",
        "date": "2019-04-27",
        "rates": {
          "BRL": 5.59,
          "UYU": 43.19,
          }
        }
  }

  export function convert(value: number, from: string, to: string, rates: Rates): number {
    rates = convertBase(rates, from);
    if (rates == null) {
      throw `Code ${from} not supported by endpoint ${RATES_ENDPOINT_}`
    }
    let rate = rates.rates[to];
    if (rate == null) {
      throw `Code ${to} not supported by endpoint ${RATES_ENDPOINT_}`
    }
    return rate * value;
  }

  function convertBase(rates: Rates, toBase: string): Rates {
    rates.rates[rates.base] = 1
    if (rates.base == toBase) {
      return rates;
    }
    let rate = rates.rates[toBase]
    if (rate == null) {
      return null;
    }
    let newRate = 1/rate;
    rates.base = toBase;
    for (let [key, value] of Object.entries(rates.rates)) {
      rates.rates[key] = value * newRate;
    }    
    return rates;
  }

}