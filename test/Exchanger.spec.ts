var expect = require('chai').expect;

describe('Exchanger in BRL base latest rates', () => {
  let latestRates = {
    "base": "USD",
    "date": "2019-04-27",
    "rates": {
      "BRL": 5.59,
      "UYU": 43.19,
      }
  }
  it('should convert from base', () => {
     expect('5.59').to.equal(ExchangerService_.convert(1, 'USD', 'BRL', latestRates).toFixed(2));
     expect('43.19').to.equal(ExchangerService_.convert(1, 'USD', 'UYU', latestRates).toFixed(2));
  });

  it('should convert same base be aways 1', () => {
    expect('1.00').to.equal(ExchangerService_.convert(1, 'USD', 'USD', latestRates).toFixed(2));
    expect('1.00').to.equal(ExchangerService_.convert(1, 'UYU', 'UYU', latestRates).toFixed(2));
    expect('1.00').to.equal(ExchangerService_.convert(1, 'BRL', 'BRL', latestRates).toFixed(2));
  });
  
  it('should convert to base', () => {
     expect('0.18').to.equal(ExchangerService_.convert(1, 'BRL', 'USD', latestRates).toFixed(2));
     expect('0.02').to.equal(ExchangerService_.convert(1, 'UYU', 'USD', latestRates).toFixed(2));
  });

  it('should convert between rates', () => {
     expect('7.73').to.equal(ExchangerService_.convert(1, 'BRL', 'UYU', latestRates).toFixed(2));
     expect('0.13').to.equal(ExchangerService_.convert(1, 'UYU', 'BRL', latestRates).toFixed(2));
  });

});

describe('Exchanger in BRL base latest rates', () => {
  let latestRates = {
    "base": "BRL",
    "date": "2019-04-27",
    "rates": {
      "USD": 0.18,
      "UYU": 7.73,
      }
    }
  it('should convert from base', () => {
     expect('5.56').to.equal(ExchangerService_.convert(1, 'USD', 'BRL', latestRates).toFixed(2));
     expect('42.94').to.equal(ExchangerService_.convert(1, 'USD', 'UYU', latestRates).toFixed(2));
  });

  it('should convert same base be aways 1', () => {
    expect('1.00').to.equal(ExchangerService_.convert(1, 'USD', 'USD', latestRates).toFixed(2));
    expect('1.00').to.equal(ExchangerService_.convert(1, 'UYU', 'UYU', latestRates).toFixed(2));
    expect('1.00').to.equal(ExchangerService_.convert(1, 'BRL', 'BRL', latestRates).toFixed(2));
  });  

  it('should convert to base', () => {
     expect('0.18').to.equal(ExchangerService_.convert(1, 'BRL', 'USD', latestRates).toFixed(2));
     expect('0.02').to.equal(ExchangerService_.convert(1, 'UYU', 'USD', latestRates).toFixed(2));
  });

  it('should convert between rates', () => {
     expect('7.73').to.equal(ExchangerService_.convert(1, 'BRL', 'UYU', latestRates).toFixed(2));
     expect('0.13').to.equal(ExchangerService_.convert(1, 'UYU', 'BRL', latestRates).toFixed(2));
  });

});