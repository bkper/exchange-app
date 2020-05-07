var expect = require('chai').expect;

describe('Exchanger', () => {
  it('should show same rate when exchanging from base', () => {
     expect(5.716).to.equal(exchange(1).from('USD').to('BRL'));
  });

});