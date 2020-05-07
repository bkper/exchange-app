let RATES_ENDPOINT_URL_: string;

interface Rates {
  base: string;
  date: string;
  rates: {
    [key: string]: number;
  }
}

namespace ExchangeService_ {

  function isDefaultRatesEndpoint(): boolean {
    return RATES_ENDPOINT_URL_ == null || RATES_ENDPOINT_URL_.trim() == '';
  }

  export function getLatestRates(): Rates {
    let ratesEndpointUrl = isDefaultRatesEndpoint() ? 'https://openexchangerates.org/api/latest.json' : RATES_ENDPOINT_URL_;
    let cachedRatesJson =  CacheService.getScriptCache().get(ratesEndpointUrl)
    if (cachedRatesJson != null) {
      return JSON.parse(cachedRatesJson);
    } else {
      let request = HttpRequestApp.newRequest(ratesEndpointUrl);
      if (isDefaultRatesEndpoint()) {
        request.addParam('app_id', PropertiesService.getScriptProperties().getProperty('app_id'))
        request.addParam('show_alternative','1')
      }
      let ratesJson = request.fetch().getContentText();
      CacheService.getScriptCache().put(ratesEndpointUrl, ratesJson, 3600);
      return JSON.parse(ratesJson)
    }
  }

  export function convert(value: number, from: string, to: string, rates: Rates): number {
    rates = convertBase(rates, from);
    if (rates == null) {
      throw `Code ${from} not supported by endpoint ${RATES_ENDPOINT_URL_}`
    }
    let rate = rates.rates[to];
    if (rate == null) {
      throw `Code ${to} not supported by endpoint ${RATES_ENDPOINT_URL_}`
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