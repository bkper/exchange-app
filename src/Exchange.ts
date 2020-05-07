/**
 * @public
 */
class Exchange {

  private value: number;
  private fromCode: string;
  private toCode: string;

  constructor(value: number) {
    this.value = value;
  }

  public from(code: string): Exchange {
    this.fromCode = code;
    return this;
  }

  public to(code: string): Exchange {
    this.toCode = code;
    return this;
  }

  public convert(): number {
    return ExchangeService_.convert(this.value, this.fromCode, this.toCode, ExchangeService_.getLatestRates());
  }



}