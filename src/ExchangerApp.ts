/**
 * Fluent interface
 * 
 * @public
 */
function exchange(value: number): Exchanger {
  return new Exchanger(value)
}

/**
 * 
 * 
 * @public
 */
function convert(value: number, from: string, to: string) {
  return ExchangerService_.convert(value, from, to, ExchangerService_.getLatestRates());
}


/**
 * @public
 */
function setRatesEndpoint(ratesEndpoint: string): void {
  RATES_ENDPOINT_ = ratesEndpoint;
}