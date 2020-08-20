/**
 * The Exchange fluent class
 * 
 * @public
 */
class Exchange {

  private value: number;
  private fromCode: string;
  private toCode: string;
  private rates: Rates;

  /**
   * The value to convert
   */
  constructor(value: number) {
    this.value = value;
  }

  /**
   * The code to convert from
   */
  public from(code: string): Exchange {
    this.fromCode = code;
    return this;
  }

  /**
   * The code to convert to
   */
  public to(code: string): Exchange {
    this.toCode = code;
    return this;
  }

  /**
   * Optionally specify the rates. 
   */
  public withRates(rates: Rates): Exchange {
    this.rates = rates;
    return this;
  }

  /**
   * Perform the convertion
   * 
   * @returns The converted value
   */
  public convert(): number {
    if (this.rates == null) {
      return ExchangeService_.convert(this.value, this.fromCode, this.toCode, ExchangeService_.getRates());
    } else {
      return ExchangeService_.convert(this.value, this.fromCode, this.toCode, this.rates)
    }    
  }



}