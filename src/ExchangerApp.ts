/**
 * 
 * @public
 * 
 */
function exchange(value: number): Exchanger {
  return new Exchanger(value)
}