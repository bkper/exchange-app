/**
 * Fluent interface to convert a value from one code to another, based on given rates from the rates endpoint.
 * 
 * @example
 * ```js
 *  ExchangeApp.exchange(20).from('USD').to('BRL').convert()
 * ```
 * 
 * @public
 */
function exchange(value: number): Exchange {
  return new Exchange(value)
}

/**
 * Converts a value from one code to a onother, based on given rates from the rates endpoint.
 * 
 * @param {number} value The value to convert
 * @param {string} from The code to convert from
 * @param {string} to The code to convert to
 * 
 * @public
 * 
 */
function convert(value: number, from: string, to: string) {
  return ExchangeService_.convert(value, from, to, ExchangeService_.getLatestRates());
}


/**
 * The rates endpoint to be used. The response JSON format must be like this:
 * ```js
 * {
 *  base: "USD",
 *  rates: {
 *      AED: 3.672538,
 *      AFN: 66.809999,
 *      ALL: 125.716501,
 *      AMD: 484.902502,
 *      ANG: 1.788575,
 *      AOA: 135.295998,
 *      ARS: 9.750101,
 *      AUD: 1.390866,
 *      ...
 *    }
 *  }
 * 
 * ```
 * 
 * If none provided, the default ```https://openexchangerates.org/api/latest.json``` will be used
 * 
 * @param {string} url The rates endpoint to use
 * @param {number} cacheSeconds The time, in seconds, fetched rates should be cached for the given endpoint.
 * 
 * @public
 */
function setRatesEndpoint(url: string, cacheSeconds?: number): void {
  RATES_ENDPOINT_URL_ = url;
  RATES_ENDPOINT_CACHE_SECONDS_ = cacheSeconds;
}
