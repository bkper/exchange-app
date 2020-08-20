/**
 * The Rates to be applied when exchanging values
 * 
 * @public
 */
interface Rates {
  base: string;
  date: string;
  rates: {
    [key: string]: number;
  }
}