/**
 * Fluent interface
 * 
 * @public
 */
function exchange(value: number): Exchange {
  return new Exchange(value)
}

/**
 * @public
 */
function convert(value: number, from: string, to: string) {
  return ExchangeService_.convert(value, from, to, ExchangeService_.getLatestRates());
}


/**
 * @public
 */
function setRatesEndpoint(url: string, cacheSeconds?: number): void {
  RATES_ENDPOINT_URL_ = url;
  RATES_ENDPOINT_CACHE_SECONDS_ = cacheSeconds;
}
