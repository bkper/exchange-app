let RATES_ENDPOINT_URL_: string;
let RATES_ENDPOINT_CACHE_SECONDS_: number;


namespace ExchangeService_ {

  function isDefaultRatesEndpoint(): boolean {
    return RATES_ENDPOINT_URL_ == null || RATES_ENDPOINT_URL_.trim() == '';
  }

  export function getRates(): ExchangeRates {
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
      let rates: ExchangeRates = JSON.parse(ratesJson);

      if (rates == null) {
        throw `Unable to get exchange rates from endpoint ${ratesEndpointUrl}`;
      }

      if (rates.base == null || rates.rates == null) {
        throw `Rates json from ${ratesEndpointUrl} in wrong format. Expected:
        {
          base: string;
          date: string;
          rates: {
            [key: string]: number;
          }
        }
        `;
      }

      if (isDefaultRatesEndpoint()) {
        CacheService.getScriptCache().put(ratesEndpointUrl, ratesJson, 3600);
      } else if (RATES_ENDPOINT_CACHE_SECONDS_ != null && RATES_ENDPOINT_CACHE_SECONDS_ > 0) {
        CacheService.getScriptCache().put(ratesEndpointUrl, ratesJson, RATES_ENDPOINT_CACHE_SECONDS_);
      }
      return rates;
    }
  }

  export function convert(value: number, from: string, to: string, rates: ExchangeRates): number {
    rates = convertBase(rates, from);
    if (rates == null) {
      throw `Code ${from} not found in ${JSON.stringify(rates)}`
    }
    let rate = rates.rates[to];
    if (rate == null) {
      throw `Code ${to} not found in ${JSON.stringify(rates)}`
    }
    return rate * value;
  }

  function convertBase(rates: ExchangeRates, toBase: string): ExchangeRates {
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