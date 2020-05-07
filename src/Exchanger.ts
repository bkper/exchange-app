/**
 * @public
 */
class Exchanger {

  constructor(value: number) {
  }

  public from(code: string): Exchanger {
    return this;
  }

  public to(code: string): number {
    return 0;
  }


}