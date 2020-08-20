/**
 * The Rates to be applied when exchanging values
 * 
 * @public
 */
interface ExchangeRates {
  base: string;
  date: string;
  rates: {
    [key: string]: number;
  }
}