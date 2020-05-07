/**
 * @public
 */
class Exchanger {

  private value: number;
  private fromCode: string;
  private toCode: string;

  constructor(value: number) {
    this.value = value;
  }

  public from(code: string): Exchanger {
    this.fromCode = code;
    return this;
  }

  public to(code: string): Exchanger {
    this.toCode = code;
    return this;
  }

  public convert(): number {
    return ExchangerService_.convert(this.value, this.fromCode, this.toCode, ExchangerService_.getLatestRates());
  }



}